const { generateQueryEmbedding } = require('./embeddings');

/**
 * Calculates cosine similarity between two vector arrays of equal length.
 */
function cosineSimilarity(vecA, vecB) {
  if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
  
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Searches across document chunks for top-K matching contexts relevant to query.
 */
async function retrieveContext(query, documents, topK = 3) {
  if (!documents || documents.length === 0) return [];
  
  const queryVec = await generateQueryEmbedding(query);
  const results = [];

  for (const doc of documents) {
    if (!doc.chunks || doc.chunks.length === 0) continue;

    for (const chunk of doc.chunks) {
      let score = 0;
      if (chunk.embedding && chunk.embedding.length > 0) {
        score = cosineSimilarity(queryVec, chunk.embedding);
      } else {
        // Keyword fallback matching
        const queryTerms = query.toLowerCase().split(/\s+/).filter(b => b.length > 2);
        const chunkTextLower = chunk.text.toLowerCase();
        let matches = 0;
        queryTerms.forEach(term => {
          if (chunkTextLower.includes(term)) matches++;
        });
        score = queryTerms.length > 0 ? (matches / queryTerms.length) * 0.5 : 0;
      }

      if (score > 0.05) {
        results.push({
          documentId: doc._id || doc.id,
          documentTitle: doc.title || doc.originalname || 'Document',
          snippet: chunk.text,
          score: Number(score.toFixed(4))
        });
      }
    }
  }

  // Sort descending by similarity score
  results.sort((a, b) => b.score - a.score);

  return results.slice(0, topK);
}

module.exports = {
  cosineSimilarity,
  retrieveContext
};

const crypto = require('crypto');

/**
 * Computes a deterministic local TF-IDF / term-frequency vector embedding
 * representation for a given text snippet.
 * Produces a normalized vector array suitable for cosine similarity.
 */
function generateLocalEmbedding(text, vectorDimensions = 64) {
  if (!text || typeof text !== 'string') {
    return new Array(vectorDimensions).fill(0);
  }

  const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
  const vector = new Array(vectorDimensions).fill(0);

  words.forEach(word => {
    // Hash word into vector index
    const hash = crypto.createHash('md5').update(word).digest();
    const index = hash.readUInt16BE(0) % vectorDimensions;
    const sign = (hash.readUInt8(2) % 2 === 0) ? 1 : -1;
    vector[index] += sign;
  });

  // L2 Normalize vector
  const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
  if (magnitude === 0) return vector;

  return vector.map(val => Number((val / magnitude).toFixed(6)));
}

/**
 * Generates embeddings for a batch of text chunks.
 */
async function generateEmbeddings(chunks) {
  return chunks.map(chunk => ({
    ...chunk,
    embedding: generateLocalEmbedding(chunk.text)
  }));
}

/**
 * Generates an embedding for a single search query.
 */
async function generateQueryEmbedding(query) {
  return generateLocalEmbedding(query);
}

module.exports = {
  generateLocalEmbedding,
  generateEmbeddings,
  generateQueryEmbedding
};

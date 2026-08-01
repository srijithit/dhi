/**
 * Splits text into overlapping chunks for RAG vector search.
 * @param {string} text - The input text content to chunk.
 * @param {number} chunkSize - Maximum words/characters per chunk.
 * @param {number} chunkOverlap - Overlap size between adjacent chunks.
 * @returns {Array<{chunkIndex: number, text: string}>}
 */
function createChunks(text, chunkSize = 500, chunkOverlap = 100) {
  if (!text || typeof text !== 'string') return [];
  
  // Clean whitespace
  const cleanedText = text.replace(/\s+/g, ' ').trim();
  if (cleanedText.length === 0) return [];

  // Split by sentences or paragraphs if possible
  const sentences = cleanedText.match(/[^.!?]+[.!?]+/g) || [cleanedText];
  const chunks = [];
  
  let currentChunk = '';
  let chunkIndex = 0;

  for (const sentence of sentences) {
    if ((currentChunk + ' ' + sentence).length > chunkSize && currentChunk.length > 0) {
      chunks.push({
        chunkIndex,
        text: currentChunk.trim()
      });
      chunkIndex++;

      // Retain overlap tail from current chunk
      const overlapStart = Math.max(0, currentChunk.length - chunkOverlap);
      currentChunk = currentChunk.substring(overlapStart) + ' ' + sentence;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + sentence;
    }
  }

  if (currentChunk.trim().length > 0) {
    chunks.push({
      chunkIndex,
      text: currentChunk.trim()
    });
  }

  return chunks;
}

module.exports = {
  createChunks
};

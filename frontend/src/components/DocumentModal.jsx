import React, { useState } from 'react';
import { X, UploadCloud, FileText, Trash2, CheckCircle, AlertCircle } from 'lucide-react';

export default function DocumentModal({ isOpen, onClose, documents, onUpload, onDelete }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  if (!isOpen) return null;

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await processUpload(e.dataTransfer.files[0]);
    }
  };

  const handleChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      await processUpload(e.target.files[0]);
    }
  };

  const processUpload = async (file) => {
    setUploading(true);
    setStatusMsg(null);
    try {
      await onUpload(file);
      setStatusMsg({ type: 'success', text: `"${file.name}" indexed successfully!` });
    } catch (err) {
      setStatusMsg({ type: 'error', text: err.message || 'Failed to process file' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={22} color="var(--accent-cyan)" />
            <h3 className="modal-title">Knowledge Base Documents</h3>
          </div>
          <button className="icon-btn-sm" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Status Alert */}
        {statusMsg && (
          <div style={{
            padding: '0.75rem 1rem',
            borderRadius: 10,
            marginBottom: '1rem',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: statusMsg.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            border: statusMsg.type === 'success' ? '1px solid #10b981' : '1px solid #ef4444',
            color: statusMsg.type === 'success' ? '#34d399' : '#f87171'
          }}>
            {statusMsg.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
            <span>{statusMsg.text}</span>
          </div>
        )}

        {/* Drag and Drop Box */}
        <div
          className={`dropzone ${dragActive ? 'active' : ''}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-input').click()}
        >
          <input
            id="file-input"
            type="file"
            accept=".pdf,.txt,.md,.docx,.json"
            style={{ display: 'none' }}
            onChange={handleChange}
          />
          <UploadCloud size={40} color="var(--accent-blue)" style={{ marginBottom: '0.5rem' }} />
          <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            {uploading ? 'Parsing and Vectorizing Chunks...' : 'Click to Upload or Drag & Drop'}
          </h4>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Supports PDF, TXT, Markdown, DOCX (Max 10MB)
          </p>
        </div>

        {/* Document List */}
        <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Uploaded Knowledge Base Files ({documents.length})
        </h4>

        <div style={{ maxHeight: 220, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {documents.map((doc) => {
            const docId = doc._id || doc.id;
            return (
              <div
                key={docId}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 10
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FileText size={18} color="var(--accent-cyan)" />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{doc.title || doc.originalname}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {doc.chunksCount || (doc.chunks ? doc.chunks.length : 0)} vector chunks • {(doc.size / 1024).toFixed(1)} KB
                    </div>
                  </div>
                </div>
                <button
                  className="icon-btn-sm"
                  onClick={() => onDelete(docId)}
                  title="Delete Document"
                >
                  <Trash2 size={16} color="#ef4444" />
                </button>
              </div>
            );
          })}

          {documents.length === 0 && (
            <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              No documents uploaded yet. Upload a document to perform RAG retrieval!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef } from 'react';
import { Send, Paperclip, Sparkles } from 'lucide-react';

export default function ChatInput({ onSendMessage, isStreaming, onOpenDocModal }) {
  const [prompt, setPrompt] = useState('');
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim() || isStreaming) return;
    onSendMessage(prompt.trim());
    setPrompt('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInput = (e) => {
    setPrompt(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`;
  };

  return (
    <div className="input-area-wrapper">
      <form className="chat-input-card" onSubmit={handleSubmit}>
        <textarea
          ref={textareaRef}
          className="chat-textarea"
          placeholder="Ask a question or request document summary..."
          value={prompt}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          rows={1}
        />

        <div className="input-actions-bar">
          <button
            type="button"
            className="attach-btn"
            onClick={onOpenDocModal}
            title="Attach Document to RAG Knowledge Base"
          >
            <Paperclip size={15} color="var(--accent-cyan)" />
            <span>Attach Document</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Shift + Enter for new line
            </span>
            <button
              type="submit"
              className="send-btn"
              disabled={!prompt.trim() || isStreaming}
              title="Send Message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

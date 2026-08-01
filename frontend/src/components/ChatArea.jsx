import React, { useState, useEffect, useRef } from 'react';
import { Copy, RefreshCw, ThumbsUp, ThumbsDown, Sparkles, FileText, Check } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';
import SkeletonLoader from './SkeletonLoader';

export default function ChatArea({
  currentChat,
  streamingMessage,
  isStreaming,
  onRegenerate,
  onFeedback,
  loadingChat
}) {
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages, streamingMessage]);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (loadingChat) {
    return (
      <main className="main-workspace">
        <header className="top-navbar">
          <div className="chat-title-header">
            <span>Loading Conversation...</span>
          </div>
        </header>
        <div className="messages-container">
          <SkeletonLoader />
        </div>
      </main>
    );
  }

  const messages = currentChat ? currentChat.messages || [] : [];

  return (
    <main className="main-workspace">
      <header className="top-navbar">
        <div className="chat-title-header">
          <Sparkles size={18} color="var(--accent-cyan)" />
          <span>{currentChat ? currentChat.title : 'RAG Context Assistant'}</span>
          <span className="badge-status">Vector RAG Online</span>
        </div>
      </header>

      <div className="messages-container">
        {messages.length === 0 && !streamingMessage && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justify: 'center',
            height: '100%',
            color: 'var(--text-muted)',
            textAlign: 'center',
            gap: '1rem',
            padding: '2rem'
          }}>
            <div style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              boxShadow: 'var(--shadow-glow)'
            }}>
              <Sparkles size={30} color="#fff" />
            </div>
            <h2>Enterprise RAG Intelligence</h2>
            <p style={{ maxWidth: 500, fontSize: '0.9rem', lineHeight: 1.6 }}>
              Ask any question, analyze attached documents, or retrieve contextual insights from your uploaded knowledge base.
            </p>
          </div>
        )}

        {messages.map((msg, index) => {
          const isAssistant = msg.role === 'assistant';
          const msgId = msg.messageId || msg._id || index;

          return (
            <div key={msgId} className={`message-row ${msg.role}`}>
              <div className={`message-avatar ${msg.role}`}>
                {isAssistant ? 'AI' : 'U'}
              </div>

              <div className="message-content-wrapper">
                <div className="message-bubble">
                  <MarkdownRenderer content={msg.content} />

                  {/* Context Sources Display */}
                  {isAssistant && msg.contextSources && msg.contextSources.length > 0 && (
                    <div className="sources-block">
                      <div className="sources-label">Retrieved Context Badges</div>
                      <div className="sources-badges">
                        {msg.contextSources.map((src, sIdx) => (
                          <div key={sIdx} className="source-badge" title={src.snippet}>
                            <FileText size={12} />
                            <span>{src.documentTitle}</span>
                            <span style={{ opacity: 0.6, fontSize: '0.7rem' }}>({(src.score * 100).toFixed(0)}%)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Response Action Bar (Copy, Regenerate, Feedback) */}
                {isAssistant && (
                  <div className="message-actions">
                    <button className="action-btn" onClick={() => handleCopy(msg.content, msgId)}>
                      {copiedId === msgId ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                      <span>{copiedId === msgId ? 'Copied' : 'Copy'}</span>
                    </button>

                    {index === messages.length - 1 && (
                      <button className="action-btn" onClick={() => onRegenerate(messages[index - 1]?.content)}>
                        <RefreshCw size={14} />
                        <span>Regenerate</span>
                      </button>
                    )}

                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.25rem' }}>
                      <button
                        className={`action-btn ${msg.feedback === 'up' ? 'active-up' : ''}`}
                        onClick={() => onFeedback(msgId, 'up')}
                        title="Helpful response"
                      >
                        <ThumbsUp size={14} />
                      </button>
                      <button
                        className={`action-btn ${msg.feedback === 'down' ? 'active-down' : ''}`}
                        onClick={() => onFeedback(msgId, 'down')}
                        title="Unhelpful response"
                      >
                        <ThumbsDown size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Live Streaming Message Display */}
        {streamingMessage && (
          <div className="message-row assistant">
            <div className="message-avatar assistant">AI</div>
            <div className="message-content-wrapper">
              <div className="message-bubble">
                <MarkdownRenderer content={streamingMessage} />
              </div>
            </div>
          </div>
        )}

        {isStreaming && !streamingMessage && (
          <div className="message-row assistant">
            <div className="message-avatar assistant">AI</div>
            <div className="message-content-wrapper">
              <div className="message-bubble typing-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </main>
  );
}

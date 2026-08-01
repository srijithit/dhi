import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function MarkdownRenderer({ content }) {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState(null);

  const copyCode = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  // Helper to parse code blocks and basic markdown elements
  const renderFormattedContent = (text) => {
    if (!text) return null;

    // Split code blocks
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    let blockCount = 0;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Push text before code block
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: text.substring(lastIndex, match.index)
        });
      }

      parts.push({
        type: 'code',
        language: match[1] || 'code',
        code: match[2].trim(),
        index: blockCount++
      });

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex)
      });
    }

    return parts.map((part, idx) => {
      if (part.type === 'code') {
        return (
          <div key={idx} className="code-block-wrapper" style={{ position: 'relative', margin: '0.85rem 0' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              padding: '0.4rem 0.85rem',
              background: '#1e293b',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              fontSize: '0.75rem',
              color: '#94a3b8',
              fontFamily: 'monospace'
            }}>
              <span>{part.language}</span>
              <button
                onClick={() => copyCode(part.code, part.index)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                {copiedCodeIndex === part.index ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedCodeIndex === part.index ? 'Copied!' : 'Copy code'}</span>
              </button>
            </div>
            <pre style={{
              margin: 0,
              padding: '0.85rem',
              background: '#030712',
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
              overflowX: 'auto',
              color: '#38bdf8',
              fontSize: '0.85rem'
            }}>
              <code>{part.code}</code>
            </pre>
          </div>
        );
      }

      // Format basic text (bold, headers, tables)
      const lines = part.content.split('\n');
      return (
        <span key={idx}>
          {lines.map((line, lIdx) => {
            if (line.startsWith('### ')) {
              return <h4 key={lIdx} style={{ margin: '0.6rem 0 0.3rem 0', color: '#60a5fa' }}>{line.replace('### ', '')}</h4>;
            }
            if (line.startsWith('## ')) {
              return <h3 key={lIdx} style={{ margin: '0.75rem 0 0.4rem 0', color: '#38bdf8' }}>{line.replace('## ', '')}</h3>;
            }
            if (line.startsWith('- ')) {
              return <li key={lIdx} style={{ marginLeft: '1.2rem', marginBottom: '0.25rem' }}>{line.replace('- ', '')}</li>;
            }
            return (
              <React.Fragment key={lIdx}>
                {line}
                {lIdx < lines.length - 1 && <br />}
              </React.Fragment>
            );
          })}
        </span>
      );
    });
  };

  return <div className="markdown-body">{renderFormattedContent(content)}</div>;
}

import React, { useState } from 'react';
import { Plus, MessageSquare, Trash2, Edit2, Check, FileText, Search, LogOut } from 'lucide-react';

export default function Sidebar({
  chats,
  activeChatId,
  onSelectChat,
  onNewChat,
  onDeleteChat,
  onRenameChat,
  onOpenDocModal,
  user,
  onLogout
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const filteredChats = chats.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startRename = (e, chat) => {
    e.stopPropagation();
    setEditingId(chat._id || chat.id);
    setEditTitle(chat.title);
  };

  const saveRename = (e, chatId) => {
    e.stopPropagation();
    if (editTitle.trim()) {
      onRenameChat(chatId, editTitle.trim());
    }
    setEditingId(null);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand-logo">
          <div className="brand-icon">⚡</div>
          <span>SaaS <span style={{ color: 'var(--accent-cyan)' }}>RAG Chat</span></span>
        </div>
      </div>

      <button className="new-chat-btn" onClick={onNewChat}>
        <Plus size={18} />
        <span>New Conversation</span>
      </button>

      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search conversations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="history-list">
        {filteredChats.map((chat) => {
          const chatId = chat._id || chat.id;
          const isActive = chatId === activeChatId;
          const isEditing = editingId === chatId;

          return (
            <div
              key={chatId}
              className={`history-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectChat(chatId)}
            >
              <MessageSquare size={16} style={{ minWidth: 16, color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)' }} />

              {isEditing ? (
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.key === 'Enter' && saveRename(e, chatId)}
                  style={{
                    background: '#1e293b',
                    border: '1px solid var(--accent-blue)',
                    borderRadius: 4,
                    color: '#fff',
                    padding: '2px 4px',
                    fontSize: '0.85rem',
                    width: '100%'
                  }}
                  autoFocus
                />
              ) : (
                <span className="history-title">{chat.title}</span>
              )}

              <div className="history-actions">
                {isEditing ? (
                  <button className="icon-btn-sm" onClick={(e) => saveRename(e, chatId)}>
                    <Check size={14} color="#10b981" />
                  </button>
                ) : (
                  <>
                    <button className="icon-btn-sm" onClick={(e) => startRename(e, chat)} title="Rename">
                      <Edit2 size={13} />
                    </button>
                    <button className="icon-btn-sm" onClick={(e) => { e.stopPropagation(); onDeleteChat(chatId); }} title="Delete">
                      <Trash2 size={13} color="#ef4444" />
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}

        {filteredChats.length === 0 && (
          <div style={{ textAlign: 'center', padding: '1.5rem 1rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            No chat history found
          </div>
        )}
      </div>

      <div className="sidebar-footer">
        <button className="doc-manager-btn" onClick={onOpenDocModal}>
          <FileText size={16} color="var(--accent-cyan)" />
          <span>Knowledge Base Documents</span>
        </button>

        <div className="user-profile">
          <div className="user-info">
            <div className="avatar">{user ? user.username.charAt(0).toUpperCase() : 'U'}</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{user ? user.username : 'Guest User'}</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Pro Subscriber</span>
            </div>
          </div>
          <button className="icon-btn-sm" onClick={onLogout} title="Log Out">
            <LogOut size={16} color="#ef4444" />
          </button>
        </div>
      </div>
    </aside>
  );
}

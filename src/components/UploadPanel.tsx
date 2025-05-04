import React from 'react';

interface UploadPanelProps {
  onFile: (file: File) => void;
  onSelectModel: (modelUrl: string) => void;
  onRender: () => void;
  canRender: boolean;
  models: { name: string; url: string }[];
}

const UploadPanel: React.FC<UploadPanelProps> = ({ onFile, onSelectModel, onRender, canRender, models }) => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #23243a 0%, #2d2e4a 100%)',
    }}>
      <div style={{
        background: 'rgba(30, 30, 40, 0.95)',
        borderRadius: 16,
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        padding: '40px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        maxWidth: 400,
        width: '100%',
      }}>
        <h2 style={{ color: '#fff', marginBottom: 0, fontWeight: 700, fontSize: 28 }}>Three.js Model Viewer</h2>
        <h3 style={{ color: '#fff', marginBottom: 8, fontWeight: 300, fontSize: 17 }}>by James Vuong</h3>
        <p style={{ color: '#bbb', marginBottom: 0, textAlign: 'center', fontSize: 16 }}>
          Upload a <b>.stl</b> or <b>.obj</b> file, or select a test model below.<br />
          <span style={{ color: '#888', fontSize: 13 }}>(Other file types are not supported.)</span>
        </p>
        <input
          type="file"
          accept=".stl,.obj"
          style={{ margin: '8px 0', fontSize: 16 }}
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              onFile(e.target.files[0]);
            }
          }}
        />
        <div style={{ width: '100%', textAlign: 'center' }}>
          <span style={{ marginRight: 8, color: '#bbb' }}>Or select a test model:</span>
          <select
            onChange={e => e.target.value && onSelectModel(e.target.value)}
            defaultValue=""
            style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #444', background: '#23243a', color: '#fff', fontSize: 16 }}
          >
            <option value="" disabled>Select model...</option>
            {models.map(m => (
              <option key={m.url} value={m.url}>{m.name}</option>
            ))}
          </select>
        </div>
        <button
          style={{
            marginTop: 8,
            padding: '12px 36px',
            fontSize: 20,
            fontWeight: 600,
            borderRadius: 8,
            background: canRender ? 'linear-gradient(90deg, #5a4fff 0%, #7c6fff 100%)' : '#444',
            color: '#fff',
            border: 'none',
            boxShadow: canRender ? '0 2px 8px rgba(90,79,255,0.15)' : 'none',
            cursor: canRender ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
            opacity: canRender ? 1 : 0.6,
            width: '100%',
            maxWidth: 300,
          }}
          onClick={onRender}
          disabled={!canRender}
        >
          Render
        </button>
      </div>
    </div>
  );
};

export default UploadPanel; 
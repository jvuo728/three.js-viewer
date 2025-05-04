import React, { useState, useEffect } from 'react';
import UploadPanel from './components/UploadPanel';
import MainViewer from './components/MainViewer';

interface ModelOption {
  name: string;
  url: string;
}

const MODELS_PATH = '/models/';

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [modelUrl, setModelUrl] = useState<string | null>(null);
  const [models, setModels] = useState<ModelOption[]>([]);
  const [showViewer, setShowViewer] = useState(false);

  useEffect(() => {
    setModels([
      { name: 'Test STL', url: MODELS_PATH + 'test1.stl' },
      { name: 'Test STL 2', url: MODELS_PATH + 'test2.stl' },
      { name: 'Test OBJ', url: MODELS_PATH + 'test3.obj' },
    ]);
  }, []);

  // Reset viewer when file/model changes
  useEffect(() => {
    setShowViewer(false);
  }, [file, modelUrl]);

  return (
    <>
      {!showViewer && (
        <UploadPanel
          onFile={f => {
            setFile(f);
            setModelUrl(null);
          }}
          onSelectModel={url => {
            setModelUrl(url);
            setFile(null);
          }}
          onRender={() => setShowViewer(true)}
          canRender={!!file || !!modelUrl}
          models={models}
        />
      )}
      {showViewer && (
        <>
          <button style={{ position: 'absolute', top: 24, left: 24, zIndex: 2001, marginBottom: 0, fontSize: 18, padding: '8px 18px', borderRadius: 8, background: '#23243a', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }} onClick={() => setShowViewer(false)}>&larr; Back</button>
          <MainViewer file={file || undefined} modelUrl={modelUrl || undefined} />
        </>
      )}
    </>
  );
};

export default App;

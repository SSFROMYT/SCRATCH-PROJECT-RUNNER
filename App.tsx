
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import ProjectPlayer from './components/ProjectPlayer';

const App: React.FC = () => {
  const [projectUrl, setProjectUrl] = useState<string | null>(null);
  const [projectName, setProjectName] = useState<string | null>(null);

  const handleFileSelect = useCallback((file: File) => {
    if (projectUrl) {
      URL.revokeObjectURL(projectUrl);
    }
    const newProjectUrl = URL.createObjectURL(file);
    setProjectUrl(newProjectUrl);
    setProjectName(file.name);
  }, [projectUrl]);

  const handleReset = useCallback(() => {
    if (projectUrl) {
      URL.revokeObjectURL(projectUrl);
    }
    setProjectUrl(null);
    setProjectName(null);
  }, [projectUrl]);

  useEffect(() => {
    return () => {
      if (projectUrl) {
        URL.revokeObjectURL(projectUrl);
      }
    };
  }, [projectUrl]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
      <Header projectName={projectName} onReset={handleReset} />
      <main className="flex-grow flex flex-col">
        {projectUrl ? (
          <ProjectPlayer projectUrl={projectUrl} />
        ) : (
          <WelcomeScreen onFileSelect={handleFileSelect} />
        )}
      </main>
    </div>
  );
};

export default App;

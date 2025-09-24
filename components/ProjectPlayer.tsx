
import React, { useState } from 'react';
import { LoadingSpinner } from './icons';

interface ProjectPlayerProps {
  projectUrl: string;
}

const ProjectPlayer: React.FC<ProjectPlayerProps> = ({ projectUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const embedUrl = `https://turbowarp.org/embed?project_url=${encodeURIComponent(projectUrl)}&controls&autoplay`;

  return (
    <div className="flex-grow w-full h-full p-2 md:p-4 bg-gray-900 relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-center">
            <LoadingSpinner className="h-12 w-12 text-purple-400 animate-spin mx-auto"/>
            <p className="mt-4 text-lg text-gray-300">Loading project...</p>
          </div>
        </div>
      )}
      <iframe
        src={embedUrl}
        className={`w-full h-full border-0 rounded-lg shadow-2xl bg-black transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        allow="autoplay"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default ProjectPlayer;

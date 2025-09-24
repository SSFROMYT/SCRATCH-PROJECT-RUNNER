
import React from 'react';
import { CodeIcon } from './icons';

interface HeaderProps {
  projectName: string | null;
  onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({ projectName, onReset }) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <CodeIcon className="h-8 w-8 text-purple-400" />
          <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Project Runner
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {projectName && (
            <span className="hidden md:block text-sm text-gray-400 truncate max-w-xs" title={projectName}>
              {projectName}
            </span>
          )}
          {projectName && (
            <button
              onClick={onReset}
              className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
            >
              Load New
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


import React, { useRef, useCallback } from 'react';
import { UploadIcon } from './icons';

interface WelcomeScreenProps {
  onFileSelect: (file: File) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  }, [onFileSelect]);


  return (
    <div className="flex-grow flex items-center justify-center p-8 text-center" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="p-5 bg-gray-800 rounded-full border-2 border-gray-700">
            <UploadIcon className="h-16 w-16 text-purple-400" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-2">Welcome to Project Runner</h2>
        <p className="text-gray-400 mb-8">
          Upload your Scratch, TurboWarp, or PenguinMod project file to get started.
        </p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".sb,.sb2,.sb3,.pmp"
        />
        <button
          onClick={handleClick}
          className="w-full px-6 py-4 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
        >
          Select Project File
        </button>
         <p className="text-gray-500 mt-4 text-sm">or drag and drop a file here</p>
        <p className="text-xs text-gray-600 mt-6">
          Supported formats: .sb, .sb2, .sb3, .pmp
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;

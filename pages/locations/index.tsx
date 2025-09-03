import React, { useEffect, useRef, useState, Suspense } from "react";
import dynamic from 'next/dynamic';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { motion } from "framer-motion";


// Dynamically import components to reduce initial bundle size
const LocationsHero = dynamic(() => import('@/container/locations-page/LocationsHero'), {
  loading: () => <div className="h-screen bg-black flex items-center justify-center text-white">Loading Locations...</div>,
  ssr: false
});

const LocationsGrid = dynamic(() => import('@/container/locations-page/LocationsGrid'), {
  loading: () => <div className="h-screen bg-black flex items-center justify-center text-white">Loading Locations Grid...</div>,
  ssr: false
});



// Error Fallback Component with improved typing
const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div 
      role="alert" 
      className="bg-black text-red-500 min-h-screen flex flex-col items-center justify-center p-8 text-center"
    >
      <h1 className="text-4xl mb-4">Locations Page Error</h1>
      <pre className="text-sm mb-4 max-w-md overflow-x-auto text-red-300">
        {error.message || 'An unexpected error occurred'}
      </pre>
      <div className="flex space-x-4">
        <button 
          onClick={resetErrorBoundary} 
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Try Again
        </button>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Reload Page
        </button>
      </div>
        </div>
  );
};

export default function LocationsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const [isScrollInitialized, setIsScrollInitialized] = useState(false);
  const [scrollError, setScrollError] = useState<string | null>(null);

  
   

  const handleErrorReset = () => {
    setScrollError(null);
    window.location.reload();
  };

  if (scrollError) {
  return (
      <div className="bg-black text-red-500 min-h-screen flex items-center justify-center p-8 text-center">
        <div className="bg-gray-900 p-8 rounded-xl shadow-2xl">
          <h1 className="text-4xl mb-4 text-red-400">Scroll Initialization Failed</h1>
          <p className="text-lg mb-4 text-red-300">{scrollError}</p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onReset={handleErrorReset}
    >
      <Suspense fallback={<div className="bg-black min-h-screen"></div>}>
        <div 
          data-scroll-container 
          ref={containerRef} 
          className={`
            bg-black text-white min-h-screen font-brice 
            ${isScrollInitialized ? 'scroll-smooth' : ''}
          `}
        >
      <LocationsHero />
      <LocationsGrid />
    </div>
      </Suspense>
    </ErrorBoundary>
  );
}
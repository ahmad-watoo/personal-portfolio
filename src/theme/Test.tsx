import React, { useState } from 'react';

const TailwindTest: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
        
        {/* Responsive Design */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Typography & Colors */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Tailwind CSS v3 Features
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Testing all important Tailwind features
            </p>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsDark(!isDark)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Flexbox & Hover Effects */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Flexbox & Animations
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hover me! Scale, shadow, and pulse animation
              </p>
            </div>

            {/* Forms & Focus States */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Forms & Focus
              </h3>
              <input 
                type="text"
                placeholder="Click me..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none dark:bg-gray-700 dark:text-white transition-all"
              />
              <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors">
                Submit
              </button>
            </div>

            {/* Position & Z-index */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-bl-full"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Positioning & Gradients
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolute positioned gradient with z-index
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Transforms & Transitions */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Transforms & Transitions</h3>
              <div className="flex gap-4 flex-wrap">
                <div className="w-16 h-16 bg-white/20 rounded-lg hover:rotate-12 hover:scale-110 transition-transform duration-300"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg hover:-translate-y-2 hover:translate-x-2 transition-transform duration-300"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg hover:skew-x-12 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Shadows & Borders */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Shadows & Borders</h3>
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm"></div>
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md"></div>
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg"></div>
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl"></div>
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-2xl"></div>
              </div>
            </div>
          </div>

          {/* Spacing & Sizing */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Spacing & Sizing</h3>
            <div className="space-y-2">
              <div className="h-2 bg-blue-200 rounded w-1/4"></div>
              <div className="h-4 bg-blue-300 rounded w-2/4"></div>
              <div className="h-6 bg-blue-400 rounded w-3/4"></div>
              <div className="h-8 bg-blue-500 rounded w-full"></div>
            </div>
          </div>

          {/* Pseudo-classes & Children */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Pseudo-classes</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded first:rounded-t-lg last:rounded-b-lg hover:bg-blue-500 hover:text-white transition-colors">
                First child - hover me
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded first:rounded-t-lg last:rounded-b-lg hover:bg-blue-500 hover:text-white transition-colors">
                Middle button
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded first:rounded-t-lg last:rounded-b-lg hover:bg-blue-500 hover:text-white transition-colors">
                Last child - hover me
              </button>
            </div>
          </div>

          {/* Responsive Design Test */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Responsive Design</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-red-100 dark:bg-red-900 p-4 text-center rounded">Col 1</div>
              <div className="bg-blue-100 dark:bg-blue-900 p-4 text-center rounded">Col 2</div>
              <div className="bg-green-100 dark:bg-green-900 p-4 text-center rounded">Col 3</div>
              <div className="bg-yellow-100 dark:bg-yellow-900 p-4 text-center rounded">Col 4</div>
            </div>
            <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
              <span className="block sm:hidden">📱 Mobile</span>
              <span className="hidden sm:block md:hidden">📱 Tablet</span>
              <span className="hidden md:block lg:hidden">💻 Desktop Small</span>
              <span className="hidden lg:block">🖥️ Desktop Large</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TailwindTest;
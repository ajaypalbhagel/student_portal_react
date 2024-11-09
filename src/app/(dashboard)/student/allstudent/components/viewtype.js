"use client";
import React from 'react';

export default function ViewType({ viewType, setViewType }) {
  return (
    <div className="p-2">
      {/* List View Button */}
      <button
        onClick={() => setViewType('list')}
        className={`py-2 px-4 border rounded ${viewType === 'list' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white text-blue-500 border-blue-500'}`}
      >
        List View
      </button>

      {/* Grid View Button */}
      <button
        onClick={() => setViewType('grid')}
        className={`py-2 px-4 border rounded m-2 ${viewType === 'grid' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white text-blue-500 border-blue-500'}`}
      >
        Grid View
      </button>
    </div>
  );
}

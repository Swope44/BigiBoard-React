import React, { useState } from 'react';

const kpiRows = [
  { label: 'SAFETY', owners: 'Todd P & Todd S' },
  { label: 'QUALITY', owners: 'Todd S' },
  { label: 'COST & PRODUCTIVITY', owners: 'George G & Zack C' },
  { label: 'PEOPLE & CULTURE', owners: 'Rob H & George G' },
];

const columns = [
  'Main KPI',
  'Sub KPI',
  'Main Activity',
  'Reflection',
  'Action',
];

// Placeholder images for demo
const placeholderImages = [
  'https://placehold.co/200x120/6c757d/fff?text=Main+KPI',
  'https://placehold.co/200x120/adb5bd/fff?text=Sub+KPI',
  'https://placehold.co/200x120/ced4da/333?text=Main+Activity',
  'https://placehold.co/200x120/868e96/fff?text=Reflection',
  'https://placehold.co/200x120/495057/fff?text=Action',
];

function App() {
  // State for modal preview
  const [modal, setModal] = useState({ open: false, img: '', label: '' });

  return (
    <div className="min-h-screen bg-[repeating-linear-gradient(135deg,_#8881_0_8px,_#aaa1_8px_16px)] p-4">
      {/* Header */}
      <header className="flex items-center justify-between bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl px-6 py-3 mb-4 shadow-lg border border-gray-300">
        <div className="flex items-center gap-2">
          <button className="mr-2 p-2 rounded hover:bg-gray-300/40">
            <svg width="28" height="28" fill="none" stroke="gray" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.png" alt="Toyota" className="h-10 w-16 object-contain" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide text-white drop-shadow">MANAGER FMDS</h1>
          <div className="text-lg text-white font-semibold drop-shadow">June 2025</div>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Lexus_division_emblem.svg" alt="Lexus" className="h-10 w-16 object-contain" />
      </header>

      {/* Section Headers */}
      <div className="grid grid-cols-6 gap-3 mb-3">
        <div></div>
        {columns.map((col) => (
          <div key={col} className="bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-center py-3 text-lg font-semibold text-white shadow border border-gray-300 tracking-wide">
            {col}
          </div>
        ))}
      </div>

      {/* KPI Rows */}
      <div className="grid grid-rows-4 gap-4">
        {kpiRows.map((row, rowIdx) => (
          <div key={row.label} className="grid grid-cols-6 gap-3 items-stretch">
            {/* Row label */}
            <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-white font-bold text-lg shadow border border-gray-300 p-2 text-center min-h-[120px]">
              <span className="mb-1">{row.label}</span>
              <span className="text-xs font-normal whitespace-pre-line">{row.owners}</span>
            </div>
            {/* KPI columns */}
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="bg-gradient-to-b from-gray-200 to-gray-400 rounded-lg flex items-center justify-center shadow border border-gray-300 min-h-[120px] relative group overflow-hidden">
                {/* Simulate image content */}
                <img
                  src={placeholderImages[colIdx % placeholderImages.length]}
                  alt={col}
                  className="w-full h-full object-cover rounded-lg cursor-pointer transition-transform group-hover:scale-105"
                  onClick={() => setModal({ open: true, img: placeholderImages[colIdx % placeholderImages.length], label: `${row.label} - ${col}` })}
                />
                {/* Overlay for hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🔍</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setModal({ open: false, img: '', label: '' })}>
          <div className="bg-white rounded-xl shadow-lg p-4 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setModal({ open: false, img: '', label: '' })}>&times;</button>
            <div className="mb-2 text-center font-semibold text-gray-700">{modal.label}</div>
            <img src={modal.img} alt={modal.label} className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

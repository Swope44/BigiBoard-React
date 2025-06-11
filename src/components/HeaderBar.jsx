// src/components/HeaderBar.jsx
export default function HeaderBar() {
  return (
    <header className="w-full py-4 px-6 bg-gray-800 flex justify-between items-center shadow-md">
      <div className="text-xl font-semibold">Final One South FMDS</div>
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-gray-700 rounded-full" />
        <div className="w-8 h-8 bg-gray-700 rounded-full" />
      </div>
    </header>
  );
}

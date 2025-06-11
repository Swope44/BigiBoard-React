// src/components/SidebarLeft.jsx
const labels = ['Sub KPI', 'Sub KPI', 'Activity KPI', 'Hoshin'];

export default function SidebarLeft() {
  return (
    <aside className="flex flex-col text-sm w-16 bg-gray-800 text-center pt-6">
      {labels.map((label, i) => (
        <div
          key={i}
          className="h-32 flex justify-center items-center border-b border-gray-700 text-vertical"
        >
          <span className="transform -rotate-90">{label}</span>
        </div>
      ))}
    </aside>
  );
}

// src/components/SidebarRight.jsx
const icons = ['🔔', '👤', '📊', '📁', '⚙️', '⭐'];

export default function SidebarRight() {
  return (
    <aside className="flex flex-col justify-center items-center w-12 bg-gray-800">
      {icons.map((icon, i) => (
        <div key={i} className="p-2 hover:bg-gray-700 cursor-pointer">
          <span>{icon}</span>
        </div>
      ))}
    </aside>
  );
}

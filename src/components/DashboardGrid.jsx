// src/components/DashboardGrid.jsx
import DashboardTile from './DashboardTile';

export default function DashboardGrid() {
  const cols = ['Safety', 'Quality', 'Productivity', 'Cost', 'HROD'];
  const rows = 4;

  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-2 p-4 flex-grow">
      {Array.from({ length: cols.length * rows }).map((_, i) => (
        <DashboardTile key={i} />
      ))}
    </div>
  );
}

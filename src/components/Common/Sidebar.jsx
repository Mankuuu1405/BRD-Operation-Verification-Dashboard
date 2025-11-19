import React from "react";
import { LayoutDashboard, MapPin, FileX } from "lucide-react";

const Sidebar = ({ selectedView = 'dashboard', onSelect = () => {} }) => {
  const menu = [
    { key: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { key: 'siteVisits', label: 'Site Visits', icon: <MapPin size={18} /> },
    { key: 'rejections', label: 'Rejections', icon: <FileX size={18} /> }
  ];

  return (
    <>
      {/* Desktop / tablet sidebar */}
      <aside className="hidden md:flex h-screen w-64 bg-gray-900 text-white flex-col py-6 px-4 fixed left-0 top-0">
        <div className="text-2xl font-bold mb-8 px-2">BRD Portal</div>
        <div className="text-xl font-bold mb-8 px-2">Operations</div>

        <nav className="flex flex-col gap-2">
          {menu.map((item) => {
            const active = selectedView === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onSelect(item.key)}
                className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition ${active ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
              >
                <span className="opacity-90">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto text-xs text-gray-400 px-3">v1.0 • Ops Dashboard</div>
      </aside>

      {/* Mobile top nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white z-20">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="text-lg font-semibold">Operations</div>
          <div className="text-sm text-gray-300">v1.0</div>
        </div>
        <nav className="flex gap-1 px-2 pb-2 overflow-x-auto">
          {menu.map((item) => {
            const active = selectedView === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onSelect(item.key)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md ${active ? 'bg-gray-800 text-white' : 'text-gray-200 hover:bg-gray-800'}`}
              >
                <span className="opacity-90">{item.icon}</span>
                <span className="text-sm hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

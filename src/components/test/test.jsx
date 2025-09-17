import React, { useState } from 'react';
import { Check, BookOpen, Trophy, Calendar, Bluetooth, QrCode, MapPin, Bell, Search } from 'lucide-react';

// Navigation Item Component
const NavItem = ({ icon, label, active = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
      active 
        ? 'bg-purple-500/20 text-white border border-purple-500/30' 
        : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="truncate">{label}</span>
  </button>
);

// Sidebar Component
const Sidebar = ({ activeItem, setActiveItem }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'news', label: 'News', icon: '📰' },
    { id: 'schedule', label: 'Schedule', icon: '🗓️' },
    { id: 'events', label: 'Events', icon: '🎉' },
    { id: 'notes', label: 'Notes', icon: '📝' },
    { id: 'market', label: 'Market', icon: '🛒' },
    { id: 'lost-found', label: 'Lost+Found', icon: '📦' }
  ];

  return (
    <aside className="h-screen sticky top-0 w-64 p-6 bg-gray-900/30 backdrop-blur-xl border-r border-gray-800/50">
      <div className="flex items-center gap-3 px-2 py-4">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 grid place-items-center font-bold text-white text-sm">
          ☆
        </div>
        <div className="text-xl font-semibold text-white">Unilyf</div>
      </div>
      
      <nav className="mt-8 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            active={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </nav>
      
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 grid place-items-center text-white font-semibold">
            A
          </div>
          <div className="text-sm">
            <div className="font-medium text-white">Akshay</div>
            <div className="text-gray-400">Computer Science</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

// Topbar Component
const Topbar = ({ onQuickCheckin }) => (
  <header className="h-20 sticky top-0 z-20 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50 flex items-center justify-between px-8">
    <div>
      <h1 className="text-2xl font-semibold text-white">Good Morning, Akshay</h1>
      <p className="text-gray-400 text-base mt-1">Ready to conquer your academic journey?</p>
    </div>
    <div className="flex items-center gap-4">
      <button 
        onClick={onQuickCheckin}
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
      >
        Quick Check-in
      </button>
      <button className="w-11 h-11 rounded-xl bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 grid place-items-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300">
        <Bell size={20} />
      </button>
      <button className="w-11 h-11 rounded-xl bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 grid place-items-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300">
        <Search size={20} />
      </button>
    </div>
  </header>
);

// KPI Card Component
const KpiCard = ({ type, title, value, sub, tag }) => {
  const iconConfig = {
    attendance: { icon: Check, color: 'text-green-400', bgColor: 'bg-green-400/10' },
    assignments: { icon: BookOpen, color: 'text-blue-400', bgColor: 'bg-blue-400/10' },
    gpa: { icon: Trophy, color: 'text-purple-400', bgColor: 'bg-purple-400/10' },
    credits: { icon: Calendar, color: 'text-orange-400', bgColor: 'bg-orange-400/10' }
  };

  const config = iconConfig[type];
  const IconComponent = config.icon;

  return (
    <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-4xl font-bold text-white mb-2">{value}</div>
          <div className="text-gray-400 text-base">{title}</div>
          {sub && <div className="mt-3 text-sm text-green-400 font-medium">{sub}</div>}
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className={`w-12 h-12 rounded-xl ${config.bgColor} border border-gray-800/50 grid place-items-center`}>
            <IconComponent className={config.color} size={24} />
          </div>
          {tag && <span className="text-xs text-green-400 font-medium">{tag}</span>}
        </div>
      </div>
    </div>
  );
};

// Check-in Tile Component
const CheckinTile = ({ icon: IconComponent, title, desc, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1 hover:bg-gray-800/20"
  >
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 grid place-items-center">
      <IconComponent className="text-purple-400" size={24} />
    </div>
    <div className="text-left">
      <div className="font-semibold text-white text-lg">{title}</div>
      <div className="text-gray-400 text-base mt-1">{desc}</div>
    </div>
  </button>
);

// Main App Component
const App = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [checkinStatus, setCheckinStatus] = useState('');

  const handleQuickCheckin = () => {
    setCheckinStatus('Quick check-in initiated!');
    setTimeout(() => setCheckinStatus(''), 3000);
  };

  const handleCheckinMethod = (method) => {
    setCheckinStatus(`${method} check-in started...`);
    setTimeout(() => {
      setCheckinStatus(`✅ Checked in via ${method}!`);
      setTimeout(() => setCheckinStatus(''), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div className="flex-1">
        <Topbar onQuickCheckin={handleQuickCheckin} />
        
        {checkinStatus && (
          <div className="mx-8 mt-6 p-4 bg-green-400/10 border border-green-400/30 rounded-2xl text-green-400 font-medium">
            {checkinStatus}
          </div>
        )}

        <main className="p-8 grid grid-cols-12 gap-8">
          {/* KPI Cards */}
          <div className="col-span-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <KpiCard 
              type="attendance" 
              title="Attendance Rate" 
              value="96.5%" 
              sub="↑ +2.5%" 
            />
            <KpiCard 
              type="assignments" 
              title="Assignments Complete" 
              value="12/15" 
              sub="3 Due" 
            />
            <KpiCard 
              type="gpa" 
              title="Current GPA" 
              value="3.8" 
              tag="Top 5%" 
            />
            <KpiCard 
              type="credits" 
              title="Credits Earned" 
              value="45/120" 
              tag="On Track" 
            />
          </div>

          {/* Quick Check-in Section */}
          <section className="col-span-12 xl:col-span-7">
            <h2 className="text-2xl font-semibold text-white mb-6">Quick Check-in</h2>
            <div className="space-y-4">
              <CheckinTile 
                icon={Bluetooth} 
                title="Bluetooth Check-in" 
                desc="Auto-detect when in range" 
                onClick={() => handleCheckinMethod('Bluetooth')}
              />
              <CheckinTile 
                icon={QrCode} 
                title="QR Code Scan" 
                desc="Scan classroom code" 
                onClick={() => handleCheckinMethod('QR Code')}
              />
              <CheckinTile 
                icon={MapPin} 
                title="GPS Location" 
                desc="Location-based check-in" 
                onClick={() => handleCheckinMethod('GPS')}
              />
            </div>
          </section>

          {/* Today's Schedule Section */}
          <section className="col-span-12 xl:col-span-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Today's Schedule</h2>
              <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                View All
              </button>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-12 text-center transition-all duration-300 hover:border-purple-500/30">
              <div className="text-6xl mb-4">🗓️</div>
              <div className="text-xl font-semibold text-white mb-2">No classes scheduled for today</div>
              <div className="text-gray-400 text-lg">Enjoy your free day! 🎉</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
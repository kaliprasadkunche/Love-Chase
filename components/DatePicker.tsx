
import React, { useState } from 'react';

interface DatePickerProps {
  onNext: (date: string) => void;
  onBack: () => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onNext, onBack }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewDate, setViewDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const handleSubmit = () => {
    if (selectedDate) {
      // Use local date formatting to avoid timezone issues
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      onNext(`${year}-${month}-${day}`);
    }
  };

  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();
  const daysCount = daysInMonth(currentYear, currentMonth);
  const startDay = firstDayOfMonth(currentYear, currentMonth);

  const days = [];
  // Fill leading empty days
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
  }
  // Fill actual days
  for (let d = 1; d <= daysCount; d++) {
    const isSelected = selectedDate?.getDate() === d && 
                       selectedDate?.getMonth() === currentMonth && 
                       selectedDate?.getFullYear() === currentYear;
    
    days.push(
      <button
        key={d}
        onClick={() => handleDateClick(d)}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition-all duration-300 relative
          ${isSelected ? 'bg-[#92400e] text-white font-bold shadow-lg scale-110' : 'text-gray-400 hover:bg-white/5'}`}
      >
        {d}
      </button>
    );
  }

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className="w-full max-w-sm glass p-6 rounded-[2.5rem] animate-slide-up border border-white/10 shadow-2xl flex flex-col items-center relative">
      
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 text-pink-400 hover:text-pink-300 transition-colors text-2xl"
        aria-label="Go back"
      >
        ←
      </button>
      
      <h3 className="text-xl text-center font-romantic text-pink-300 mb-8 px-4 leading-relaxed">
        When should this bava take his mardhal on a date? 💕
      </h3>
      
      {/* Calendar Header */}
      <div className="w-full bg-[#1a0c0c] rounded-[2rem] p-6 border border-white/5 shadow-inner">
        <div className="flex items-center justify-between mb-8 px-2">
          <button 
            onClick={handlePrevMonth}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 text-gray-400 transition-colors"
          >
            <i className="fa-solid fa-chevron-left text-xs"></i>
          </button>
          
          <h4 className="text-lg font-semibold text-gray-100">
            {monthNames[currentMonth]} {currentYear}
          </h4>
          
          <button 
            onClick={handleNextMonth}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 text-gray-400 transition-colors"
          >
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 mb-4">
          {weekDays.map(wd => (
            <div key={wd} className="text-center text-xs text-gray-500 font-medium">
              {wd}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-2 place-items-center">
          {days}
        </div>
      </div>

      <button 
        onClick={handleSubmit}
        disabled={!selectedDate}
        className="w-full py-5 mt-8 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl disabled:opacity-30 disabled:grayscale shadow-xl active:scale-95 transition-all glow-pink uppercase tracking-widest border border-white/10"
      >
        Lock the Date ❤️
      </button>
    </div>
  );
};

export default DatePicker;

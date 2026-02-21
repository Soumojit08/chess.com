import { useState, useEffect } from "react";

const CalendarBooked = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = now.toLocaleString("default", { month: "long" });

  // Dummy active days — replace with real data later
  const [activeDays] = useState(new Set([1, 3, 5, 6, 10, 12, 14, 17, 19, 21]));

  const today = now.getDate();

  return (
    <div className="flex flex-col h-full w-full p-3 gap-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-base font-mono font-light tracking-wide text-primary uppercase">
          {monthName} {year}
        </span>
        <span className="text-sm text-muted-foreground">
          {activeDays.size} / {daysInMonth} days
        </span>
      </div>

      {/* Grid */}
      <div className="flex-1 flex items-center justify-center p-3">
        <div
          className="grid w-full space-y-2"
          style={{
            gridTemplateColumns: "repeat(7, 1fr)",
          }}
        >
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const isActive = activeDays.has(day);
            const isToday = day === today;

            return (
              <div
                key={day}
                title={`${monthName} ${day}`}
                className={`
                  aspect-square rounded-sm transition-all duration-100 w-2/3
                  ${isActive ? "bg-primary " : "bg-charcoal"}
                `}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarBooked;

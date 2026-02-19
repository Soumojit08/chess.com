import { React, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const CalendarBooked = () => {
  const [date, setDate] = useState(
    new Date(new Date().getFullYear(), 1, 3) || "",
  );
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 1, 12 + i),
  );
  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={setDate}
      disabled={bookedDates}
      className="p-1 [--cell-size:1.6rem] text-xs"
      modifiers={{
        booked: bookedDates,
      }}
      modifiersClassNames={{
        booked: "[&>button]:line-through opacity-100",
      }}
    />
  );
};

export default CalendarBooked;

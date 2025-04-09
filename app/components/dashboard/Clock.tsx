import { useEffect, useState } from "react";
import { Delimitation } from "../common/Delimitation";

export default function Clock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const formattedDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "2-digit",
        year: "numeric",
      });

      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <Delimitation />
      <div className="text-6xl font-semibold tracking-widest text-primary-light-text ">
        {time}
      </div>
      <div className="text-xl tracking-wide font-medium text-secondary-light-text">
        {date}
      </div>
      <Delimitation />
    </div>
  );
}

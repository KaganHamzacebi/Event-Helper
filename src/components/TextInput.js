import { useState, useEffect } from "react";
import moment from "moment";

export default function TextInput({
  type,
  title,
  description,
  valueChange,
  value,
}) {
  const handleChange = (e) => {
    valueChange(e.target.value);
  };

  const [date, setDate] = useState("2021-04-15");
  const [time, setTime] = useState("00:00");

  const handleDateTimeChange = () => {
    if (true) {
      const dateTime = moment(date + time, "YYYY-MM-DDHH:mm");
      valueChange(dateTime.unix());
    }
  };

  useEffect(() => {
    if (type == "date") {
      handleDateTimeChange();
    }
  })

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-primary mt-6">{title}</h3>
      <span className="text-sm text-primary-light">{description}</span>
      {type === "date" ? (
        <div className="mt-4">
          <div className="mb-3 pt-0">
            <input
              type="date"
              placeholder="Enter date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline mr-4 w-1/5"
            />
            <input
              type="time"
              placeholder="Enter time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline w-1/5"
            />
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <div className="mb-3 pt-0">
            <input
              type={type}
              value={value}
              onChange={handleChange}
              placeholder={"Enter " + title.toLowerCase()}
              className="px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline w-2/4"
            />
          </div>
        </div>
      )}
    </div>
  );
}

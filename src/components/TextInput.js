import { useState, useEffect } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

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

  const errors = {
    "Template": "",
    "Title": "Title can't be empty",
    "Description": "",
    "Channel": "Channel can't be empty",
    "Date": "Date can't be empty"
  }

  const [date, setDate] = useState("2021-04-15");
  const [time, setTime] = useState("00:00");
  const [isValid, setIsValid] = useState(true);

  const handleDateTimeChange = () => {
    if (date != "" && time != "") {
      const dateTime = moment(date + time, "YYYY-MM-DDHH:mm");
      valueChange(dateTime.unix());
      setIsValid(true);
    } else {
      setIsValid(false)
    }
  };

  useEffect(() => {
    if (type == "date") {
      handleDateTimeChange();
    }
  }, [date, time])

  const validate = (e) => {
    switch (title) {
      case "Template":
        break;
      case "Title":
        if (e.target.value.length < 1) {
          setIsValid(false);
        } else {
          setIsValid(true);
        }
        break;
      case "Description":
        break;
      case "Channel":
        break;
      case "Date":
        break;
      default:
        break;
    }
  };

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
          {isValid ? 
          "" : 
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-300 uppercase last:mr-0 mr-1">
            <FontAwesomeIcon icon={faExclamationTriangle} size="1x"></FontAwesomeIcon>    
             {" " + errors[title]}
          </span>
          }
        </div>
      ) : (
        <div className="mt-4">
          <div className="mb-3 pt-0">
            <input
              onBlur={validate}
              type={type}
              value={value}
              onChange={handleChange}
              placeholder={"Enter " + title.toLowerCase()}
              className={`px-3 py-3 bg-title text-primary relative rounded text-lg border ${isValid ? "border-gray-900" : "border-red-600"} outline-none focus:outline-none focus:shadow-outline w-2/4`}
            />

          </div>
          {isValid ? 
          "" : 
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-300 uppercase last:mr-0 mr-1">
            <FontAwesomeIcon icon={faExclamationTriangle} size="1x"></FontAwesomeIcon>    
             {" " + errors[title]}
          </span>
          }
          
          
        </div>
      )}
    </div>
  );
}

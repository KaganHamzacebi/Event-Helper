import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function TextAreaInput({
  type,
  title,
  description,
  rows,
  valueChange,
  value,
}) {
  const handleChange = (e) => {
    valueChange(e.target.value);
  };

  const errors = {
    "Description": "",
  }

  const [isValid, setIsValid] = useState(true);


  const validate = (e) => {
    switch (title) {
      case "Description":
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-primary mt-6">{title}</h3>
      <span className="text-sm text-primary-light">{description}</span>

      <div className="mt-4">
        <div className="mb-3 pt-0">
          <textarea
            onBlur={validate}
            type={type}
            value={value}
            rows={rows.toString()}
            onChange={handleChange}
            placeholder={"Enter " + title.toLowerCase()}
            className={`px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline w-2/5
              ${isValid ? "focus:ring-2 focus:ring-blue-600" : "ring-2 ring-red-600"}`}
          />
        </div>
        <span className={`text-xs font-bold inline-block py-1 px-2 rounded text-red-600 opacity-0 bg-red-300 last:mr-0 mr-1 
            ${isValid ? "transition-opacity duration-800 ease-out opacity-0" : "transition-opacity duration-1000 ease-in opacity-100"}`}>
          <FontAwesomeIcon icon={faExclamationTriangle} size="1x"></FontAwesomeIcon>
          {" " + errors[title]}
        </span>
      </div>
    </div>
  );
}

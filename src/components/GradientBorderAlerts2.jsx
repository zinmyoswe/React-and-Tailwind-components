import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationTriangle,  // warning/danger icon
  faCheckCircle,           // success icon
  faInfoCircle,            // info icon
  faBug                   // error/bug icon
} from "@fortawesome/free-solid-svg-icons";

export default function GradientBorderAlerts2() {
  const [alerts, setAlerts] = useState([0, 1, 2, 3]);

  const gradients = [
    { from: "from-pink-500", to: "to-blue-500", title: "Notice", text: "This is a gradient border alert.", icon: faInfoCircle },
    { from: "from-green-400", to: "to-emerald-600", title: "Success", text: "Your action was successful!", icon: faCheckCircle },
    { from: "from-yellow-400", to: "to-orange-500", title: "Warning", text: "This is a warning alert.", icon: faExclamationTriangle },
    { from: "from-red-500", to: "to-pink-500", title: "Error", text: "Something went wrong!", icon: faBug },
  ];

  const handleClose = (index) => {
    setAlerts((prev) => prev.filter((i) => i !== index));
  };

  return (
    <div className="space-y-4 max-w-md mx-auto mt-6">
      {alerts.map((index) => (
        <div
          key={index}
          className={`relative p-[2px] rounded-lg bg-gradient-to-r ${gradients[index].from} ${gradients[index].to} shadow-lg`}
        >
          <div className="bg-white dark:bg-gray-900 rounded-md p-4 flex justify-between items-start space-x-4">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={gradients[index].icon} className="w-5 h-5 pr-4 text-gray-700 dark:text-gray-300" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{gradients[index].title}</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{gradients[index].text}</p>
              </div>
            </div>
            <button
              onClick={() => handleClose(index)}
              className="text-gray-500 hover:text-red-500 transition"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

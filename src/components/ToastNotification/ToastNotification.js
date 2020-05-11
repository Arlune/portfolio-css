import React, { useState } from "react";
import "./ToastNotification.scss";

function ToastNotification({
  type = "warning",
  position = "bottom",
  isShine = true,
}) {
  const [toastDisplay, setToastDisplay] = useState(false);

  function displayToast() {
    if (toastDisplay) {
      return "show";
    }
    return "";
  }

  function handleClick() {
    if (!toastDisplay) {
      setToastDisplay(true);
      setTimeout(() => {
        setToastDisplay(false);
      }, 5000);
    }
  }

  function getClassNames() {
    return `toast-notification ${position} ${type} ${
      isShine && "shine"
    } ${displayToast()}`;
  }

  return (
    <div>
      <div className={getClassNames()}>Le saviez-vous ? :)</div>
      <button onClick={handleClick}>Show Toaster</button>
    </div>
  );
}

export default ToastNotification;

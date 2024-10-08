import React from 'react'
import "../Styles/DarkModeSwitch.css"
function DarkModeSwitch({ toggleTheme }) {

  function toggleDarkMode() {
    toggleTheme();
  }

  return (
    <div className="toggle-container" onClick={toggleDarkMode}>
      <div className="toggle-switch"></div>
    </div>
  )
}

export default DarkModeSwitch;
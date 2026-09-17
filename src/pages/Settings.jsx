import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  const { darkMode, toggleDarkMode } = useTheme();

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <main className={`settings-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="settings-container">

        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your application preferences.</p>
        </div>

        <div className="settings-section">
          <h2>Notifications</h2>

          <div className="setting-item">
            <div>
              <h3>Push Notifications</h3>
              <p>
                Receive notifications about employee activities.
              </p>
            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={(event) =>
                setNotifications(event.target.checked)
              }
            />
          </div>

          <div className="setting-item">
            <div>
              <h3>Email Updates</h3>
              <p>
                Receive important updates through email.
              </p>
            </div>

            <input
              type="checkbox"
              checked={emailUpdates}
              onChange={(event) =>
                setEmailUpdates(event.target.checked)
              }
            />
          </div>
        </div>

        <div className="settings-section">
          <h2>Appearance</h2>

          <div className="setting-item">
            <div>
              <h3>Dark Mode</h3>
              <p>
                Change the appearance of the settings page.
              </p>
            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          </div>
        </div>

        <div className="settings-actions">
          <button
            className="submit-button"
            onClick={handleSave}
          >
            Save Settings
          </button>
        </div>

      </div>
    </main>
  );
}

export default Settings;
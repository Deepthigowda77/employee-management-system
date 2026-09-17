import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Deepthi");
  const [role, setRole] = useState("Full Stack Engineer");
  const [email, setEmail] = useState("deepthi@example.com");
  const [department, setDepartment] = useState("Engineering");
  const [experience, setExperience] = useState("2.7+");

  const handleSave = (event) => {
    event.preventDefault();

    setIsEditing(false);

    alert("Profile updated successfully!");
  };

  return (
    <main className="profile-page">
      <div className="profile-container">

        {/* Profile Header */}

        <div className="profile-header">
          <div className="profile-avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1>{name}</h1>
            <p>{role}</p>
          </div>
        </div>

        {/* Profile Information */}

        {!isEditing ? (
          <div className="profile-info">

            <div className="profile-info-item">
              <span>Email</span>
              <strong>{email}</strong>
            </div>

            <div className="profile-info-item">
              <span>Department</span>
              <strong>{department}</strong>
            </div>

            <div className="profile-info-item">
              <span>Experience</span>
              <strong>{experience} years</strong>
            </div>

            <div className="profile-info-item">
              <span>Role</span>
              <strong>{role}</strong>
            </div>

          </div>
        ) : (
          /* Edit Profile Form */

          <form
            className="profile-form"
            onSubmit={handleSave}
          >

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Role</label>

              <input
                type="text"
                value={role}
                onChange={(event) =>
                  setRole(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Department</label>

              <input
                type="text"
                value={department}
                onChange={(event) =>
                  setDepartment(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Experience</label>

              <input
                type="text"
                value={experience}
                onChange={(event) =>
                  setExperience(event.target.value)
                }
              />
            </div>

            <div className="profile-actions">

              <button
                type="button"
                className="cancel-button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="submit-button"
              >
                Save Changes
              </button>

            </div>

          </form>
        )}

        {/* Edit Button */}

        {!isEditing && (
          <div className="profile-actions">
            <button
              className="submit-button"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </div>
        )}

      </div>
    </main>
  );
}

export default Profile;
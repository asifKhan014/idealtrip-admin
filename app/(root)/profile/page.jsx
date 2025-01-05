// "use client";
// import React, { useState, useEffect } from "react";

// function ProfilePage() {
//   const [editMode, setEditMode] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const [fullName, setFullName] = useState("");
//   const [displayName, setDisplayName] = useState(""); // Separate display name
//   const [address, setAddress] = useState("");
//   const [profilePhoto, setProfilePicture] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       try {
//         const userObject = JSON.parse(storedUser);
//         setUserId(userObject.userId);
//       } catch (error) {
//         console.error("Failed to parse user data from localStorage:", error);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (!userId) return;

//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(
//           `https://localhost:7216/api/User/${userId}`
//         );
//         const data = await response.json();
//         if (data.isSuccess) {
//           setFullName(data.data.userName);
//           setDisplayName(data.data.userName); // Set initial display name
//           setAddress(data.data.address);
//           setProfilePicture(data.data.profilePhotoUrl);
//           setEmail(data.data.email);
//         } else {
//           alert(data.messege || "Failed to fetch user data.");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         alert("An error occurred while fetching user data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   const handleSave = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("FullName", fullName);
//       formData.append("Address", address);
//       console.log(profilePhoto);

//       // Only append profile picture if a new image is uploaded
//       if (profilePhoto instanceof File) {
//         formData.append("ProfilePhoto", profilePhoto);
//       } else {
//         formData.append("ProfilePhoto", null); // Explicitly set null if no new image is uploaded
//       }

//       const response = await fetch(
//         `https://localhost:7216/api/User/${userId}`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await response.json();
//       if (data.isSuccess) {
//         alert("Profile updated successfully!");
//         setEditMode(false);
//         setDisplayName(fullName); // Update display name after saving
//       } else {
//         alert(data.messege || "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("An error occurred while updating your profile.");
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 w-full rounded-lg mx-auto mt-8 max-w-xl shadow-lg">
//       <div className="flex flex-col items-center">
//         <div className="relative">
//           <img
//             src={
//               profilePhoto
//                 ? profilePhoto
//                 : "https://via.placeholder.com/150"
//             }
//             alt="Profile"
//             className="w-32 h-32 rounded-full object-cover shadow-lg"
//           />
//           {editMode && (
//             <label
//               htmlFor="upload-profile-pic"
//               className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-full cursor-pointer shadow-md"
//             >
//               Change
//             </label>
//           )}
//           <input
//             type="file"
//             id="upload-profile-pic"
//             className="hidden"
//             onChange={(e) => {
//               if (e.target.files && e.target.files[0]) {
//                 console.log("Selected File:", e.target.files[0]);
//                 setProfilePicture(e.target.files[0]); // Set the file object
//               }
//             }}
//           />
//         </div>
//         <div className="mt-4 text-center">
//           <p className="text-xl font-semibold text-gray-800">{displayName}</p>
//           <p className="text-sm text-gray-500">{email}</p>
//         </div>
//       </div>

//       <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Personal Information
//         </h2>
//         <div className="mt-4 space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             {editMode ? (
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full mt-2 p-3 text-black border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             ) : (
//               <p className="text-gray-800">{fullName}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Address
//             </label>
//             {editMode ? (
//               <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full mt-2 p-3 text-black border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             ) : (
//               <p className="text-gray-800">{address}</p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 flex flex-col gap-4">
//         {editMode ? (
//           <button
//             onClick={handleSave}
//             className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
//           >
//             Save Changes
//           </button>
//         ) : (
//           <button
//             onClick={() => setEditMode(true)}
//             className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
//           >
//             Edit Profile
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;
"use client";
import React, { useState, useEffect } from "react";

function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState(""); // Separate display name
  const [address, setAddress] = useState("");
  const [profilePhoto, setProfilePicture] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [file , setFile] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userObject = JSON.parse(storedUser);
        setUserId(userObject.userId);
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7216/api/User/${userId}`
        );
        const data = await response.json();
        if (data.isSuccess) {
          setFullName(data.data.userName);
          setDisplayName(data.data.userName); // Set initial display name
          setAddress(data.data.address);
          setProfilePicture(data.data.profilePhotoUrl);
          setEmail(data.data.email);
        } else {
          alert(data.messege || "Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("An error occurred while fetching user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("FullName", fullName);
      formData.append("Address", address);
      console.log(file)
      // Only append profile picture if a new image is uploaded
        formData.append("ProfilePhoto", file);
  
      const response = await fetch(
        `https://localhost:7216/api/User/${userId}`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
      if (data.isSuccess) {
        alert("Profile updated successfully!");
        setEditMode(false);
        setDisplayName(fullName); // Update display name after saving
        // setProfilePicture(profilePhoto);
      } else {
        alert(data.messege || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating your profile.");
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-full rounded-lg mx-auto mt-8 max-w-xl shadow-lg">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={
              profilePhoto
                ? profilePhoto
                : "https://via.placeholder.com/150"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
          {editMode && (
            <label
              htmlFor="upload-profile-pic"
              className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-full cursor-pointer shadow-md"
            >
              Change
            </label>
          )}
          <input
            type="file"
            id="upload-profile-pic"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
                const imageUrl = URL.createObjectURL(e.target.files[0]);
                console.log(imageUrl); // Create a temporary URL for preview
                setProfilePicture(imageUrl); // Update the state with the image URL
              }
            }}            
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-xl font-semibold text-gray-800">{displayName}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">
          Personal Information
        </h2>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            {editMode ? (
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full mt-2 p-3 text-black border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            ) : (
              <p className="text-gray-800">{fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            {editMode ? (
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full mt-2 p-3 text-black border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            ) : (
              <p className="text-gray-800">{address}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {editMode ? (
          <button
            onClick={handleSave}
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;

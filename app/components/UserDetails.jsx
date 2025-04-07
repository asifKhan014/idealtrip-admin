// "use client";
// import { useState, useEffect } from 'react';
// import { useTheme } from '../../context/ThemeContext';
// import Spinner from '../components/Spinner';
// import { FaUser, FaMapMarkerAlt, FaEnvelope, FaStar, FaFileAlt, FaHotel, FaHome, FaCar } from 'react-icons/fa';

// export default function UserDetailsPage({ userId }) {
//   const { darkMode } = useTheme();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User/${userId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` }
//           }
//         );

//         const data = await response.json();
//         console.log(data);
//         if (data.isSuccess) {
//           console.log(data.data);
//           setUserData(data.data);
//         } else {
//           setError(data.Messege || 'Failed to fetch user details');
//         }
//       } catch (err) {
//         setError('An error occurred while fetching user details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, [userId]);

//   const renderRoleIcon = (role) => {
//     switch(role) {
//       case 'TourGuide': return <FaStar className="text-yellow-500" />;
//       case 'Transporter': return <FaCar className="text-blue-500" />;
//       case 'LocalHomeOwner': return <FaHome className="text-green-500" />;
//       case 'HotelOwner': return <FaHotel className="text-purple-500" />;
//       default: return <FaUser className="text-gray-500" />;
//     }
//   };

//   const renderRoleDetails = (role, details) => {
//     if (!details) return null;

//     switch(role) {
//       case 'TourGuide':
//         return (
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold mb-4">Tour Guide Details</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <DetailCard
//                 icon={<FaStar />}
//                 title="Rate Per Day"
//                 value={`$${details.ratePerDay}`}
//                 darkMode={darkMode}
//               />
//               <DetailCard
//                 icon={<FaMapMarkerAlt />}
//                 title="Location"
//                 value={details.Location}
//                 darkMode={darkMode}
//               />
//               <div className="md:col-span-2">
//                 <DetailCard
//                   icon={<FaFileAlt />}
//                   title="Experience"
//                   value={details.Experience}
//                   darkMode={darkMode}
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <DetailCard
//                   icon={<FaFileAlt />}
//                   title="Bio"
//                   value={details.Bio}
//                   darkMode={darkMode}
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   if (loading) return <Spinner />;
//   if (error) return <ErrorPage message={error} darkMode={darkMode} />;
//   if (!userData) return <ErrorPage message="User data not available" darkMode={darkMode} />;

//   return (
//     <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
//       <div className={`max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//         {/* Header Section */}
//         <div className={`p-6 border-b ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
//           <div className="flex items-center justify-between">
//             <h1 className="text-2xl font-bold flex items-center gap-2">
//               {renderRoleIcon(userData.user.role)}
//               User Details
//             </h1>
//             <div className={`px-3 py-1 rounded-full text-sm font-medium ${
//               darkMode ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'
//             }`}>
//               {userData.user.role}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="p-6">
//           {/* Basic Info Section */}
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="flex-shrink-0">
//               <img
//                 src={userData.user.profilePhotoPath || '/user.png'}
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full object-cover border-4 shadow-md"
//               />
//             </div>

//             <div className="flex-1">
//               <h2 className="text-2xl font-bold mb-2">{userData.user.userName}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <DetailCard
//                   icon={<FaEnvelope />}
//                   title="Email"
//                   value={userData.user.email}
//                   darkMode={darkMode}
//                 />
//                 <DetailCard
//                   icon={<FaMapMarkerAlt />}
//                   title="Address"
//                   value={userData.user.address}
//                   darkMode={darkMode}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Role Specific Details */}
//           {renderRoleDetails(userData.user.role, userData.RoleSpecificDetails)}

//           {/* Proofs Section */}
//           {userData.proofs && userData.proofs.length > 0 && (
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold mb-4">Documents & Proofs</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {userData.proofs.map((proof, index) => (
//                   <ProofCard
//                     key={index}
//                     type={proof.documentType}
//                     path={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${proof.documentPath}`}
//                     darkMode={darkMode}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reusable Detail Card Component
// function DetailCard({ icon, title, value, darkMode }) {
//   return (
//     <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//       <div className="flex items-center gap-3">
//         <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
//           {icon}
//         </div>
//         <div>
//           <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</h4>
//           <p className="mt-1">{value || 'Not provided'}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Proof Card Component
// function ProofCard({ type, path, darkMode }) {
//   const getFileIcon = (path) => {
//     const ext = path?.split('.').pop().toLowerCase();
//     if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) return '📷';
//     if (['pdf'].includes(ext)) return '📄';
//     return '📁';
//   };

//   return (
//     <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-white'}`}>
//       <div className="flex items-start gap-3">
//         <span className="text-2xl">{getFileIcon(path)}</span>
//         <div>
//           <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{type}</h4>
//           <a
//             href={path}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`mt-1 text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
//           >
//             View Document
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Error Page Component
// function ErrorPage({ message, darkMode }) {
//   return (
//     <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
//       <div className={`p-8 rounded-xl shadow-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//         <div className="text-5xl mb-4">⚠️</div>
//         <h1 className="text-2xl font-bold mb-2">Error Loading User</h1>
//         <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{message}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} text-white`}
//         >
//           Try Again
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from 'react';
// import { useTheme } from '../../context/ThemeContext';
// import Spinner from '../components/Spinner';
// import {
//   FaUser, FaMapMarkerAlt, FaEnvelope, FaStar,
//   FaFileAlt, FaHotel, FaHome, FaCar, FaTimes
// } from 'react-icons/fa';
// import Image from 'next/image';

// export default function UserDetailsPage({ userId }) {
//   const { darkMode } = useTheme();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Helper function to properly format image URLs
//   const getImageUrl = (path) => {
//     if (!path) return '/user.png';
//     if (path.startsWith('http')) return path;
//     // Remove any leading slashes and construct full URL
//     const cleanPath = path.replace(/^\//, '');
//     return `${process.env.NEXT_PUBLIC_BACKEND_URL}/${cleanPath}`;
//   };

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User/${userId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` }
//           }
//         );

//         const data = await response.json();
//         if (data.isSuccess) {
//           setUserData(data.data);
//         } else {
//           setError(data.Messege || 'Failed to fetch user details');
//         }
//       } catch (err) {
//         setError('An error occurred while fetching user details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, [userId]);

//   const renderRoleIcon = (role) => {
//     switch(role) {
//       case 'TourGuide': return <FaStar className="text-yellow-500" />;
//       case 'Transporter': return <FaCar className="text-blue-500" />;
//       case 'LocalHomeOwner': return <FaHome className="text-green-500" />;
//       case 'HotelOwner': return <FaHotel className="text-purple-500" />;
//       default: return <FaUser className="text-gray-500" />;
//     }
//   };

//   const renderRoleDetails = (role, details) => {
//     if (!details) return null;

//     switch(role) {
//       case 'TourGuide':
//         return (
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold mb-4">Tour Guide Details</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <DetailCard
//                 icon={<FaStar />}
//                 title="Rate Per Day"
//                 value={`$${details.ratePerDay}`}
//                 darkMode={darkMode}
//               />
//               <DetailCard
//                 icon={<FaMapMarkerAlt />}
//                 title="Location"
//                 value={details.Location}
//                 darkMode={darkMode}
//               />
//               <div className="md:col-span-2">
//                 <DetailCard
//                   icon={<FaFileAlt />}
//                   title="Experience"
//                   value={details.Experience}
//                   darkMode={darkMode}
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <DetailCard
//                   icon={<FaFileAlt />}
//                   title="Bio"
//                   value={details.Bio}
//                   darkMode={darkMode}
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   if (loading) return <Spinner />;
//   if (error) return <ErrorPage message={error} darkMode={darkMode} />;
//   if (!userData) return <ErrorPage message="User data not available" darkMode={darkMode} />;

//   return (
//     <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
//       {/* Image Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
//           <div className="relative max-w-4xl max-h-[90vh]">
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute -top-10 right-0 text-white hover:text-gray-300"
//             >
//               <FaTimes className="text-2xl" />
//             </button>
//             <div className="overflow-hidden rounded-lg">
//               <Image
//                 src={getImageUrl(selectedImage)}
//                 alt="Enlarged document"
//                 width={800}
//                 height={600}
//                 className="object-contain max-h-[80vh]"
//                 unoptimized={true} // Bypass Next.js optimization for dynamic URLs
//               />
//             </div>
//             <div className="mt-2 text-center text-white">
//               <a
//                 href={getImageUrl(selectedImage)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:text-blue-300 underline"
//               >
//                 Open in new tab
//               </a>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className={`max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//         {/* Header Section */}
//         <div className={`p-6 border-b ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
//           <div className="flex items-center justify-between">
//             <h1 className="text-2xl font-bold flex items-center gap-2">
//               {renderRoleIcon(userData.user.role)}
//               User Details
//             </h1>
//             <div className={`px-3 py-1 rounded-full text-sm font-medium ${
//               darkMode ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'
//             }`}>
//               {userData.user.role}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="p-6">
//           {/* Basic Info Section */}
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="flex-shrink-0">
//               <div className="relative w-32 h-32 group">
//                 <Image
//                   src={getImageUrl(userData.user.profilePhotoPath)}
//                   alt="Profile"
//                   width={128}
//                   height={128}
//                   className="rounded-full object-cover border-4 shadow-md"
//                   unoptimized={true} // Bypass Next.js optimization for dynamic URLs
//                 />
//                 <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
//                   <button
//                     onClick={() => setSelectedImage(userData.user.profilePhotoPath)}
//                     className="text-white bg-black bg-opacity-50 rounded-full p-2"
//                   >
//                     <FaFileAlt />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex-1">
//               <h2 className="text-2xl font-bold mb-2">{userData.user.userName}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <DetailCard
//                   icon={<FaEnvelope />}
//                   title="Email"
//                   value={userData.user.email}
//                   darkMode={darkMode}
//                 />
//                 <DetailCard
//                   icon={<FaMapMarkerAlt />}
//                   title="Address"
//                   value={userData.user.address}
//                   darkMode={darkMode}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Role Specific Details */}
//           {renderRoleDetails(userData.user.role, userData.RoleSpecificDetails)}

//           {/* Enhanced Proofs Section */}
//           {userData.proofs && userData.proofs.length > 0 && (
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold mb-4">Documents & Proofs</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                 {userData.proofs.map((proof, index) => {
//                   const fullPath = getImageUrl(proof.documentPath);
//                   const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(
//                     proof.documentPath?.split('.').pop().toLowerCase()
//                   );

//                   return (
//                     <div
//                       key={index}
//                       className={`relative group rounded-lg overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
//                     >
//                       {isImage ? (
//                         <>
//                           <Image
//                             src={fullPath}
//                             alt={proof.documentType}
//                             width={300}
//                             height={200}
//                             className="w-full h-48 object-cover cursor-pointer"
//                             onClick={() => setSelectedImage(proof.documentPath)}
//                             unoptimized={true} // Bypass Next.js optimization for dynamic URLs
//                           />
//                           <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900/80 to-transparent' : 'from-gray-900/50 to-transparent'} flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity`}>
//                             <div className="w-full">
//                               <h4 className={`font-medium ${darkMode ? 'text-gray-100' : 'text-white'}`}>
//                                 {proof.documentType}
//                               </h4>
//                               <div className="flex justify-between mt-2">
//                                 <a
//                                   href={fullPath}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className={`text-xs ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-200 hover:text-white'}`}
//                                   onClick={(e) => e.stopPropagation()}
//                                 >
//                                   Open in new tab
//                                 </a>
//                                 <button
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     setSelectedImage(proof.documentPath);
//                                   }}
//                                   className={`text-xs ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}`}
//                                 >
//                                   Enlarge
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <DocumentCard
//                           type={proof.documentType}
//                           path={fullPath}
//                           darkMode={darkMode}
//                         />
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Document Card for non-image files
// function DocumentCard({ type, path, darkMode }) {
//   const getFileIcon = () => {
//     const ext = path?.split('.').pop().toLowerCase();
//     if (['pdf'].includes(ext)) return '📄';
//     return '📁';
//   };

//   return (
//     <div className={`p-4 h-full flex flex-col ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//       <div className="text-4xl text-center mb-3">{getFileIcon()}</div>
//       <h4 className={`text-center font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
//         {type}
//       </h4>
//       <div className="mt-auto pt-3 text-center">
//         <a
//           href={path}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
//         >
//           View Document
//         </a>
//       </div>
//     </div>
//   );
// }

// // Reusable Detail Card Component
// function DetailCard({ icon, title, value, darkMode }) {
//   return (
//     <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//       <div className="flex items-center gap-3">
//         <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
//           {icon}
//         </div>
//         <div>
//           <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</h4>
//           <p className="mt-1">{value || 'Not provided'}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Error Page Component
// function ErrorPage({ message, darkMode }) {
//   return (
//     <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
//       <div className={`p-8 rounded-xl shadow-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//         <div className="text-5xl mb-4">⚠️</div>
//         <h1 className="text-2xl font-bold mb-2">Error Loading User</h1>
//         <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{message}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} text-white`}
//         >
//           Try Again
//         </button>
//       </div>
//     </div>
//   );
// }






"use client";
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Spinner from "../components/Spinner";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaStar,
  FaFileAlt,
  FaHotel,
  FaHome,
  FaCar,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

export default function UserDetailsPage({ userId }) {
  const { darkMode } = useTheme();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const getImageUrl = (path) => {
    if (!path) return "/user.png";
    if (path.startsWith("http")) return path;
    const cleanPath = path.replace(/^\//, "");
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}/${cleanPath}`;
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = await response.json();
        if (data.isSuccess) {
          setUserData(data.data);
        } else {
          setError(data.Messege || "Failed to fetch user details");
        }
      } catch (err) {
        setError("An error occurred while fetching user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) return <Spinner />;
  if (error) return <ErrorPage message={error} darkMode={darkMode} />;
  if (!userData) return <ErrorPage message="User data not available" darkMode={darkMode} />;

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button onClick={() => setSelectedImage(null)} className="absolute -top-10 right-0 text-white hover:text-gray-300">
              <FaTimes className="text-2xl" />
            </button>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={getImageUrl(selectedImage)}
                alt="Enlarged document"
                width={800}
                height={600}
                className="object-contain max-h-[80vh] cursor-pointer"
                unoptimized={true}
                onClick={() => setSelectedImage(null)}
              />
            </div>
          </div>
        </div>
      )}

      <div className={`max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        {/* Header Section */}
        <div className={`p-6 border-b ${darkMode ? "border-gray-700 bg-gray-700" : "border-gray-200 bg-gray-50"}`}>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <FaUser className="text-gray-500" />
              User Details
            </h1>
            <div className={`px-3 py-1 rounded-full text-lg font-medium ${darkMode ? "bg-indigo-900 text-indigo-200" : "bg-indigo-100 text-indigo-800"}`}>
              {userData.user.role}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 group cursor-pointer" onClick={() => setSelectedImage(userData.user.profilePhotoPath)}>
                <Image
                  src={getImageUrl(userData.user.profilePhotoPath)}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="rounded-full object-cover border-4 shadow-md"
                  unoptimized={true}
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{userData.user.userName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DetailCard icon={<FaEnvelope />} title="Email" value={userData.user.email} darkMode={darkMode} />
                <DetailCard icon={<FaMapMarkerAlt />} title="Address" value={userData.user.address} darkMode={darkMode} />
              </div>
            </div>
          </div>

          {userData.proofs && userData.proofs.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Documents & Proofs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {userData.proofs.map((proof, index) => {
                  const fullPath = getImageUrl(proof.documentPath);
                  const isImage = ["jpg", "jpeg", "png", "gif"].includes(proof.documentPath?.split(".").pop().toLowerCase());

                  return (
                    <div
                      key={index}
                      className={`relative group rounded-lg overflow-hidden border ${darkMode ? "border-gray-700" : "border-gray-200"} cursor-pointer`}
                      onClick={() => setSelectedImage(proof.documentPath)}
                    >
                      {isImage ? (
                        <Image src={fullPath} alt={proof.documentType} width={300} height={200} className="w-full h-48 object-cover" unoptimized={true} />
                      ) : (
                        <DocumentCard type={proof.documentType} path={fullPath} darkMode={darkMode} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Detail Card Component
function DetailCard({ icon, title, value, darkMode }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${darkMode ? "bg-gray-600 text-gray-200" : "bg-gray-200 text-gray-700"}`}>{icon}</div>
        <div>
          <h4 className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{title}</h4>
          <p className="mt-1">{value || "Not provided"}</p>
        </div>
      </div>
    </div>
  );
}

// Document Card Component
function DocumentCard({ type, path, darkMode }) {
  return (
    <div className={`p-4 h-full flex flex-col ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
      <h4 className={`text-center font-medium ${darkMode ? "text-gray-300" : "text-gray-800"}`}>{type}</h4>
      <div className="mt-auto pt-3 text-center">
        <a href={path} target="_blank" rel="noopener noreferrer" className={`text-sm ${darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"}`}>
          View Document
        </a>
      </div>
    </div>
  );
}


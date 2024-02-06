// import React, { useState } from 'react';

// const VideoUploader = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       console.error('Please select a video file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('video', file);

//     try {
//       const response = await fetch('http://localhost:3001/convert', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Converted Video Data:', result.convertedVideo);
//       } else {
//         console.error('Error converting video . Server returned:', response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error('Error during vedio coversion:', error.message);
//     }
//   };

//   return (
//     <div>
//       <input type="file" name="video" onChange={handleFileChange} accept="video/*" />
//       <button onClick={handleUpload}>Upload and Convert to MP4</button>
//     </div>
//   );
// };

// export default VideoUploader;





// client/src/App.js


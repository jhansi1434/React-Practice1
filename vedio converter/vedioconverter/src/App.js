
import './App.css';
import FileUploadPage from './FileUploadPage.jsx';
 //import UsingNode from './UsingNode'
function App() {
  return (
   <>
   <FileUploadPage/>
   {/* <UsingNode/> */}


   </>
  );
}

 export default App;


// client/src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';
 
// const App = () => {
//   const [file, setFile] = useState(null);
 
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };
 
//   const handleConvert = async () => {
//     const formData = new FormData();
//     formData.append('data',"hi")
//  //   formData.append('sourceVideo', file);
//     console.log(formData);
//     try {
//       const response = await axios.post('http://localhost:5000/convert', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
 
//       // Handle the response (e.g., download the converted file)
//     } catch (error) {
//       console.error('Error converting video:', error);
//     }
//   };
 
//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleConvert}>Convert to MP4</button>
//     </div>
//   );
// };
 
// export default App;

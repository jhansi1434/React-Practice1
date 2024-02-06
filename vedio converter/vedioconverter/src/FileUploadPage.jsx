// import React, { useState } from 'react';


// const Vedio = () => {
//   const [file, setFile] = useState();
  

//   const inputRef = React.useRef();

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const url = URL.createObjectURL(file);
//     setFile(url);
//   }

//   const handleChoose = (event) => {
//     inputRef.current.click();
//   };

//   return (
//     <>

//       <input ref={inputRef} type="file" name="file" onChange={handleFileChange} accept="video/*"/>

//       {!file && <button onClick={handleChoose}>Submit</button>}
//       {file && (
//         <video
//           controls
//           src={file} />
//       )}
//   <div >{file || "Nothing selectd"}</div>
 
//     </>
//   )
// }

// export default Vedio





// import React, { useState } from 'react';
// //import VideoConverter from 'convert-video';
// const {VideoConverter} =require('convert-video')
// const Video = () => {
//   const [file, setFile] = useState();

//   const inputRef = React.useRef();

//   const handleFileChange = async (event) => {
//     const selectedFile = event.target.files[0];
//     const url = URL.createObjectURL(selectedFile);

//     // Convert the video to MP4
//     //const convertedVideoDataObj = await convertVideo(selectedFile);

//     setFile({
//       originalUrl: url,
//      // convertedUrl: convertedVideoDataObj.url,
//     });
//   };

//   const handleChoose = (event) => {
//     inputRef.current.click();
//   };

//   const convertVideo = async (sourceVideoFile) => {
//     try {
//       const targetVideoFormat = 'mp4';
//       const convertedVideoDataObj = await VideoConverter.convert(sourceVideoFile, targetVideoFormat);
//       return convertedVideoDataObj;
//     } catch (error) {
//       console.error('Error converting video:', error);
//       throw error;
//     }
//   };

//   return (
//     <>
//       <input ref={inputRef} type="file" name="file" onChange={handleFileChange} accept="video/*" />

//       {!file && <button onClick={handleChoose}>Choose Video</button>}
//       {file && (
//         <div>
//           <video controls src={file.originalUrl} />
//           <p>Converted Video:</p>
//           <video controls src={file.convertedUrl} />
//         </div>
//       )}
//       <div>{file ? "Video selected" : "Nothing selected"}</div>
//     </>
//   );
// };

// export default Video;







import React, { useState } from 'react';
 import { FFmpeg} from '@ffmpeg/ffmpeg';
 //import { fetchFile } from '@ffmpeg/util'
 //import {createFFmpeg,fetchFile } from '@ffmpeg/ffmpeg'
//const {createFFmpeg,fetchFile}=require('@ffmpeg/ffmpeg')
const fetchFile= require('@ffmpeg/ffmpeg')
const Vedio = () => {


  const [file, setFile] = useState();
  const [convertedVideo, setConvertedVideo] = useState(null);

  // const inputRef = React.useRef();


  // if (!file) {
  //   console.error('No file selected.');
  //   return;
  // }

  const convertVideo = async () => {
  if (!file) {
    console.error('No file selected.');
    return;
  }

  const ffmpeg = await loadFFmpeg();

  await ffmpeg.writeFile('input.mp4', await fetchFile(file));

  await ffmpeg.exec(['-i', 'input.mp4', 'output.mp4']);
  const data = await ffmpeg.readFile('output.mp4');
  const convertedBlob = new Blob([data.buffer], { type: 'video/mp4' });
  setConvertedVideo(URL.createObjectURL(convertedBlob));

  await ffmpeg.unlink('input.mp4');
  await ffmpeg.unlink('output.mp4');
};


 

  const loadFFmpeg = async () => {
    const ffmpeg = new FFmpeg({ log: true });
    await ffmpeg.load();
    return ffmpeg;
  };


  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setFile(url);
  }

  // const handleChoose = (event) => {
  //   inputRef.current.click();
  // };

  return (
    <>

      <input  type="file" name="file" onChange={handleFileChange} accept="video/*"/>

       <button onClick={convertVideo}>Submit</button>
     
        {convertedVideo && (<video
          controls
          src={convertedVideo} />)}
  
  <div >{file || "Nothing selectd"}</div>
 
    </>
  )
}

export default Vedio
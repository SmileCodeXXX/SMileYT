import React, { useState } from "react";
import Card from "./Card";
import Axios from "axios";
import AdSense from "./AdsPage";
import axios from "axios";

//import AdSense from "react-adsense";

function Main() {
  const [getFormat, setFormat] = useState("");
  const [getDatas, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  /*
  const downloadHandler = async (e) => {
    e.preventDefault();
   
    setGetURL("");
  };
  */

  const BaseUrl = "https://www.youtube.com/watch?v=";
  let corsProxy ='https://www.youtube.com/';
  const instance = axios.create({
    baseURL:corsProxy,
    headers:{
      'Access-Control-Allow-Origin':'*'
    }
  })



  const handleSubmit = async (event) => {
    event.preventDefault();
    setDownloading(true);
    setError(null);
    setProgress(0);
    /*
    await fetch(`https://www.youtube.com/watch?v=${getVideoId(url)}`,{ mode: 'no-cors',headers:{
      'Access-Control-Allow-Origin':'*'
    }})
      .then((response) => {
        response.text().then((html) => {
          //return console.log(html)
          const videoUrl = extractVideoUrl(html);
          
         downloadVideo(`https://www.youtube.com/watch?v=${getVideoId(url)}`);
        });
       // downloadVideo(`https://www.youtube.com/watch?v=${getVideoId(url)}`);
        

        response.body.getReader().read().then(function updateProgress(result) {
          if (result.done) return;
          setProgress((prevProgress) => prevProgress + result.value.length);
          return response.body
            .getReader()
            .read()
            .then(updateProgress);
        });
      })
      .catch((err) => {
        setError(err);
        setDownloading(false);
      });
      */
      if(url.length < 1 || null) return 
    try {
        axios.get(`${corsProxy}watch?v=${getVideoId(url)}`)
          .then(response =>{
            console.log(response)
            
          })
          .catch(error=>{
            console.log(error)
          })
      
    } catch (error) {
      setError(error);
      setDownloading(false);
    }
  };

  const downloadVideo = (videoUrl) => {
    const a = document.createElement("a");
    a.href = videoUrl;
    a.download = "video.mp4";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setDownloading(false);
  };

  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    //console.log(match[2].length)
    return match && match[2].length == 11 ? match[2] : null;
  };

  const extractVideoUrl = (html) => {
    const videoUrlRegex =
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
    const videoUrlMatch = html.match(videoUrlRegex);

    console.log(html);
    if (!videoUrlMatch) {
      throw new Error("Unable to extract video URL");
    }

    const encodedUrl = videoUrlMatch[1];
    console.log(encodedUrl);
    const decodedUrl = decodeURIComponent(encodedUrl);
    const urlRegex = /url=([^&]+)g/;
    let match;
    let videoUrl;

    while ((match = urlRegex.exec(decodedUrl)) !== null) {
      const [, extractedUrl] = match;
      videoUrl = extractedUrl;
    }

    return videoUrl;
  };

  return (
    <div className="container">
      <div className="centerForm">
        <h1> Download Your Favorite Content</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label htmlFor="url">Format:</label>
          <select
            name="format"
            id="format"
            value={getFormat}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="mp3">MP3</option>
            <option value="mp4">MP4</option>
            <option value="wav">WAV</option>
          </select>
          <button className="download">Download</button>
        </form>
      </div>
      <AdSense />
      <div className="download-list">
        {downloading && (
          <div>
            <p>Downloading...</p>
            <progress value={progress} max="100" />
          </div>
        )}

        {error && <p>An error occurred: {error.message}</p>}

        {/* {getDatas.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              titles={data?.title}
              playback={data.playback}
              preview={data.preview}
              download={data.download}
              format={getFormat}
            />
          );
        })}*/}
      </div>
    </div>
  );
}

export default Main;

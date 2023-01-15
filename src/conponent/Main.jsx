import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
//import './Styling.css';

//http://localhost:5500
const Main = () => {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("mp3");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
     setUrl("");
    if(url === '')
        return alert('enter url')
    try {
      const response = await axios.get(
        `http://localhost:5500/download/?url=${url}&format=${format}`
      );
      if (response.status === 400 || 500 || 404) {
        console.log(response.statusText);
      }
      console.log(response.data);
      setData([...data,
        {
          title: response.data.title,
          thumbnail: response.data.thumbnail,
          url: response.data.url,
          duration: response.data.duration,
        },
      ]);
    } catch (error) {
      console.log(error);
      setError(error);
    }
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
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label htmlFor="url">Format:</label>
          <select
            name="format"
            id="format"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="mp3">MP3</option>
            <option value="mp4">MP4</option>
            <option value="wav">WAV</option>
          </select>
          <button className="download">Download</button>
        </form>
        <span>{error}</span>
      </div>

      <div className="download-list">
        
        {data.map((res,idx) => {
         return <Card key={idx}  title={res.title} img={res?.thumbnail} duration={res?.duration}/>;
        })}
        
      </div>
    </div>
  );
};

export default Main;

/*

try {
            const response = await axios.get(`http://localhost:5500/download?url=${urls}&format=${format}`, {
                onDownloadProgress: (progressEvent) => {
                    setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                },
               // responseType: 'blob'
            });
            //console.log(response.data)
            const url = window.URL.createObjectURL(new Blob([response.data.url]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `audio.${format}`);
            document.body.appendChild(link);
            link.click();
            setUrl('');
        } catch (err) {
            console.log(err);
            setError('An error occurred while downloading the file. Please try again later');
        }

 if (!/^https:\/\/www\.youtube\.com\/watch\?v=/.test(url)) {
            setError('Please enter a valid YouTube video URL');
            return;
        }

         if (!url) {
            setError('Please enter a YouTube video URL');
            return;
        }
 <div className="progress-container">
                <div className="progress" style={{ width: `${progress}%` }}>{progress}%</div>
            </div>
*/

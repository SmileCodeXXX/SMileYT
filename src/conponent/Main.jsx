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
    if (url === "") return alert("enter url");
    try {
      const response = await axios.get(
        `https://myproxyserver.onrender.com/api/info/?url=${url}&format=${format}`
      );
      if (response.status === 400 || 500 || 404) {
        console.log(response.statusText);
      }
      console.log(response.data);
      setData([
        ...data,
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
        {data.map((res, idx) => {
          return (
            <Card
              key={idx}
              title={res.title}
              img={res?.thumbnail}
              duration={res?.duration}
              url={res?.url}
            />
          );
        })}
        <p>
          At Smileyt.com You may download YouTube videos in practically any
          format, including the most popular one, MP3, by using the top online
          converter available for free at Smileyt.com. Don't bother about
          anything else; just use our platform to convert videos or even a whole
          YouTube playlist to MP3. It only requires a few clicks and takes a few
          seconds.
        </p>
        <h2>What's MP3?</h2>
        <p>
          It would seem unnecessary to explain what MP3 is. But you'd be
          surprised how many people use things without knowing what they are
          using exactly. For such reason, here's a short MP3 history class:
          Mainly developed by the Fraunhofer Society, MPEG-1 Audio Layer III, or
          MPEG-2 Audio Layer III, colloquially known as MP3, is a coding format
          for digital audio. It's also the file format that contains MPEG-1
          audio, or MPEG-2 audio, encoded data. The MP3 main feature is its
          audio compression capacity, reducing the size by a factor of 12 but
          maintaining acceptable sound quality at the same time. MP3 allowed to
          store hundreds or even thousands of MP3 files on their devices without
          worrying about space and to share audio files on the Internet with 0
          issues. It revolutionized the music markets At the moment of
          launching, and now it's the most used audio format. Start converting
          and downloading YouTube playlists to MP3!
        </p>
        <h2>
          How to convert & download YouTube playlists to MP3 using Smileyt.com
        </h2>
        <p>
          We've crafted the most intuitive tool so that anyone can use without
          problem. You don't need to be an expert on editing, computing, or
          having specific apps installed on your device to convert YouTube
          playlists to MP3. It doesn't matter if the playlist is long or
          anything. We make it simple than ever to download YouTube playlists.
          The conversion process takes seconds, and you don't have to sign in.
        </p>
        <ol>
            <li>With Loader.to you can download all the YouTube playlists you want. You have to:</li>
            <li>Look for the YouTube link to the playlist you want to convert.</li>
            <li>Copy and paste it into the box above.</li>
            <li>Set out the format output (MP3 in this case).</li>
            <li>Set the start and end of the playlist you want to convert.</li>
            <li>Hit the "Download" button to start the download process</li>
            <li>Wait</li>
            <li>Download your songs!</li>
        </ol>
        <p>See? Easy and fast. Anyone can convert YouTube playlists to MP3 with our tool.</p>
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

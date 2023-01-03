import React, { useState } from "react";
import Card from "./Card";
import AdSense from "./AdsPage";
import axios from "axios";

function Main() {
  const [getFormat, setFormat] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [data, setData] = useState([]);
 
  //const [videoId, setVideoId] = useState(null)
  //const [downloading, setDownloading] = useState(false);
  //const [error, setError] = useState(null);
  //const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
   /*  await axios.get(
        `https://loader.to/ajax/download.php?format=${getFormat}&url=${videoUrl}`,
        {
          headers: {
          'Content-Type':'*',
          'Content-Type':' application/json',
          'Access-Control-Allow-Origin':'origin',

          },
          mode:'no-cors',
          withCredentials: true,
        
          
        }
      ).then((res)=>{
       console.log(res)
       setData([...data,{
        id: res.data.id,
        img: res.data.info.image,
        title: res.data.info.title
       }])      
});*/
  const init ={
    //mode:'no-cors',
    
    header:{
      'Content-Type':'*/*',
     
      'Allow':'*/*'
    }
  }
  const link = `https://loader.to/ajax/download.php?format=${getFormat}&url=${videoUrl}`
  //const myRequest = new Request(init)
  await fetch(link,init)
    .then((res)=>{
      //console.log(d)
      const read = res.body.getReader()
      console.log(read.read())
    })

      
    } catch (error) {
      console.log(error);
      console.log("not working");
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
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
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
        {
          data.map((d)=>
           ( <Card
            key={d.id}
            id={d.id}
            titles={d?.title}
            img ={d?.img}
            progress ={data}
          />)
          )  
        }
      </div>
    </div>
  );
}

export default Main;

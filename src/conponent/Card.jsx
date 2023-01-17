import axios from "axios";
//const download = require('downloadjs')
import { /*useEffect,*/useState } from "react";
function Card({ title, duration, img, url }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  //console.log(url);
  //const handleClick = async () => {};
  const handleClick = async() => {
    setIsDownloading(true)
    await axios(`https://my-proxy.up.railway.app/${url}`,{
      responseType:'blob',
      onDownloadProgress: (progressEvent) => {
        setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        console.log(progressEvent.total)
    },
    }
      ).then(res => res.data)
    .then(file =>{
      console.log(file)
      const urls = window.URL.createObjectURL(new Blob([file],{type: 'audio/mp3'}));
      const link = document.createElement('a');
      link.href = urls;
      link.setAttribute('download', `${title}.${file.type}`);
      document.body.appendChild(link);
      link.click()
    }).finally(()=>{
      setIsDownloading(false)
    })
   
  };

  return (
    <div className="card">
      <img src={img} alt={"card"} />
      <div className="contents">
        <h4>Song: {title}</h4>
        <h4>
          Duration: {Math.ceil(Number(duration) / 60)}:
          {Math.floor(Number(duration) / 60)}
        </h4>
        <button
          className="download"
          //href={url}
          onClick={handleClick}
          disabled={isDownloading}
          style={{ width: "90%" }}
        >
          {isDownloading ?  <label>{`Download Progress: ${Math.round(progress * 1)}%`}</label> : "Download"}
         
        </button>
      </div>
    </div>
  );
}

export default Card;

/**
 *  {isDownloading ? "Downloading..." : "Download"}
    <label>{`Download Progress: ${Math.round(progress * 100)}%`}</label>
 */
/* 
    await fetch(`http://localhost:5500/api/download`, {
      //referrerPolicy: "no-referrer-when-downgrade",
    mode: "cors",
    method: "GET",
    referrer: 'google.bot',
    body:{
      uri:`${url}`
    },
    headers: {
       "Content-Type": "audio/webm",
       "Cross-Origin-Resource-Policy":"cross-orign",
       "X-Content-Type-Options":"nosniff",
       Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    //credentials: "include"
    }).then((response) => {
      if(!response.ok){
        return Promise.reject('error')
      }
      return console.log(response);
    });
   
    axios({
        url:`${url} `,
        method: 'GET',
        //responseType: 'blob', // important
        withCredentials: false,
      /*  headers:{
          //'Access-Control-Allow-Origin':'*'
        "Content-Type": "audio/webm",
       "Cross-Origin-Resource-Policy":"cross-orign",
       "X-Content-Type-Options":"nosniff",
        }
      }).then((response) => {
        console.log(response)
        
    });
    /*
    const urls = window.URL.createObjectURL(new Blob([url]));
        const link = document.createElement('a');
        link.href = urls;
       // link.setAttribute('download', `${title}.mp3`);
        document.body.appendChild(link);
        link.click();*/
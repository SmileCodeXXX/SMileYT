import axios from 'axios';

//import { useEffect,useState } from "react";
function Card({ title, duration, img, url }) {
  // const [isDownloading, setIsDownloading] = useState(false);
  //const [progress, setProgress] = useState(0);
console.log(url)
  //const handleClick = async () => {};
  const handleClick = ()=>{
    /*
    axios(`http://localhost:3000?${url}`,{
        //url:`${url}`,
        method: 'GET',
        responseType: 'blob', // important
        headers:{
          'Access-Control-Allow-Origin':'*'
        }
      }).then((response) => {
        console.log(response)
        
    });*/
    const urls = window.URL.createObjectURL(new Blob([url]));
        const link = document.createElement('a');
        link.href = urls;
       // link.setAttribute('download', `${title}.mp3`);
        document.body.appendChild(link);
        link.click();
}

  return (
    <div className="card">
      <img src={img} alt={"card"} />
      <div className="contents">
        <h4>Song: {title}</h4>
        <h4>Duration: {Math.ceil(Number(duration)/60)}:{Math.floor(Number(duration)/60)}</h4>
        <button
          className="download"
          onClick={handleClick}
          // disabled={isDownloading}
          style={{ width: "90%" }}>
          Download
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

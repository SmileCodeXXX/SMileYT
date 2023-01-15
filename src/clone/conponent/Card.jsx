//import axios from 'axios';

import { useEffect,useState } from "react";
function Card({ titles, playback, img, id }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [youtubeURL, setYoutubeURL] = useState("");
  const [format, setFormat] = useState("best");
  const [progress, setProgress] = useState(0);

  const handleClick = async () => {
    
  };

  return (
    <div className="card">
      <img src={img} alt={"card"} />
      <div className="contents">
        <h4>{titles}</h4>
        <h4>{playback}</h4>
        <button
          className="download"
          onClick={handleClick}
          disabled={isDownloading}
          style={{ width: "90%" }}
        >
          {isDownloading ? "Downloading..." : "Download"}
          <label>{`Download Progress: ${Math.round(progress * 100)}%`}</label>
        </button>
      </div>
    </div>
  );
}

export default Card;

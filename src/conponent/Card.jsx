import axios from 'axios';

function Card({titles,playback,img,id}) {

    const downloadVideo = async() => {
        //console.log(videoId);
        //setVideoId(url.id);
        await axios({
           url: `https://loader.to/ajax/progress.php?id=${id}`,
           method: "GET",
           headers: {
             Accept: "*//*",
           },
         }).then((response) => {
           console.log(response.data);
           const a = document.createElement("a");
           a.href = response.data.download_url;
           a.download = "video.mp4";
           document.body.appendChild(a);
           a.click();
           a.remove();
           //setDownloading(false);
         });
       };
  return (
   <div className="card">   
        <img src={img} alt={'card'} />
        <div className="contents">
            <h4>{titles}</h4>
            <h4>{playback}</h4>
            <button className='download' onClick={downloadVideo} style={{width:'90%'}}>Download</button>
        </div>
   </div>
  )
}

export default Card;
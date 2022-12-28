import axios from 'axios';

function Card({titles,playback,preview,download,id,format}) {

    const dl = ()=>{
        axios({
            url:`${download}`,
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${titles}.${format}`);
            document.body.appendChild(link);
            link.click();
        });
    }
  return (
   <div className="card">
        <div className="card-img">
            <iframe src={preview} title={'card'} />
        </div>
        <div className="contents">
            <h4>{titles}</h4>
            <h4>{playback}</h4>
            <button className='download' onClick={dl} style={{width:'90%'}}>Download</button>
        </div>
   </div>
  )
}

export default Card;
import React, { useEffect , useState} from "react";


const AdSensed = (props) => {
  const { currentPath } = props;
  //const [ads, setAds] = useState()
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [].push({
        google_ad_client: "ca-pub-1245818362998975",
        enable_page_level_ads: true,
        overlays: {bottom: true}
      });
      //setAds((window.adsbygoogle =  window.adsbygoogle || []).push({}))
    } catch (e) {
      console.error(e)
    }
  }, [currentPath]);

  return (
    <div key={currentPath} className='ads'>
      <ins
        className="adsbygoogle "
        style={{display:'inline-block' ,width:"728px" ,height:"90px"}}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-1245818362998975"
        data-ad-slot="6500200872"
      > </ins>
    </div>
  );
};

export default AdSensed;

import React,{useEffect} from 'react';

const AdSense = () => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  },[])
  return (
    <div>
      <ins
        class="adsbygoogle"
        style={{ display: 'block', zIndex:'4', width:'728px', height:'90px'}}
        data-ad-client="ca-pub-1245818362998975"
        data-ad-slot="5510111893"
      />
    </div>
  );
};

export default AdSense;

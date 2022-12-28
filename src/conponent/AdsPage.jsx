import React from 'react';

const AdSense = () => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  })
  return (
    <div>
      <ins
        class="adsbygoogle"
        style={{ display: 'block', zIndex:'4', width:'728px', height:'90px'}}
        data-ad-client="ca-pub-1245818362998975"
        data-ad-slot="5510111893"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSense;

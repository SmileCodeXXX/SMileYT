import React from 'react';

const AdSense = () => {
  //let adsbygoogle;
  return (
    <div>
     
      <ins
        class="adsbygoogle"
        style={{ display: 'block', zIndex:5, width:500}}
        data-ad-client="ca-pub-1245818362998975"
        data-ad-slot="5510111893"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        
          {  (window.adsbygoogle = window.adsbygoogle || []).push({})}
     
      </script>
    </div>
  );
};

export default AdSense;

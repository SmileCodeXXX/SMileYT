
import React from "react";

const AdSense = () => {
    //const adsbygoogle ='';
  return (
    <div>
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-1245818362998975"
        data-ad-slot="5510111893"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
       (adsbygoogle = window.adsbygoogle || []).push({
            {
            google_ad_client: "your client id",
            enable_page_level_ads: true
            }
           
        });
      </script>
    </div>
  );
};

export default AdSense;

import React from 'react';

const AdSense = () => {
  return (
    <div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <ins
        class="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-123456789"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        {(adsbygoogle = window.adsbygoogle || []).push({})}
      </script>
    </div>
  );
};

export default AdSense;

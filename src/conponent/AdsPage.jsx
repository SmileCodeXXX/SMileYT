import React, { useEffect } from "react";

const AdSense = (props) => {
  const { currentPath } = props;
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div key={currentPath}>
      <ins
        class="adsbygoogle ads"
        style={{display:'inline-block' ,width: "250px" }}
        data-ad-slot="5510111893"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;

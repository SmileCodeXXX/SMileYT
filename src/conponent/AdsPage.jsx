import React, { useEffect } from "react";

const AdSensed = (props) => {
  const { currentPath } = props;
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, [currentPath]);

  return (
    <div key={currentPath}>
      <ins
        class="adsbygoogle"
        style={{display:'block',width: "250px" }}
        data-ad-slot="5510111893"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSensed;

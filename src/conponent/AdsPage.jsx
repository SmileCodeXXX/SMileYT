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
        className="adsbygoogle"
        style={{display:'block',width: "250px" }}
        data-ad-slot="5510111893"
        
      />
    </div>
  );
};

export default AdSensed;

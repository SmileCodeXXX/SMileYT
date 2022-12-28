import React,{useEffect} from 'react';

const AdSense = props => {
  const { currentPath } = props
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  },[currentPath])
  return (
    <div key={currentPath}>
      <ins
        class="adsbygoogle ads"
        style={{ width:'250px'}}
        data-ad-slot="5510111893"
       data-ad-format="auto"
       data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;

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
        class="adsbygoogle"
        style={{ width:'250px'}}
        data-ad-client="ca-pub-1245818362998975"
        data-ad-slot="5510111893"
      />
    </div>
  );
};

export default AdSense;

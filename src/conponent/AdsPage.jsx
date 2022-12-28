import React,{useEffect} from 'react';

const AdSense = props => {
  const { currentPath } = props
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  },[])
  return (
    <div key={currentPath}>
      <ins
        class="adsbygoogle"
        style={{ display: 'inline-block'}}
        data-ad-client="ca-pub-1245818362998975"
        data-ad-slot="5510111893"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;

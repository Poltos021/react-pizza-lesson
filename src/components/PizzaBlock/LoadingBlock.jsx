import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader 
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="140" r="120" /> 
        <rect x="-48" y="507" rx="0" ry="0" width="303" height="66" /> 
        <rect x="0" y="320" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="285" rx="6" ry="6" width="280" height="26" /> 
        <rect x="0" y="420" rx="6" ry="6" width="90" height="30" /> 
        <rect x="140" y="412" rx="20" ry="20" width="125" height="40" />
      </ContentLoader>
  )
}

export default LoadingBlock;
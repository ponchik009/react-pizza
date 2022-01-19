import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
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
      <circle cx="140" cy="120" r="120" />
      <rect x="0" y="252" rx="5" ry="5" width="280" height="30" />
      <rect x="148" y="396" rx="20" ry="20" width="130" height="39" />
      <rect x="0" y="303" rx="10" ry="10" width="280" height="80" />
      <rect x="0" y="405" rx="5" ry="5" width="60" height="25" />
    </ContentLoader>
  );
};

export default LoadingBlock;

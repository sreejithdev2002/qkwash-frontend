import React, { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

function Loading() {
  const loadingBar = useRef(null);

  useEffect(() => {
    loadingBar.current.continuousStart();

    const timer = setTimeout(() => {
      loadingBar.current.complete();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <LoadingBar color="#f11946" ref={loadingBar} />
    </div>
  );
}

export default Loading;

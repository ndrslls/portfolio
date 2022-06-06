import React, { useRef } from "react";

const Title = () => {
  const ref = useRef();
  return (
    <div className="title" ref={ref}>
      <div className="box box-1"></div>
      <div className="box box-2"></div>
      <div className="box box-3"></div>
      <div className="box box-4"></div>
      <div className="jumbo">Andreu Salles</div>
    </div>
  );
};

export default Title;

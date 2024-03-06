import React from "react";
import "./index.css";
import Blogpostswiper from "../../Blog-pages/Blogswiper";

function Lifeblog() {
  return (
    <>
      <div className="lifeblogmain">
        <div className="lifeblogtitle pb4">
          <span> Life @ </span>
          <span className="colorblue">Gaian</span>
        </div>
        <div>
          <Blogpostswiper></Blogpostswiper>
        </div>
      </div>
    </>
  );
}
export default Lifeblog;

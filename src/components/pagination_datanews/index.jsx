import React, { useState } from "react";
import st from "./index.module.css";
import Image from "next/image";

const Paginationdatamain = ({ data, itemsPerPage }) => {
  //  console.log(data)
  //  console.log(itemsPerPage)

  const [currentPage, setCurrentPage] = useState(1);
  //  console.log(currentPage)
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(currentPage * itemsPerPage, data.length);

  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePreviousPage = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };
  const ChangeRoute = (Route) => {
    window.location.href = Route;
  };

  return (
    <div className={st.openingsmainpagenw}>
      <div className={st.jobopensnw}>
        <div className={st.Jobopeningsmainnw}>
          {currentItems.map((item, index) => (
            <div
              key={index}
              className={st.griditemnw}
              onClick={() => {
                ChangeRoute("/comingsoon");
              }}
            >
              <div key={index} className={st.OneComponentnw}>
                <Image src={item.imgSrc} alt="newsimage" width={400} height={320} priority />
                <div>
                  <h2 className={st.Headingnw}>{item.heading}</h2>
                  <p className={st.readmorenw}>{item.readMore}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={st.Jobspage_paginationnw}>
        <div className={st.larrow} onClick={handlePreviousPage} disabled={currentPage === 1}>
          <Image src={"/imagesnew/Career/leftarrowblue.svg"} alt="" width={20} height={20} priority/>
        </div>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1 ? "st.indexactivenw" : "st.indexnotactivenw"
            }
          >
            {index + 1}
          </div>
        ))}
        <div className={st.rarrow} onClick={handleNextPage} disabled={currentPage === totalPages}>
          <Image src={"/imagesnew/Career/rightarrowblue.svg"} alt="" width={20} height={20} priority/>
        </div>
      </div>
    </div>
  );
};

export default Paginationdatamain;

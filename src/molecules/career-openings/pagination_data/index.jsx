
import React,{useState} from "react";
import "./index.css"
// import images from "../../../constants/images";
import Img from '../../../components/Image'
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
  const ChangeRoute=(Route)=>{
    window.location.href=Route
}

  return (
    <div className="openingsmainpage">
        <div className="jobopens">
        <div className="Jobopeningsmain">
        {currentItems.map((item, index) => (
          <div key={index} className="griditem" onClick={()=>{ChangeRoute(`jobdescriptions/${item.url}`)}}>
                 <div className="gridhead">{item.title}</div>
                  <div className="griddesc">{item.description}</div>
                  <div className="gridbot">
            <div className="gridbot1">
                <div> <Img src={"/imagesnew/Career/career_bottom_card_icon_01.svg"} className=""/></div>
                <div className="">{item.location}</div>
            </div>
            <div className="gridbot2">
            <div> <Img src={"/imagesnew/Career/Career_bottom_card_icon_02.svg"} className="" /></div>
                <div className="">{item.experience}</div>
               
            </div>
                  </div>
          </div>
        ))}
      </div>
        </div>
      
      <div className="Jobspage_pagination">
      <div onClick={handlePreviousPage} disabled={currentPage === 1}>
                    <Img src={"/imagesnew/Career/leftarrowblue.svg"}  />
                  </div>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div  
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "indexactive" : "indexnotactive"}
          >
            {index + 1}
          </div>
        ))}
         <div onClick={handleNextPage} disabled={currentPage === totalPages}> 
         <Img src={"/imagesnew/Career/rightarrowblue.svg"}  />
              </div>
      </div>
    </div>
  );
};

export default Paginationdatamain;

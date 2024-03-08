import React, { useState, useEffect } from "react";
import "./accordion.css";
import ProgressBar from "../progressbar";
const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const Style = {};
  const bottomStyle1 = {
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "25px",
  };
  const bottomStyle2 = {
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? 1 : index);
  };
  const totalTimeInSeconds = 10;
  const menu = [
    {
      name: "SaaSifying Digital Transformation",
      image: "../public/images/home/77.png",
      description:
        "Our advanced SaaS tools enable lightning-speed digital transformation through low-code and XaaS phygital transformation. Streamline operations, enhance customer experiences, and create new value in weeks. Our platform is agile, innovative, cost-effective, and scalable to meet market needs.",
    },
    {
      name: "Phygital Transformation",
      image: "../public/images/home/78.png",
      description:
        "Mobius DTaaS achieves convergence between physical and digital worlds through Phygital Transformation. Its SaaS tools - Pascal Intelligence, BoltzmannBot, Monet, Vinci, and HolaVerse - empower businesses to streamline operations, enhance customer experiences, and drive phygital innovation. By combining human and machine capabilities, Mobius DTaaS transforms operations, creates new revenue streams, and unlocks new possibilities.",
    },
    {
      name: "Accountable Transformation",
      image: "../public/images/home/79.png",
      description:
        "Mobius DTaaS provides businesses with a suite of SaaS tools for accountable, responsible, and monetizable digital transformation. These tools measure effectiveness, enhance digital capabilities, and enable businesses to improve customer experiences and achieve measurable outcomes such as increased revenue and reduced costs.",
    },
    {
      name: "SaaS Factory",
      image: "../public/images/home/80.png",
      description:
        "Mobius DTaaS is a SaaS factory that enables scalable digital transformation with cutting-edge tools. With constantly improving services, Mobius DTaaS delivers flexible, cost-effective, and reliable solutions compared to traditional software deployment models.",
    },
    {
      name: "Inter-org Digital Transformation",
      image: "../public/images/home/81.png",
      description:
        "Mobius DTaaS enables digital transformation between organizations through API integrations, streamlining operations and reducing manual interventions. Its secure platform and API-first approach provide greater agility, scalability, and efficiency, accelerating digital transformation journeys and achieving better business outcomes.",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex % 5) + 1);

      data(activeIndex % 5);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="accordion">
      <div
        className="accordion-item1"
        onClick={() => {
          toggleAccordion(1);
          data(0);
        }}
      >
        <div className="accordion-title">{menu[0].name}</div>
        {activeIndex === 1 && (
          <>
            <div className="accordion-content">{menu[0].description}</div>
            <div>
              {" "}
              <ProgressBar totalTimeInSeconds={totalTimeInSeconds} />
            </div>
          </>
        )}
      </div>

      <div
        className="accordion-item2"
        onClick={() => {
          toggleAccordion(2);
          data(1);
        }}
      >
        <div className="accordion-title">{menu[1].name}</div>
        {activeIndex === 2 && (
          <>
            <div className="accordion-content">{menu[1].description}</div>
            <div>
              {" "}
              <ProgressBar totalTimeInSeconds={totalTimeInSeconds} />
            </div>
          </>
        )}
      </div>
      <div
        className="accordion-item3"
        onClick={() => {
          toggleAccordion(3);
          data(2);
        }}
      >
        <div className="accordion-title">{menu[2].name}</div>
        {activeIndex === 3 && (
          <>
            <div className="accordion-content">{menu[2].description}</div>
            <div>
              {" "}
              <ProgressBar totalTimeInSeconds={totalTimeInSeconds} />
            </div>
          </>
        )}
      </div>
      <div
        className="accordion-item4"
        onClick={() => {
          toggleAccordion(4);
          data(3);
        }}
      >
        <div className="accordion-title">{menu[3].name}</div>
        {activeIndex === 4 && (
          <>
            <div className="accordion-content">{menu[3].description}</div>
            <div>
              {" "}
              <ProgressBar totalTimeInSeconds={totalTimeInSeconds} />
            </div>
          </>
        )}
      </div>
      <div
        className="accordion-item5"
        onClick={() => {
          toggleAccordion(5);
          data(4);
        }}
      >
        <div
          className="accordion-title"
          style={activeIndex === 5 ? bottomStyle2 : bottomStyle1}
        >
          {menu[4].name}
        </div>
        {activeIndex === 5 && (
          <>
            <div className="accordion-content">{menu[4].description}</div>
            <div className="lastprogress">
              {" "}
              <ProgressBar totalTimeInSeconds={totalTimeInSeconds} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Accordion;

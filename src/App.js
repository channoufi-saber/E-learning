import {useState} from "react";
import './App.css';
import  Title from "./components/Title";
import  Header from "./components/Header";
import  Button from "./components/Button";
import headerImg from "./img/header-img.png"
import Modal from "./components/Modal";
import CategoriesCard from "./components/page-components/OffersCard";
import OffersCard from "./components/page-components/CategoriesCard";
import { AiFillHtml5, AiFillPlayCircle, AiFillUnlock } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaFileDownload, FaMapMarkedAlt } from 'react-icons/fa';

function App() {
  const [showCourseModal,setShowCourseModal]=useState(false);
  const [showOffers,setShowOffers]=useState(false);
  function handleStartLearningEvent() {
    setShowCourseModal(true)
  }
  function handleModalCancelEvent() {
    setShowCourseModal(false)
  }

    // Offers handler
  const handleShowOffers=()=>{
    showOffers === false ? setShowOffers(true):setShowOffers(false)
  }

 // Offers List

  const offerList = [
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Tons of content",
      text: "We have library of over 100,000 videos that will help you learn to code.",
    },
    {
      icon_1: <FaMapMarkedAlt className="i" size={"2em"} />,
      title: "Guided Course",
      text: "We guided you with series of videos that will help you learn to code.",
    },
    {
      icon_1: <FaFileDownload className="i" size={"2em"} />,
      title: "Project File Downloads",
      text: "    File from project are available for all of our courses to be    downloaded.",
    },
  ];

  const moreOffersList = [
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Tons of content",
      text: "We have a library of over 100,000 videos that will help you  learn to code.",
    },
    {
      icon_1: <FaMapMarkedAlt className="i" size={"2em"} />,
      title: "Guided Course",
      text: "We guided you with series of videos that will help you learn to code.",
    },
    {
      icon_1: <FaFileDownload className="i" size={"2em"} />,
      title: "Project File Downloads",
      text: "    File from project are available for all of our courses to be    downloaded.",
    },
  ];


  return (
    <>
    <div className="container container-lg">
        {showCourseModal && <Modal title={"Modal"}
        title={"Access denied"}
        text="Please login in order to access this content"
        cancelEvent={handleModalCancelEvent} />}
    <Header>
    <div className="header-text mb-3">
    <Title text="Learn to code by watching others" classes={"header-title fs-xxl mb-3"} 
      />
      <p className="header-text mb-3">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
          <div className="header-btn">
          <Button 
            classes={"btn btn-primary text-light"}
            type={"button"}
            text={"Try it free 30 days"}
            onClick={handleStartLearningEvent}
          />
          <Button 
            classes={"btn btn-secondary"}
            type={"button"}
            text={"Learn more..."}
          />
          </div>
        <img className="header-img" src={headerImg} alt="header-img" />
    </div>
    </Header>
    <main>
      <section className="categories my-4" >
        <Title text="Top categories" classes={"subtitle text-center"} />
        <div className="categories-container d-flex">
          <CategoriesCard 
          title={"Web Development"}
          icon_1={<AiFillHtml5 size={"4em"} className="icon html5"  />} 
          icon_2={<DiCss3Full size={"4em"} className="icon css3"  />} 
          icon_3={<SiJavascript size={"4em"} className="icon js"  />} 
          btnIcon={<AiFillPlayCircle size={"2em"} />}
          startLearningEvent={handleStartLearningEvent}
          >
            <span className="fs-lg" >Learn how to build web apps with:</span>
            <ul className="mt-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
            </ul>
          </CategoriesCard>
        </div>
      </section>
                {/* OFFERS */}
      <section
            className="offers container container-md p-2"
          >
            <Title
              classes={"subtitle text-center mb-4"}
              text="Here's what you get"
            />
            <div className="offers-container">
             
              {offerList.map((offer, index) => (
                <OffersCard
                  key={index}
                  icon_1={offer.icon_1}
                  title={offer.title}
                  text={offer.text}
                ></OffersCard>
              ))}
            </div>
            {showOffers && (
              <div className="offers-container fadeIn">
                {moreOffersList.map((offer, index) => (
                  <OffersCard
                    key={index}
                    icon_1={offer.icon_1}
                    title={offer.title}
                    text={offer.text}
                  ></OffersCard>
                ))}
              </div>
            )}
            <a
              onClick={handleShowOffers}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <h4 className="text-center text-primary mt-2">
                {showOffers ? "Less" : "More..."}
              </h4>
            </a>
          </section>
    </main>
    </div>
    </>
  );
}

export default App;

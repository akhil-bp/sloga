
import { React, useEffect, useState } from "react";
import { Col, Row, FormGroup, Label, Input, Table } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import json from "../services/jsonData.json";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  // {
  //   image: bg2,
  //   title: "Lets be simple blog",
  //   subtitle: "2 comments, 1 Like",
  //   description:
  //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   btnbg: "primary",
  // },
  // {
  //   image: bg3,
  //   title: "Don't Lamp blog",
  //   subtitle: "2 comments, 1 Like",
  //   description:
  //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   btnbg: "primary",
  // },
  // {
  //   image: bg4,
  //   title: "Simple is beautiful",
  //   subtitle: "2 comments, 1 Like",
  //   description:
  //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   btnbg: "primary",
  // },
];

const Starter = () => {
  let navigate = useNavigate();
  const [jsonData, setJsonData] = useState({ chapters: [] })
  // const [TempJsonData, setTempJsonData] = useState(json) 

  useEffect(() => {
    setJsonData(json)
    console.log(json)
  }, [])



  const getStringBetweenParenthese = (inputString) => {
    const regex = /\((.*?)\)/;
    const match = regex.exec(inputString);
    return match ? match[1] : null;
    // return inputString;
  }
  return (
    <div className="starter">
      <Row>
        <Col sm="12" lg="12" style={{ marginBottom: '10px', textAlign: 'center' }}>
          <CardTitle className="mobile-CardTitle" style={{ textTransform: "capitalize", fontWeight: '800' }} tag="h5">
            ASHTANGA HRIDAYAM KALPASIDDHI STHANAM
          </CardTitle>
          <CardTitle className="mobile-CardTitle" style={{ textTransform: "capitalize", fontWeight: '800' }} tag="h5">
            (अष्टाङ्गहृदयम् कल्पसिद्धिस्थानम्)
          </CardTitle>
        </Col>
      </Row>
      {/* <Row>
        {jsonData.chapters.map((chapter, i) => (
          <Col key={i} style={{ cursor: 'pointer', padding: '5px' }} xs="6" sm="6" md="4" lg="4" xl="4" xxl="4" onClick={() => navigate("/slog/" + i)}>
            <div class="card card-body" style={{ height: '100%', marginBottom: '0px' }}>
              <h5 class="card-title">{getStringBetweenParenthese(chapter?.chapter_heading)}</h5>
              <p class="card-text">{"Total Slokas- " + (chapter.slogs.length + 1)}</p>
            </div>
          </Col>
        ))}
      </Row> */}
      <Row>
        <Col style={{ cursor: 'pointer', padding: '5px' }} xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
          <div class="card card-body" style={{ height: '100%', marginBottom: '0px' , fontSize:'13px'}}>
            <h5>About the app</h5>
            Suthra is more than just a mobile application; it's your gateway to tranquility and mindfulness in the digital age. Developed with a deep understanding of ancient wisdom and modern technology, Suthra provides a curated collection of timeless sutras to inspire and uplift your spirit.
            Whether you're seeking guidance on meditation, mindfulness, or personal growth, Suthra offers a diverse range of sutras from various spiritual traditions and philosophical schools. Each sutra is carefully selected to resonate with your inner journey and help you navigate life's challenges with grace and wisdom.
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ cursor: 'pointer', padding: '5px' }} xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
          <div onClick={() => navigate("/gallery/")} class="card card-body" style={{ height: '100%', marginBottom: '0px', textAlign:'center' , fontSize:'13px'}}>
            <h3><i class="bi bi-book-half"></i> Chapters </h3>
            <p style={{margin:'0'}}> {jsonData?.chapters?.length} Chapters</p>
          </div>
        </Col>
        <Col style={{ cursor: 'pointer', padding: '5px' }} xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
          <div onClick={() => navigate("/gallery/")} class="card card-body" style={{ height: '100%', marginBottom: '0px', textAlign:'center' , fontSize:'13px'}}>
            <h3><i class="bi bi-heart-fill"></i> Favorite</h3>
            <p style={{margin:'0'}}> {jsonData?.chapters?.length} Chapters</p>
          </div>
        </Col>
        <Col style={{ cursor: 'pointer', padding: '5px' }} xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
          <div onClick={() => navigate("/about/")} class="card card-body" style={{ height: '100%', marginBottom: '0px', textAlign:'center' , fontSize:'13px'}}>
            <h3 ><i class="bi bi-person-fill"></i> About the author</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Starter;

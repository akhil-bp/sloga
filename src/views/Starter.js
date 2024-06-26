
import { React, useEffect, useState } from "react";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";
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
  CardBody,
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
  const [jsonData, setJsonData] = useState({chapters:[]}) 
  // const [TempJsonData, setTempJsonData] = useState(json) 

  useEffect(() => {
    setJsonData(json)
    console.log(json)
  }, [])

  const search = (txt)=>{
   if(txt){
     const newData =  json.chapters.filter((item)=>{
        if(item.chapter_id === txt || item._chapter_heading.includes(txt)){
          return item
        }
      })
      let _jsonData = [jsonData];
      _jsonData.chapters=newData
      setJsonData(_jsonData)
      console.log(newData)
    }else
      setJsonData(json)
  }

  const getStringBetweenParenthese = (inputString) => {
    const regex = /\((.*?)\)/;
    const match = regex.exec(inputString);
    return match ? match[1] : null;
  }
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="12" lg="12" style={{ marginBottom: '10px', textAlign: 'center' }}>
          <CardTitle className="mobile-CardTitle" style={{ textTransform: "capitalize", fontWeight: '800' }} tag="h5">
            ASHTANGA HRIDAYAM KALPASIDDHI STHANAM
          </CardTitle>
          <CardTitle className="mobile-CardTitle" style={{ textTransform: "capitalize", fontWeight: '800' }} tag="h5">
            (अष्टाङ्गहृदयम् कल्पसिद्धिस्थानम्)
          </CardTitle>
        </Col>

        <Col sm="12" lg="12" style={{ marginBottom: '10px', textAlign: 'center' }}>
          <FormGroup style={{padding: '10px 30px' }}>
            {/* <Label for="searchfield">
              Date
            </Label> */}
            <Input
              id="searchfield"
              name="searchfield"
              placeholder="Type to search here"
              type="text"
              onChange={(e)=>search(e.target.value)}
            />
          </FormGroup>

        </Col>

      </Row>
      <Row>
        {jsonData.chapters.map((chapter, i) => (
          <Col key={i} style={{ cursor: 'pointer' }} xs="4" sm="4" md="4" lg="4" xl="4" xxl="4" onClick={() => navigate("/slog/" + i)}>
            <TopCards
              bg="bg-light-success text-success"
              title="Profit"
              subtitle={"Total Slokas- " + (chapter.slogs.length + 1)}
              earning={getStringBetweenParenthese(chapter.chapter_heading)}
              icon="bi bi-wallet"
            />
          </Col>
        ))}
        {/* <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Refund given"
            earning="$1k"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Yearly Project"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning="210"
            icon="bi bi-bag"
          />
        </Col> */}
      </Row>
      {/***Sales & Feed***/}
      {/* <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row> */}
      {/***Table ***/}

    </div>
  );
};

export default Starter;

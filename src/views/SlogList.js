
import { React, useEffect } from "react";
import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import json from "../services/jsonData.json";
import { useParams } from "react-router-dom";
const bg1  =  "data:image/jpeg;base64,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";

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

const SlogList = () => {
  let { id } = useParams();

  useEffect(() => {
    console.log(json)
  }, [])

  return (
    <div style={{margin:'-9px -15px'}}>
      {/***Top Cards***/}
      <Row>
        <Col lg="12">
          <ProjectTables id={id} />
        </Col>
      </Row>
    </div>
  );
};

export default SlogList;

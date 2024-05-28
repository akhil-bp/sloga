
import { React, useEffect } from "react";
import { Col, Row } from "reactstrap";
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
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { Table } from 'reactstrap';
import parse from 'html-react-parser';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './common.css'
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

const SlogDetail = (props) => {
  let { slogId, id } = props;
  // const SlogDetail = () => {
  //   let { slogId, id } = useParams();
  useEffect(() => {
    console.log(json)
  }, [])

  return (
    <div>
      {/* <Row>
        {BlogData.map((blg, index) => (
          <Col sm="12" lg="12" xl="12" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
      <Row>
        {/* {json.chapters[slogId].slogs[id].map((blg, index) => ( */}
        <Col sm="12" lg="12" xl="12">

          <Card>
            <CardBody className="p-4">
            <CardImg alt="Card image cap" src={'/ayurvedic-remedies-for-cold-cough.png'} />
              {/* <CardTitle style={{ fontWeight: '800', textAlign: 'center' }} tag="h5">

                {parse(json.chapters[slogId].slogs[id].heading)}

              </CardTitle> */}
              <Card>
                <CardBody className="p-4" style={{ textAlign: 'left', boxShadow: '0 0 3px 0 rgb(0 0 0 / 20%)' }}>
                  {json.chapters[slogId].slogs[id].slog.map((item, i) => (
                    <CardTitle className="mobile-CardTitle" key={i} tag="h4">{parse(item)}</CardTitle>

                  ))}
                </CardBody>

                <AudioPlayer
                  // autoPlay
                  // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                  // src={"https://slog.s3.ap-southeast-1.amazonaws.com/" + json.chapters[slogId].slogs[id].audio_file}
                  src={"/slogas/" + json.chapters[slogId].slogs[id].audio_file?.split('_')[0] + "/" + json.chapters[slogId].slogs[id].audio_file}
                  onPlay={e => console.log("onPlay")}
                // other props here
                />
              </Card>
              <div class="container" style={{ paddingLeft: '0px' }}>
                {json.chapters[slogId].slogs[id].detail.map((item, i) => (
                  <CardText key={i} className="mt-3">
                    {/* <div>
                    <div> {item.title} :</div>
                    {item.explanation.map((exp) => (
                      <div>{exp}</div>
                    ))}
                  </div> */}
                    <div class="row">
                      <div class="col-lg-2" style={{ fontWeight: 600 }}>
                        {parse(item.title)}
                      </div>
                      <div class="col-lg-10">
                        {item.explanation.map((exp) => (
                          // <div style={{ textAlign: (item.title === 'अन्वय:' || item.title === 'भावार्थ:') ? 'justify' : '' }}>{parse(exp)}</div>
                          <div style={{ textAlign:  'justify' }}>{parse(exp)}</div>
                        ))}
                      </div>
                    </div>
                  </CardText>
                ))}
              </div>

              {/* <CardSubtitle>{'props.subtitle'}</CardSubtitle>
              <CardText className="mt-3">{'props.text'}</CardText>
              <Button color={'props.color'}>Read More</Button> */}
            </CardBody>
          </Card>
        </Col>
        {/* ))} */}
      </Row>

    </div>
  );
};

export default SlogDetail;

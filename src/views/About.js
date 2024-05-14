import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About the author
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">Dr.Braivin Camly</h2>
                <p style={{textAlign:'justify'}} className=" mb-4">
                Dr.Braivin Camly is a passionate developer with over a decade of experience in creating innovative mobile applications. With a background in computer science and a keen interest in user experience design, John strives to craft apps that are both functional and visually appealing.

                  Driven by a desire to make a positive impact, John founded Suthra with the vision of providing users with a seamless and intuitive way to discover and enjoy their favorite sutras. His dedication to excellence and commitment to continuous improvement are evident in every aspect of the app's design and functionality.

                  When he's not coding or brainstorming new features for Suthra, John enjoys hiking in the great outdoors and experimenting with new recipes in the kitchen. He believes that a balanced life is essential for creativity and innovation, and strives to find harmony between his work and personal pursuits.

                  Connect with John on LinkedIn or Twitter to learn more about his journey as an app developer and stay updated on the latest developments with Suthra.
                </p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;

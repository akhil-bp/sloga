import { Card, CardBody, CardTitle, CardSubtitle, Table, Col, FormGroup, Input, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Accordion, Button } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import json from "../../services/jsonData.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SlogDetail from "../../views/SlogDetail";
import parse from 'html-react-parser';

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const ProjectTables = (props) => {
  let navigate = useNavigate();
  const [open, setOpen] = useState('');
  const [searchNumber, setSearchNumber] = useState('');
  const [isOpenAll, setIsOpenAll] = useState('');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const search = (txt) => {
    if (txt) {
      setSearchNumber(txt)
      console.log(txt)
    } else
      setSearchNumber('')
  }

  const searchCondition = (index) => {
    if (searchNumber)
      return index + 1 == searchNumber
    return true
  }

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{json.chapters[props.id ?? 1].chapter_heading}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Total slokas  - {json.chapters[props.id ?? 1].slogs.length}
          </CardSubtitle>
          <Col sm="12" lg="12" style={{ marginBottom: '10px', textAlign: 'center' }}>
            <FormGroup style={{ padding: '10px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* <Label for="searchfield">
              Date
            </Label> */}

              <Input
                id="searchfield"
                name="searchfield"
                placeholder="Search slokas by number"
                style={{ borderRadius: '20px' }}
                type="text"
                onChange={(e) => search(e.target.value)}
              />
              {!isOpenAll ?
                <div
                  onClick={() => { setIsOpenAll(1); setOpen(1); }}
                  style={{cursor:'pointer', fontSize: '14px', marginLeft: '9px', color: '#2962ff', width: '80px' }}>
                  Open All
                </div>
                :
                <div
                  onClick={() => { setIsOpenAll(''); setOpen(''); }}
                  style={{cursor:'pointer', fontSize: '14px', marginLeft: '9px', color: '#2962ff', width: '80px' }}>
                  Close All
                </div>
              }
            </FormGroup>

          </Col>

          <Accordion flush open={open} toggle={toggle}>
            {json.chapters[props.id ?? 1].slogs.map((tdata, index) => (
              searchCondition(index) &&
              <AccordionItem>
                <AccordionHeader targetId={isOpenAll ? isOpenAll : index + 1}>
                  <div>

                    <strong style={{ minWidth: '100%' }}><code>
                      {index + 1 + '. '}
                    </code> {parse(tdata.heading.split('(')[0])}</strong>
                    <div style={{ minWidth: '100%' }}> {tdata.heading.split('(')[1] &&
                      // <h6 className="mb-0 " style={{ fontSize: '14px' }}>( {tdata.heading.split('(')[1]}</h6>
                      <p className="text-muted" style={{ fontSize: '14px', marginTop: '2px', marginBottom: '2px' }}>( {parse(tdata.heading.split('(')[1])}</p>
                    }
                    </div>

                  </div>



                </AccordionHeader>
                <AccordionBody accordionId={isOpenAll ? isOpenAll : index + 1}>

                  <SlogDetail slogId={props.id} id={index} ></SlogDetail>
                  {/* You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                  <code>
                    .accordion-body
                  </code>
                  , though the transition does limit overflow. */}
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>

          {/* <Table className="no-wrap mt-3 align-middle" responsive borderless>

            <tbody>
              {json.chapters[props.id ?? 1].slogs.map((tdata, index) => (
                <tr style={{ cursor: 'pointer' }} key={index} className="border-top" onClick={() => navigate("/slog/" + props.id + "/detail/" + index)}>
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <i className="bi bi-wallet"></i>
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.heading.split('(')[0]}</h6>
                        {tdata.heading.split('(')[1] &&
                          <span className="text-muted">( {tdata.heading.split('(')[1]}</span>
                        }
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;

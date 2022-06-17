import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import json from "../../services/jsonData.json";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{json.chapters[props.id ?? 1].chapter_heading}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Total slogs  - 10
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                {/* <th>Slog</th> */}
                {/* <th>Action</th> */}

                {/* <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th> */}
              </tr>
            </thead>
            <tbody>
              {json.chapters[props.id ?? 1].slogs.map((tdata, index) => (
                <tr style={{ cursor: 'pointer' }} key={index} className="border-top" onClick={() => navigate("/slog/" + props.id + "/detail/" + index)}>
                  <td>
                    <div className="d-flex align-items-center p-2">
                      {/* <div style={
                        {
                          minWidth: '25px',
                          borderRadius: '15px',
                          minHeight: '25px',
                          background: '#3270fa',
                          border: '3px solid #c2e0f2'
                        }
                      } /> */}
                      <i className="bi bi-wallet"></i>
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.heading}</h6>
                        {/* <span className="text-muted">Label</span> */}
                      </div>
                    </div>
                  </td>
                  {/* <td>View</td> */}
                  {/* <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;

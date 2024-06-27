import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AddSong from "./AddSong";
import AdminSearchSong from "./AdminSearchSong";
import AllSongs from "./AllSongs";

const AdminHome = (props) => {
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <section>
          <div className="row" style={{ minHeight: "100vh" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={2} className="bg-dark">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <span className="text-light center">
                          <i className="fa fa-user">&nbsp;</i>Users
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <span className="text-light center">
                          <i className="fa fa-music">&nbsp;</i>Songs
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <span className="text-light center">
                          <i className="fa fa-list">&nbsp;</i>Playlists
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      Users content coming soon...
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <AdminSearchSong />
                      <AddSong />
                      <AllSongs />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      Playlists content coming soon...
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminHome;

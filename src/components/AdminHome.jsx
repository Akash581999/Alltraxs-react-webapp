import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AllUsers from "./AllUsers";
import SearchSong from "./AdminSearchSong";
import AddSong from "./AddSong";
import AllSongs from "./AllSongs";
import AllPlaylists from "./AllPlaylists";
import SearchPlaylist from "./SearchPlaylist";
import AddPlaylist from "./AddPlaylist";
import AllFeedbacks from "./AllFeedbacks";
import AllSubscriptions from "./AllSubscriptions";

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
                          <i className="fas fa-users text-info">&nbsp;</i>Users
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <span className="text-light center">
                          <i className="fas fa-music text-info">&nbsp;</i>Songs
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <span className="text-light center">
                          <i className="fas fa-list text-info">&nbsp;</i>
                          Playlists
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="forth">
                        <span className="text-light center">
                          <i className="fas fa-envelope text-info">&nbsp;</i>
                          Feedbacks
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">
                        <span className="text-light center">
                          <i className="fas fa-rupee text-info">&nbsp;</i>
                          Subscriptions
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      {/* Users content coming soon.. */}
                      <AllUsers />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* Songs content coming soon.. */}
                      <AllSongs />
                      <SearchSong />
                      <AddSong />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* Playlists content coming soon.. */}
                      <AllPlaylists />
                      <SearchPlaylist />
                      <AddPlaylist />
                    </Tab.Pane>
                    <Tab.Pane eventKey="forth">
                      {/* Feedbacks content coming soon.. */}
                      <AllFeedbacks />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      {/* Subscriptions content coming soon.. */}
                      <AllSubscriptions />
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

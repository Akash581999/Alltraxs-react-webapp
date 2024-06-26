import React from "react";
import { Link } from "react-router-dom";

const DeleteSong = (props) => {
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <section>
          <div className="row" style={{ height: "100vh" }}>
            <div className="col-lg-2 col-md-3 col-sm-4 col-12">
              <div className="d-flex align-items-start h-100 bg-dark">
                <nav
                  className="nav d-flex flex-column align-items-stretch pe-4 nav-pills p-2 w-100 h-100"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <ul className="d-flex flex-column" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link to="/AdminHome">
                        <button
                          className="nav-link w-100 text-light"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          <i className="fa fa-search text-info"></i>
                          &nbsp;Search Song
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/AddSong">
                        <button
                          className="nav-link w-100 text-light"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <i className="fa fa-plus text-info"></i>&nbsp;Add song
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/EditSong">
                        <button
                          className="nav-link w-100 text-light"
                          id="settings-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#settings"
                          type="button"
                          role="tab"
                          aria-controls="settings"
                          aria-selected="false"
                        >
                          <i className="fa fa-edit text-info"></i>&nbsp;Edit
                          song
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active w-100 text-light"
                        id="settings-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#settings"
                        type="button"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        <i className="fa fa-trash text-info"></i>
                        &nbsp;Delete song
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8 col-12">
              <p className="fs-3 text-danger text-start mx-3 my-3">
                DELETE SONG
              </p>
              <form
                className="form-container row g-3 bg-glass my-5 mx-5 needs-validation"
                autoComplete="on"
                spellCheck="true"
                noValidate
              >
                <div className="col-md-6">
                  <label htmlFor="Title" className="form-label">
                    Song Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Artist" className="form-label">
                    Song Artist
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Artist"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Album" className="form-label">
                    Album Name
                  </label>
                  <textarea
                    className="form-control"
                    id="Album"
                    name="Album"
                    rows="1"
                    required
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label htmlFor="Popularity" className="form-label">
                    Popularity
                  </label>
                  <input
                    type="number"
                    id="Popularity"
                    name="Popularity"
                    placeholder="Trend pop"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Select" className="form-label">
                    Genre
                  </label>
                  <select className="form-select" id="Select" required>
                    <option disabled>Choose..</option>
                    <option value="Pop">Pop</option>
                    <option value="Rap">Rap</option>
                    <option value="Rock">Rock</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Indie">Indie</option>
                    <option value="Metal">Metal</option>
                    <option value="Hip-hop">Hip-hop</option>
                    <option value="Country">Country</option>
                    <option value="Classical">Classical</option>
                    <option value="Folk">Folk</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="Duration" className="form-label">
                    Duration
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">In</span>
                    <input
                      type="text"
                      id="Duration"
                      name="Duration"
                      className="form-control"
                      aria-label="Time in (Mins:Secs format)"
                      required
                    />
                    <span className="input-group-text">secs</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="songurl" className="form-label">
                    Upload Song
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="songurl"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="songpic" className="form-label">
                    Upload Pic
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="songpic"
                    required
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-danger float-end" type="submit">
                    Remove
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DeleteSong;

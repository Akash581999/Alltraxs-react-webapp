import React from "react";

const AdminPage = () => {
  return (
    <>
      <div className="container">
        <h2>Upload Song</h2>
        <form
          className="row gy-2 gx-3 align-items-center"
          id="uploadForm"
          action="http://localhost:5000/api/songs"
          method="post"
          enctype="multipart/form-data"
        >
          <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div>
            <label for="artist">Artist:</label>
            <input type="text" id="artist" name="artist" required />
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="description"
              required
            ></textarea>
            <label for="floatingTextarea">Description</label>
          </div>
          <div>
            <label for="formFileLg" className="form-label">
              Choose a file:
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
              name="songFile"
              accept=".mp3,.wav,.ogg"
              required
            />
          </div>
          <div>
            <button type="submit">Upload Song</button>
          </div>
        </form>

        <h2>Search songs here</h2>
        <label for="exampleDataList" className="form-label">
          Datalist example
        </label>
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          <option value="San Francisco"></option>
          <option value="New York"></option>
          <option value="Seattle"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
        </datalist>

        <form className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
            <label
              className="visually-hidden"
              for="inlineFormInputGroupUsername"
            >
              Username
            </label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Username"
              />
            </div>
          </div>

          <div className="col-12">
            <label className="visually-hidden" for="inlineFormSelectPref">
              Preference
            </label>
            <select className="form-select" id="inlineFormSelectPref">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineFormCheck"
              />
              <label className="form-check-label" for="inlineFormCheck">
                Remember me
              </label>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminPage;

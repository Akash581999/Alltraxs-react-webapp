import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const AllFeedbacks = (props) => {
  const [feedbacksList, setFeedbacksList] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const requestData = {
      eventID: "1024",
      addInfo: {
        Feedback_Id: "",
        UserName: "",
        Email: "",
        Country: "",
        Comments: "",
        CreatedAt: "",
      },
    };

    try {
      const response = await fetch("http://localhost:5164/allfeedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, "API response data");

      if (data.rData && data.rData.rCode === 0) {
        setFeedbacksList(data.rData.feedback || []);
        // alert(data.rData.rMessage || "All feedbacks retrieved!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch feedbacks: ${error}`);
      setFeedbacksList([]);
    }
  };

  return (
    <div className={`bg-${props.mode}`}>
      <section>
        <span className="fs-3 text-info text-start mx-3 my-3">
          ALL FEEDBACKS
        </span>
        <div className="table-responsive">
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="my-3 mx-auto text-center"
          >
            <thead>
              <tr>
                <th className="text-info">Feedback Id</th>
                <th className="text-info">User Name</th>
                <th className="text-info">Email</th>
                <th className="text-info">Country</th>
                <th className="text-info">Comments</th>
                <th className="text-info">Sent On</th>
                <th className="text-info">Options</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {feedbacksList.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.feedback_Id || index + 1}</td>
                  <td>{feedback.userName}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.country}</td>
                  <td>{feedback.comments}</td>
                  <td>{feedback.createdAt}</td>
                  <td>
                    <button className="btn btn-success mx-1" type="button">
                      <i className="fas fa-envelope-open">&nbsp;</i>Mark Read
                    </button>
                    <button className="btn btn-danger mx-1" type="button">
                      <i className="fas fa-trash">&nbsp;</i>Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default AllFeedbacks;

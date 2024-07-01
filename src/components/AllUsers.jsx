import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const AllUsers = (props) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const requestData = {
      eventID: "1018",
      addInfo: {
        UserId: "",
        FirstName: "",
        LastName: "",
        UserName: "",
        UserPassword: "",
        Email: "",
        Mobile: "",
        ProfilePic: "",
        CreatedOn: "",
      },
    };

    try {
      const response = await fetch("http://localhost:5164/getallusers", {
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

      if (data.rData && data.rData.rCode === 0) {
        setUsersList(data.rData.users || []);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch users: ${error}`);
      setUsersList([]);
    }
  };

  return (
    <div className={`bg-${props.mode}`}>
      <section>
        <span className="fs-3 text-info text-start mx-3 my-3">ALL USERS</span>
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
                <th className="text-info">User Id</th>
                <th className="text-info">First Name</th>
                <th className="text-info">Last Name</th>
                <th className="text-info">User Name</th>
                <th className="text-info">User Password</th>
                <th className="text-info">Email</th>
                <th className="text-info">Mobile</th>
                <th className="text-info">Profile Pic</th>
                <th className="text-info">Account Created</th>
                <th className="text-info">Options</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {usersList.map((user, index) => (
                <tr key={index}>
                  <td>{user.userId || index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.userName}</td>
                  <td className="d-lg-table-cell">{user.userPassword}</td>
                  <td className="d-lg-table-cell">{user.email}</td>
                  <td className="d-lg-table-cell">{user.mobile}</td>
                  <td className="d-lg-table-cell">{user.profilePic}</td>
                  <td>{user.createdOn}</td>
                  <td>
                    <button className="btn btn-danger mx-1" type="button">
                      <i className="fas fa-trash">&nbsp;</i>Remove
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

export default AllUsers;

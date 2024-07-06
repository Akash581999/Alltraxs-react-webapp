import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const AllSubscriptions = (props) => {
  const [subscriptionsList, setsubscriptionsList] = useState([]);

  useEffect(() => {
    fetchsubscriptions();
  }, []);

  const fetchsubscriptions = async () => {
    const requestData = {
      eventID: "1031",
      addInfo: {
        SubscriptionId: "",
        UserId: "",
        UserName: "",
        Email: "",
        PlanType: "",
        CouponCode: "",
        PaymentDate: "",
        StartDate: "",
        EndDate: "",
        LastUpdated: "",
        Active: "",
      },
    };

    try {
      const response = await fetch("http://localhost:5164/allsubscriptions", {
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
        setsubscriptionsList(data.rData.Subscriptions || []);
        // alert(data.rData.rMessage || "All subscriptions retrieved!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch subscriptions: ${error}`);
      setsubscriptionsList([]);
    }
  };

  const handleDeletesubscription = async (email) => {
    const requestData = {
      eventID: "1030",
      addInfo: {
        Email: `${email}`,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/subscriptions/id", {
        method: "DELETE",
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
        console.log(data.rData.email);
        alert(`You sure want you delete subscription: ${email}`);
        alert("User subscription deleted successfully" || data.rData.rMessage);
        window.location.reload();
        // setsubscriptionsList([] || data.rData.subscription);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to delete subscription: ${error}`);
      setsubscriptionsList([]);
    }
  };

  return (
    <div className={`bg-${props.mode}`}>
      <section>
        <span className="fs-3 text-info text-start mx-3 my-3">
          ALL SUBSCRIPTIONS
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
                <th className="text-info">Sub Id</th>
                <th className="text-info">User Id</th>
                <th className="text-info">User Name</th>
                <th className="text-info">Email</th>
                <th className="text-info">Plan</th>
                <th className="text-info">Coupon</th>
                <th className="text-info">Payment Date</th>
                <th className="text-info">Start From</th>
                <th className="text-info">End On</th>
                <th className="text-info">Updated On</th>
                <th className="text-info">Active</th>
                <th className="text-info">Options</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {subscriptionsList.map((subscription, index) => (
                <tr key={index}>
                  <td>{subscription.subscriptionId || index + 1}</td>
                  <td>{subscription.userId}</td>
                  <td>{subscription.userName}</td>
                  <td>{subscription.email}</td>
                  <td>{subscription.planType}</td>
                  <td>{subscription.couponCode}</td>
                  <td>{subscription.paymentDate}</td>
                  <td>{subscription.startDate}</td>
                  <td>{subscription.endDate}</td>
                  <td>{subscription.lastUpdated}</td>
                  <td>{subscription.active ? "Yes" : "No"}</td>
                  <td>
                    <button className="btn btn-success mx-1" type="button">
                      <i className="fas fa-eye"></i>Review
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      type="button"
                      onClick={(email) =>
                        handleDeletesubscription(subscription.email)
                      }
                    >
                      <i className="fas fa-remove"></i>Cancel
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

export default AllSubscriptions;

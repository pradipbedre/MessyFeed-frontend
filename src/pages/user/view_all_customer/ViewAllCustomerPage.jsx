import React from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import { CustomButtom } from "../../../components/user/shared/SharedComponent";
const ViewAllCustomerPage = () => {
  return (
    <div className="viewAllCustomerContainer">
      <Navbar />
      <div className="viewAllCustomer">
        <div className="search-box">
          <input type="text" />
          <CustomButtom name={"Search"} />
        </div>
        <div className="all-customer">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pradip Bedre</td>
                <td>pradip@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button>Prev</button>
          <p>1 to 50</p>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ViewAllCustomerPage;

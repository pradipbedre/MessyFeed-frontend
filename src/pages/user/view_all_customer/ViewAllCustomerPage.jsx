import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import { CustomButton } from "../../../components/user/shared/SharedComponent";
import "./view_all_customer.scss";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const ViewAllCustomerPage = () => {
  const [customers, setCustomers] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const customerParPage = 13;
  const pagesVisited = pageNumber * customerParPage;
  const displayCustomers =
    customers && customers.slice(pagesVisited, pagesVisited + customerParPage);
  const pageCount = customers && Math.ceil(customers.length / customerParPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setCustomers(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="viewAllCustomerContainer">
      <Navbar />
      <div className="viewAllCustomer">
        <div className="search-box">
          <input type="text" placeholder="enter email to search customer" />
          <CustomButton name={"Search"} />
        </div>
        <div className="all-customer">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>View Profile</th>
              </tr>
            </thead>
            <tbody>
              {displayCustomers &&
                displayCustomers.map((customer) => (
                  <tr>
                    <td>{customer.id}</td>
                    <td>pradip@gmail.com</td>
                    <td>
                      {
                        <Link to="/dashboard/viewAllCustomer/viewCustomer">
                          <CustomButton name={"View Profile"} />
                        </Link>
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButton"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewAllCustomerPage;

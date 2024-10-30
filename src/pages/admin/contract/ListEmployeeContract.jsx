// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import editIcon from "@iconify/icons-mdi/pencil";
import deleteIcon from "@iconify/icons-mdi/delete";
import leftArrowIcon from "@iconify/icons-mdi/arrow-left";
import rightArrowIcon from "@iconify/icons-mdi/arrow-right";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../../components/admin/Header.jsx";

import "./ListEmployeeContract.css";

const ListEmployeeContract = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  // Hàm gọi API để lấy dữ liệu từ MockAPI
  useEffect(() => {
    fetch("https://6711ba674eca2acdb5f58cfd.mockapi.io/api/employeesmanagement")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentData = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleAddClick = () => navigate("/add-contract");
  const handleEditClick = (id) => navigate(`/edit-contract/${id}`);

  const handleCheckboxChange = (id) => {
    setSelectedEmployees((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectAll = () => {
    const allSelected = currentData.reduce((acc, employee) => {
      acc[employee.id] = !selectAll;
      return acc;
    }, {});

    setSelectedEmployees(allSelected);
    setSelectAll(!selectAll);
  };

  return (
    <div className="homepage">
      <div className="main-layout">
        <div className="right-section">
          <HeaderAdmin />
          <div className="content">
            <div className="tab-header">
              <span className="tab-title">Employee Contract List</span>
            </div>
            <div className="employee-contract-section">
              <div className="add-button-container">
                <button className="add-button" onClick={handleAddClick}>
                  Add Contract
                </button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>ID</th>
                    <th>Name Employee</th>
                    <th>Social Security Number</th>
                    <th>Issued Date</th>
                    <th>Issued By</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.length > 0 ? (
                    currentData.map((employee) => (
                      <tr key={employee.id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={!!selectedEmployees[employee.id]}
                            onChange={() => handleCheckboxChange(employee.id)}
                          />
                        </td>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.ssn}</td>
                        {/* Kiểm tra và hiển thị cả hai trường issuedDate và issueddate */}
                        <td>{employee.issuedDate || employee.issueddate}</td>
                        <td>{employee.issuedBy || employee.issuedby}</td>
                        <td>{employee.startDate || employee.startdate}</td>
                        <td>{employee.endDate || employee.enddate}</td>
                        <td>
                          <Icon
                            icon={editIcon}
                            className="icon"
                            onClick={() => handleEditClick(employee.id)}
                          />
                          <Icon icon={deleteIcon} className="icon" />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" style={{ textAlign: "center" }}>
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="pagination">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  <Icon icon={leftArrowIcon} className="arrow-icon" /> Previous
                </button>
                <span>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <span
                      key={index + 1}
                      className={`page-number ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </span>
                  ))}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next <Icon icon={rightArrowIcon} className="arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmployeeContract;

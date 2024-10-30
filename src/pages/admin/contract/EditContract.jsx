// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../../components/admin/Header.jsx";
import "./EditContract.css";

const EditContract = () => {
  const [name, setName] = useState("");
  const [employee, setEmployee] = useState("");
  const [fileContract, setFileContract] = useState(null);
  const [companyMaintenance, setCompanyMaintenance] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFileContract(event.target.files[0]);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    console.log("Contract updated:", {
      name,
      employee,
      fileContract,
      companyMaintenance,
      issuedBy,
      issuedDate,
      endDate,
    });
    navigate("/list-employee-contract");
  };

  const handleReturn = () => {
    navigate("/list-employee-contract");
  };

  return (
    <div className="edit-contract-homepage">
      <div className="edit-contract-main-layout">
        <div className="edit-contract-right-section">
          <HeaderAdmin />
          <div className="edit-contract-tab-header">
            <span className="edit-contract-tab-title">Edit Contract</span>
          </div>
          <div className="edit-contract-content">
            <div className="edit-contract-form-container">
              <p className="edit-contract-form-title">Edit Contract</p>
              <form
                className="edit-contract-contract-form"
                onSubmit={handleConfirm}
              >
                <div className="edit-contract-form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="edit-contract-form-group">
                  <label htmlFor="employee">Employee:</label>
                  <input
                    type="text"
                    id="employee"
                    placeholder="Enter employee name"
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                  />
                </div>

                <div className="edit-contract-form-group">
                  <label htmlFor="fileContract">File Contract:</label>
                  <input
                    type="file"
                    id="fileContract"
                    name="fileContract"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="edit-contract-form-group">
                  <label htmlFor="companyMaintenance">
                    Company Maintenance:
                  </label>
                  <input
                    type="text"
                    id="companyMaintenance"
                    placeholder="Enter company maintenance"
                    value={companyMaintenance}
                    onChange={(e) => setCompanyMaintenance(e.target.value)}
                  />
                </div>

                <div className="edit-contract-form-group">
                  <label htmlFor="issuedBy">Issued By:</label>
                  <input
                    type="text"
                    id="issuedBy"
                    placeholder="Enter issued by"
                    value={issuedBy}
                    onChange={(e) => setIssuedBy(e.target.value)}
                  />
                </div>

                <div className="edit-contract-form-group">
                  <label htmlFor="issuedDate">Issued Date:</label>
                  <input
                    type="date"
                    id="issuedDate"
                    value={issuedDate}
                    onChange={(e) => setIssuedDate(e.target.value)}
                  />
                </div>

                <div className="edit-contract-form-group">
                  <label htmlFor="endDate">End Date:</label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                <div className="edit-contract-button-group">
                  <button
                    type="button"
                    className="edit-contract-btn-return"
                    onClick={handleReturn}
                  >
                    Return
                  </button>
                  <button type="submit" className="edit-contract-btn-confirm">
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContract;

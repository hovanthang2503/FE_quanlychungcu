// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../../components/admin/Header.jsx";
import "./EditContract.css";

const EditContract = () => {
  const [name, setName] = useState("");
  const [employee, setEmployee] = useState("");
  const [fileContract, setFileContract] = useState(null);
  const [companyMaintenance, setCompanyMaintenance] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();
  const { id } = useParams(); // Lấy ID từ URL

  // Fetch dữ liệu hợp đồng hiện tại từ MockAPI khi component được render
  useEffect(() => {
    const fetchContract = async () => {
      try {
        const response = await fetch(
          `https://6711ba674eca2acdb5f58cfd.mockapi.io/api/employeesmanagement/${id}`
        );
        const data = await response.json();

        setName(data.name);
        setEmployee(data.employee);
        setCompanyMaintenance(data.companyMaintenance);
        setIssuedBy(data.issuedby);
        setIssuedDate(data.issueddate ? data.issueddate.slice(0, 10) : "");
        setStartDate(data.startdate ? data.startdate.slice(0, 10) : "");
        setEndDate(data.enddate ? data.enddate.slice(0, 10) : "");
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu hợp đồng:", error);
      }
    };

    fetchContract();
  }, [id]);

  const handleFileChange = (event) => {
    setFileContract(event.target.files[0]);
  };

  const handleConfirm = async (event) => {
    event.preventDefault();

    const updatedData = {
      name,
      employee,
      companyMaintenance,
      issuedBy,
      issuedDate,
      startDate,
      endDate,
    };

    try {
      const response = await fetch(
        `https://6711ba674eca2acdb5f58cfd.mockapi.io/api/employeesmanagement/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        console.log("Hợp đồng đã được cập nhật:", updatedData);
        navigate("/list-employee-contract"); // Điều hướng về trang danh sách hợp đồng sau khi cập nhật
      } else {
        console.error("Cập nhật hợp đồng thất bại");
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật hợp đồng:", error);
    }
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
                  <label htmlFor="startDate">Start Date:</label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
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

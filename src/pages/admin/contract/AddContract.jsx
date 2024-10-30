// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../../components/admin/Header.jsx";
import "./AddContract.css";

const AddContract = () => {
  const [contractData, setContractData] = useState({
    name: "",
    employee: "",
    fileContract: null,
    companyMaintenance: "",
    issuedBy: "",
    issuedDate: "",
    endDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContractData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setContractData((prevData) => ({
      ...prevData,
      fileContract: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tạo bản sao của contractData và loại bỏ fileContract (nếu API không hỗ trợ tải tệp)
    const dataToSend = { ...contractData };
    delete dataToSend.fileContract; // Xóa thuộc tính fileContract nếu không cần thiết

    try {
      const response = await fetch(
        "https://6711ba674eca2acdb5f58cfd.mockapi.io/api/employeesmanagement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        console.log("Dữ liệu hợp đồng mới đã được thêm:", dataToSend);
        navigate("/list-employee-contract"); // Điều hướng về trang danh sách hợp đồng
      } else {
        console.error("Thêm hợp đồng thất bại");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    <div className="add-contract-homepage">
      <div className="add-contract-main-layout">
        <div className="add-contract-right-section">
          <HeaderAdmin />
          <div className="add-contract-tab-header">
            <span className="add-contract-tab-title">Add Contract</span>
          </div>
          <div className="add-contract-content">
            <div className="add-contract-form-container">
              <p className="add-contract-form-title">New Contract</p>
              <form
                className="add-contract-contract-form"
                onSubmit={handleSubmit}
              >
                <div className="add-contract-form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contractData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                  />
                </div>

                <div className="add-contract-form-group">
                  <label htmlFor="employee">Employee:</label>
                  <input
                    type="text"
                    id="employee"
                    name="employee"
                    value={contractData.employee}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                  />
                </div>

                <div className="add-contract-form-group">
                  <label htmlFor="fileContract">File Contract:</label>
                  <input
                    type="file"
                    id="fileContract"
                    name="fileContract"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="add-contract-form-group">
                  <label htmlFor="companyMaintenance">
                    Company Maintenance:
                  </label>
                  <input
                    type="text"
                    id="companyMaintenance"
                    name="companyMaintenance"
                    value={contractData.companyMaintenance}
                    onChange={handleChange}
                    placeholder="Enter company maintenance"
                  />
                </div>

                <div className="add-contract-form-group">
                  <label htmlFor="issuedBy">Issued By:</label>
                  <input
                    type="text"
                    id="issuedBy"
                    name="issuedBy"
                    value={contractData.issuedBy}
                    onChange={handleChange}
                    placeholder="Enter issued by"
                  />
                </div>

                <div className="add-contract-form-group">
                  <label htmlFor="issuedDate">Issued Date:</label>
                  <input
                    type="date"
                    id="issuedDate"
                    name="issuedDate"
                    value={contractData.issuedDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="add-contract-form-group">
                  <label htmlFor="endDate">End Date:</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={contractData.endDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="add-contract-button-group">
                  <button
                    type="button"
                    className="add-contract-btn-return"
                    onClick={() => navigate("/list-employee-contract")}
                  >
                    Return
                  </button>
                  <button type="submit" className="add-contract-btn-confirm">
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

export default AddContract;

import AddEmployee from "../pages/admin/employee/AddEmployee";
import EditEmployee from "../pages/admin/employee/EditEmployee";
import ListEmployee from "../pages/admin/employee/ListEmployee";
import Dayoff from "../pages/admin/dayoff/Dayoff";
import Addcontract from "../pages/customer/contract/AddContract";
import ContractDetail from "../pages/customer/contract/ContractDetail";
import Editcontract from "../pages/customer/contract/EditContract";
import ViewContracts from "../pages/customer/contract/ViewContracts";
import ViewHolidays from "../pages/customer/holiday/ViewHolidays";
import Home from "../pages/home/Home";
import Candidates from "../pages/admin/candidates/Candidates";
import ListEmployeeContract from "../pages/admin/Contract/ListEmployeeContract";
import EditContract from "../pages/admin/Contract/EditContract";
import AddContract from "../pages/admin/Contract/AddContract";
import RentAnApartment from "../pages/customer/rentanapartment/RentAnApartment";
import CustomerHome from "../pages/customer/customerhome/CustomerHome";
import ViewFinesList from "../pages/customer/fines/ViewFinesList";
import FineDetail from "../pages/customer/fines/FineDetail";
import ListEquipment from "../pages/staff/equipment/ListEquipment";
import AddEquipment from "../pages/staff/equipment/AddEquipment";
import EditEquipment from "../pages/staff/equipment/EditEquipment";
import ListApartment from "../pages/staff/apartment/ListApartment";
import AddMaintenanceRoom from "../pages/staff/apartment/AddMaintenanceRoom";
import EditMaintenanceRoom from "../pages/staff/apartment/EditMaintenanceRoom";
import ListService from "../pages/staff/services/ListService";
import AddService from "../pages/staff/services/AddService";
import EditService from "../pages/staff/services/EditService";
import Profile from "../pages/customer/EditProfile/Profile";
import UtilityList from "../pages/customer/RegisterUtilities/UtilityList";
import ComplaintList from "../pages/customer/RequestMaintenance/ComplaintList";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AcceptMaintenanceRequest from "../pages/staff/schedule/AcceptMaintenanceRequest";
import ListMaintenance from "../pages/staff/schedule/ListMaintenance";
import ViewSchedule from "../pages/staff/schedule/ViewSchedule";
import AddCandidates from "../pages/admin/candidates/AddCandidates";

export const authenticateRoutes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
];

export const adminRoutes = [
  { path: "/", component: Home },
  { path: "/employee", component: ListEmployee },
  { path: "/employee/add", component: AddEmployee },
  { path: "/employee/edit/:id", component: EditEmployee },
  { path: "/dayoff", component: Dayoff },
  { path: "/candidates", component: Candidates },
  { path: "/add-candidates", component: AddCandidates },
  { path: "/list-employee-contract", component: ListEmployeeContract },
  { path: "/edit-contract/:id", component: EditContract },
  { path: "/add-contract", component: AddContract },
];

export const customerRoutes = [
  { path: "/", component: CustomerHome },
  { path: "/contract", component: ViewContracts },
  { path: "/contract/detail/:id", component: ContractDetail },
  { path: "/contract/add", component: Addcontract },
  { path: "/contract/edit/:id", component: Editcontract },
  { path: "/holiday", component: ViewHolidays },
  { path: "/rent-anapartment", component: RentAnApartment },
  { path: "/view-fines-list", component: ViewFinesList },
  { path: "/fine-detail/:id", component: FineDetail },
  { path: "/edit-profile", component: Profile },
  { path: "/registerUtil", component: UtilityList },
  { path: "/complaint-list", component: ComplaintList },
];

export const staffRoutes = [
  { path: "/", component: Home },
  { path: "/schedule", component: ListMaintenance },
  { path: "/schedule/view", component: ViewSchedule },
  { path: "/schedule/:id", component: AcceptMaintenanceRequest },
  { path: "/staff/equipment", component: ListEquipment },
  { path: "/staff/equipment/add", component: AddEquipment },
  { path: "/staff/equipment/edit/:id", component: EditEquipment },
  { path: "/staff/apartment", component: ListApartment },
  { path: "/staff/apartment/add", component: AddMaintenanceRoom },
  { path: "/staff/apartment/edit/:id", component: EditMaintenanceRoom },
  { path: "/staff/services", component: ListService },
  { path: "/staff/services/add", component: AddService },
  { path: "/staff/services/edit/:id", component: EditService },
];

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeReg from "./pages/employeeReg.jsx";
import EmployeeUpdt from "./pages/employeeUpdate.jsx";
import ListEmployee from "./pages/listEmployee.jsx";
import BillItem from "./pages/Bill/billItem.jsx";
import BillItemUpdate from "./pages/Bill/updateBillItem.jsx";
import Bill from "./pages/Bill/bill.jsx";
import Payment from "./pages/Payment/payment.jsx";
import Events from "./pages/Child/Events";
import MedicineDetails from "./pages/Child/MedicineDetails";
import MedicineReport from "./pages/Child/MedicineReport";
import TutionSchedule from "./pages/Child/TutionSchedule";
import AssignStaff from "./pages/Admin/AssignStaff";
import CreateEvents from "./pages/Admin/Events";
import AssignedKids from "./pages/Staff/AssignedKids";
import MedicalStatus from "./pages/Staff/MedicalStatus";
import ScheduleStatus from "./pages/Staff/ScheduleStatus";
import { Login, Register, Profile, Babysitters } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeReg />} />
        <Route path="/update/:id" element={<EmployeeUpdt />} />
        <Route path="/list" element={<ListEmployee />} />
        <Route path="/update" element={<EmployeeUpdt />} />
        <Route path="/bill" element={<BillItem />} />
        <Route path="/bill-item-update/:id" element={<BillItemUpdate />} />
        <Route path="/bill-cal" element={<Bill />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kidos" element={<ChildProfile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/medicalDetails" element={<MedicineDetails />} />
        <Route path="/medicalReport" element={<MedicineReport />} />
        <Route path="/tution" element={<TutionSchedule />} />
        <Route path="/assignStaff" element={<AssignStaff />} />
        <Route path="/createEvents" element={<CreateEvents />} />
        <Route path="/assignedKids" element={<AssignedKids />} />
        <Route path="/addMedical" element={<MedicalStatus />} />
        <Route path="/addSchedule" element={<ScheduleStatus />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/babysitters" element={<Babysitters />} />
      </Routes>
    </Router>
  );
}
export default App;

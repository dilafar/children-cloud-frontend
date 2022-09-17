import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeReg from "./pages/employeeReg.jsx";
import EmployeeUpdt from "./pages/employeeUpdate.jsx";
import ListEmployee from "./pages/listEmployee.jsx";
import BillItem from "./pages/Bill/billItem.jsx";
import BillItemUpdate from "./pages/Bill/updateBillItem.jsx";
import Bill from "./pages/Bill/bill.jsx";
import Payment from "./pages/Payment/payment.jsx";

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
      </Routes>
    </Router>
  );
}
export default App;

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./component/dashboard";
import NotFound from "./component/notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/Registration" element={<Registration />} />
        <Route path="/Ordered" element={<Ordered />} />
        <Route path="/RegistAdmin" element={<RegistAdmin />} />
        <Route path="/Addtocart" element={<Addtocart />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Viewproduct" element={<Viewproduct />} /        
         */}
      </Routes>
    </>
  );
}

export default App;

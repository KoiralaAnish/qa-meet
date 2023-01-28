import { Routes, Route } from "react-router-dom";
import Login  from "./pages/Login" ;
import Homepage from "./pages/Homepage";
const MainRoutes= () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </div>
    );
  };
  
  export default MainRoutes;
  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { User, GeneralUser, CorporateUser, TrafficAuthority, Admin } from "./components/index";
import { Home } from "./pages/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<User/>}>
         {/* Trang của người dùng profile*/}
        </Route>
        <Route element={<GeneralUser/>}>
         {/* Trang của người dùng bình thường*/}
        </Route>
        <Route element={<CorporateUser/>}>
         {/* Trang của người dùng doanh nghiệp */}
        </Route>
        <Route element={<TrafficAuthority/>}>
         {/* Trang của bộ giao thông */}
        </Route>
        <Route element={<Admin/>}>
         {/* Trang của admin */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
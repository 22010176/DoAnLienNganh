import { BrowserRouter, Route, Routes } from 'react-router'

import ChiTietLopPage from './Pages/ChiTietLopPage'
import DSLopChoDuyetPage from './Pages/DSLopChoDuyetPage'
import LopHocPage from './Pages/LopHocPage'
import MonHocPage from './Pages/MonHocPage'
import OnlineExamLogin from './Pages/OnlineExamLogin'
import AuthLayout from './Layout/AuthLayout'
import OnlineExamRegister from './Pages/OnlineExamRegister'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lophoc" element={<LopHocPage />} />
        <Route path="/chitietlophoc" element={<ChiTietLopPage />} />
        <Route path="/dslophocduyet" element={<DSLopChoDuyetPage />} />
        <Route path="/monhoc" element={<MonHocPage />} />

        {/* Route for Online Exam Login */}

        <Route element={<AuthLayout />}>
          <Route path="/dang-nhap" element={<OnlineExamLogin />} />
          <Route path="/dang-ky" element={<OnlineExamRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

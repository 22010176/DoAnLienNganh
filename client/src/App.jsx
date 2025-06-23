import { BrowserRouter, Route, Routes } from 'react-router'

import ChiTietLopPage from './Pages/ChiTietLopPage'
import DSLopChoDuyetPage from './Pages/DSLopChoDuyetPage'
import LopHocPage from './Pages/LopHocPage'
import MonHocPage from './Pages/MonHocPage'
import OnlineExamLogin from './Pages/OnlineExamLogin'
import AuthLayout from './Layout/AuthLayout'
import OnlineExamRegister from './Pages/OnlineExamRegister'
import ChiTietMonPage from './Pages/ChiTietMonPage'
import ChiTietBoQS from './Pages/ChiTietBoQS'
import { PageContextProvider } from './Components/PageContext'

function App() {

  return (
    <PageContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/lophoc" element={<LopHocPage />} />
          <Route path="/chitietlophoc" element={<ChiTietLopPage />} />
          <Route path="/dslophocduyet" element={<DSLopChoDuyetPage />} />
          <Route path="/monhoc" element={<MonHocPage />} />
          <Route path="/chitietmonhoc" element={<ChiTietMonPage />} />
          <Route path="/chitietbocauhoi" element={<ChiTietBoQS />} />

          {/* Route for Online Exam Login */}

          <Route element={<AuthLayout />}>
            <Route path="/dang-nhap" element={<OnlineExamLogin />} />
            <Route path="/dang-ky" element={<OnlineExamRegister />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageContextProvider>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router'

import ChiTietLopPage from './Pages/ChiTietLopPage'
import DSLopChoDuyetPage from './Pages/DSLopChoDuyetPage'
import LopHocPage from './Pages/LopHocPage'
import MonHocPage from './Pages/MonHocPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lophoc" element={<LopHocPage />} />
        <Route path="/chitietlophoc" element={<ChiTietLopPage />} />
        <Route path="/dslophocduyet" element={<DSLopChoDuyetPage />} />
        <Route path="/monhoc" element={<MonHocPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

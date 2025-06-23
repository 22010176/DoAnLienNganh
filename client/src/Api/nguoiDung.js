import axios from "axios";

export async function DangKyNguoiDung({ loaiNguoiDung, hoTen, gioiTinh, email, soDienThoai, matKhau }) {
  const result = await axios.post(`${import.meta.env.VITE_AUTH_URL}/dang-ky`, {
    loaiNguoiDung, hoTen, gioiTinh, email, soDienThoai, matKhau,
  });
  return result.data;
}

export async function DangNhapNguoiDung({ loaiNguoiDung, email, soDienThoai, matKhau, }) {
  const result = await axios.post(`${import.meta.env.VITE_AUTH_URL}/dang-nhap`, {
    loaiNguoiDung, email, soDienThoai, matKhau,
  });
  return result.data;
}
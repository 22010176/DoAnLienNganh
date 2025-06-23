import { GoogleOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message, Radio, Select } from 'antd';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import axios from 'axios';

const { Option } = Select;
/*
{
  "": 2,
  "": "33333",
  "": 1,
  "": "2213123@gmail.com",
  "": "333312314",
  "": "123",
  "": "123"
}
   */
async function DangKyNguoiDung({ loaiNguoiDung, hoTen, gioiTinh, email, soDienThoai, matKhau, }) {
  const result = await axios.post(`${import.meta.env.VITE_AUTH_URL}/dang-ky`, {
    loaiNguoiDung, hoTen, gioiTinh, email, soDienThoai, matKhau,
  });
  return result;
}

const OnlineExamRegister = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await DangKyNguoiDung({
        loaiNguoiDung: values.loaiNguoiDung,
        hoTen: values.hoTen,
        gioiTinh: values.gioiTinh,
        email: values.email,
        soDienThoai: values.soDienThoai,
        matKhau: values.matKhau,
      });
      setLoading(false);
      message.success('Đăng ký thành công! Vui lòng đăng nhập để tiếp tục.');
      form.resetFields();
    } catch {
      setLoading(false);
      message.error('Đăng ký không thành công. Vui lòng thử lại sau!');
      return;
    }
  };

  return (
    <div className="mx-auto">
      <div className="text-center mb-2">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 text-nowrap">
          HỆ THỐNG THI TRẮC NGHIỆM TRỰC TUYẾN
        </h2>
      </div>

      <Form form={form} name="login" onFinish={onFinish} layout="vertical" >
        <Form.Item label="Chọn vai trò của bạn" name="loaiNguoiDung" rules={[
          { required: true, message: 'Vui lòng chọn vai trò!' }
        ]}>
          <Select placeholder="Chọn vai trò" suffixIcon={<UserOutlined />} options={[
            { value: 0, label: 'Học sinh' },
            { value: 1, label: 'Giáo viên' },
            { value: 2, label: 'Quản trị viên' }]} />
        </Form.Item>

        <Form.Item label="Họ và tên" name="hoTen"
          rules={[
            { required: true, message: 'Vui lòng nhập họ và tên!' },
            { min: 3, message: 'Họ và tên phải có ít nhất 3 ký tự!' }
          ]}>
          <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Nhập họ và tên của bạn" />
        </Form.Item>
        <Form.Item label="Giới tính" name="gioiTinh"
          rules={[
            { required: true, message: 'Vui lòng chọn giới tính!' }
          ]}>
          <Radio.Group placeholder="Chọn giới tính" suffixIcon={<UserOutlined />}
            options={[
              { value: 0, label: 'Nam' },
              { value: 1, label: 'Nữ' },
              { value: 2, label: 'Khác' }]} />
        </Form.Item>

        <Form.Item label="Email" name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Email không hợp lệ!' }
          ]}>
          <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Nhập email của bạn" />
        </Form.Item>

        <Form.Item label="Số điện thoại" name="soDienThoai"
          rules={[
            { required: true, message: 'Vui lòng nhập số điện thoại!' },
            { pattern: /^\+?[0-9]{1,4}?[-. (]?[0-9]{2,4}?[-. )]?[0-9]{3,4}?[-. ]?[0-9]{3,4}$/, message: 'Số điện thoại không hợp lệ!' }
          ]}>
          <Input prefix={<PhoneOutlined className="text-gray-400" />} placeholder="Nhập số điện thoại của bạn" />
        </Form.Item>

        <Form.Item label="Mật khẩu" name="matKhau"
          rules={[
            { required: true, message: 'Vui lòng nhập mật khẩu!' }
          ]}>
          <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Nhập mật khẩu" />
        </Form.Item>

        <Form.Item label="Xác nhận mật khẩu" name="confirmMatKhau" rules={[
          { required: true, message: 'Vui lòng nhập mật khẩu!' },
          ({ getFieldValue }) => ({
            warningOnly: true,
            validator(_, value) {
              if (!value || getFieldValue('matKhau') === value) return Promise.resolve();
              return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
            },
          }),
        ]}>
          <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Nhập mật khẩu" />
        </Form.Item>

        <div className="flex items-center justify-between mb-5">
          <Checkbox checked={rememberPassword} onChange={(e) => setRememberPassword(e.target.checked)}>
            Nhớ mật khẩu
          </Checkbox>
          <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
            Bạn quên mật khẩu?
          </Link>
        </div>

        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit" className="w-full border-0 text-lg font-semibold rounded-lg">
            Đăng ký
          </Button>
        </Form.Item>

        <div className="text-left mb-2">
          <Link to="/dang-nhap" className='font-semibold'>
            <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
            Quay lại đăng nhập
          </Link>
        </div>

        <Button className="w-full border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 text-lg font-medium rounded-lg flex items-center justify-center" icon={<GoogleOutlined />}>
          Tiếp tục với Google
        </Button>
      </Form>
    </div>
  );
};

export default OnlineExamRegister;
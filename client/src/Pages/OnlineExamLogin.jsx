import { GoogleOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router';

const { Option } = Select;

const OnlineExamLogin = () => {
  const [form] = Form.useForm();
  const [rememberPassword, setRememberPassword] = useState(false);

  const onFinish = (values) => {
    console.log('Login form values:', values);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-2">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 text-nowrap">
          HỆ THỐNG THI TRẮC NGHIỆM TRỰC TUYẾN
        </h2>
      </div>

      <Form form={form} className="space-y-2" name="login" onFinish={onFinish} layout="vertical" >
        <Form.Item label="Chọn vai trò của bạn" name="role" rules={[{ required: true, message: 'Vui lòng chọn vai trò!' }]}>
          <Select placeholder="Chọn vai trò" suffixIcon={<UserOutlined />}
            options={[
              { value: 'student', label: 'Học sinh' },
              { value: 'teacher', label: 'Giáo viên' },
              { value: 'admin', label: 'Quản trí viên' }]} />
        </Form.Item>

        <Form.Item label="SĐT hoặc Gmail đăng nhập" name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Email không hợp lệ!' }
          ]}>
          <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Nhập email của bạn" />
        </Form.Item>

        <Form.Item label="Mật khẩu" name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
          <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Nhập mật khẩu" />
        </Form.Item>

        <div className="flex items-center justify-between mb-6">
          <Checkbox checked={rememberPassword} onChange={(e) => setRememberPassword(e.target.checked)}>
            Nhớ mật khẩu
          </Checkbox>
          <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
            Bạn quên mật khẩu?
          </Link>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full border-0 text-lg font-semibold rounded-lg">
            Đăng nhập
          </Button>
        </Form.Item>

        <div className="text-center">
          <span className="text-gray-500">Hoặc</span>
        </div>

        <Button
          icon={<GoogleOutlined />}
          className="w-full border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 text-lg font-medium rounded-lg flex items-center justify-center">
          Tiếp tục với Google
        </Button>

        <div className="text-center mt-6">
          <span className="text-gray-600">Chưa có tài khoản? </span>
          <Link to="/dang-ky" className="text-blue-600 hover:text-blue-800 font-semibold">
            Đăng ký ngay
          </Link>
        </div>
      </Form>
    </div >
  );
};

export default OnlineExamLogin;
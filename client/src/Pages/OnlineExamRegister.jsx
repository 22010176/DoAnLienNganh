import React, { useState } from 'react';
import { Input, Button, Select, Checkbox, Form } from 'antd';
import { GoogleOutlined, UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router';

const { Option } = Select;

const OnlineExamLogin = () => {
  const [form] = Form.useForm();
  const [rememberPassword, setRememberPassword] = useState(false);

  const onFinish = (values) => {
    console.log('Login form values:', values);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-100 to-blue-100 items-center justify-center p-12">
          <div className="relative">
            <div className="relative w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-40 bg-slate-800 rounded-lg transform -rotate-12 shadow-xl">
                  <div className="w-full h-6 bg-slate-700 rounded-t-lg flex items-center px-3 space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="p-4 bg-white rounded-b-lg h-32">
                    <div className="grid grid-cols-3 gap-2 h-full">
                      <div className="bg-purple-100 rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      </div>
                      <div className="bg-blue-100 rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      </div>
                      <div className="bg-green-100 rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                      </div>
                      <div className="bg-yellow-100 rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      </div>
                      <div className="bg-pink-100 rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-pink-500 rounded"></div>
                      </div>
                      <div className="bg-indigo-100 rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-indigo-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8">
                  <div className="w-16 h-16 bg-orange-400 rounded-full"></div>
                  <div className="w-20 h-12 bg-orange-500 rounded-lg -mt-2"></div>
                </div>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 bg-purple-300 rounded-lg transform rotate-12"></div>
              <div className="absolute bottom-12 left-8 w-8 h-8 bg-blue-300 rounded-full"></div>
              <div className="absolute top-16 left-12 w-6 h-6 bg-yellow-300 rounded"></div>

              <div className="absolute -top-4 -left-8 w-12 h-8 bg-slate-800 rounded transform -rotate-12">
                <div className="w-3 h-3 bg-red-500 rounded-full absolute -top-1 -right-1"></div>
              </div>

              <div className="absolute bottom-8 right-8">
                <div className="w-12 h-2 bg-blue-600 rounded mb-1"></div>
                <div className="w-12 h-2 bg-purple-600 rounded mb-1"></div>
                <div className="w-12 h-2 bg-green-600 rounded"></div>
              </div>

              <div className="absolute top-4 right-16 w-10 h-10 bg-white rounded-full border-4 border-purple-300 flex items-center justify-center">
                <div className="w-1 h-3 bg-purple-600 rounded absolute"></div>
                <div className="w-1 h-2 bg-purple-400 rounded absolute transform rotate-90"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">
                HỆ THỐNG THI TRẮC NGHIỆM TRỰC TUYẾN
              </h2>
            </div>

            <Form form={form} className="space-y-4" name="login" onFinish={onFinish} layout="vertical" size="large">
              <Form.Item label="Chọn vai trò của bạn" name="role" rules={[{ required: true, message: 'Vui lòng chọn vai trò!' }]}>
                <Select placeholder="Chọn vai trò" suffixIcon={<UserOutlined />}>
                  <Option value="student">Học sinh</Option>
                  <Option value="teacher">Giáo viên</Option>
                  <Option value="admin">Quản trí viên</Option>
                </Select>
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
                <Button type="primary" htmlType="submit" className="w-full bg-blue-900 hover:bg-blue-800 border-0 text-lg font-semibold rounded-lg">
                  Đăng nhập
                </Button>
              </Form.Item>

              <div className="text-center">
                <span className="text-gray-500">Hoặc:</span>
              </div>

              <Button
                icon={<GoogleOutlined />}
                className="w-full h-12 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 text-lg font-medium rounded-lg flex items-center justify-center">
                Tiếp tục với Google
              </Button>

              <div className="text-center mt-6">
                <span className="text-gray-600">Chưa có tài khoản? </span>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Đăng ký ngay
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineExamLogin;
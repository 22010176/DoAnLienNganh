import { ConfigProvider, Select } from 'antd';
import { Outlet, useNavigate } from 'react-router';

import AuthPicture from '../Components/AuthPicture';

const { Option } = Select;

const AuthLayout = () => {
  const navigate = useNavigate();
  // Redirect to login if not authenticated
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/dang-nhap');
  } else navigate('/lophoc');
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left side - Illustration */}
        <AuthPicture />

        {/* Right side - Login form */}
        <div className="w-full lg:w-2/3 p-8">
          <ConfigProvider theme={{
            components: {
              Form: {
                // labelHeight: '10',
                verticalLabelPadding: '2px',
                itemMarginBottom: '10px'
              },
            },
          }}>

            <Outlet />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
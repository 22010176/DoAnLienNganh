import { Select } from 'antd';
import { Outlet } from 'react-router';

import AuthPicture from '../Components/AuthPicture';

const { Option } = Select;

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left side - Illustration */}
        <AuthPicture />

        {/* Right side - Login form */}
        <div className="w-full lg:w-2/3 p-8 lg:p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
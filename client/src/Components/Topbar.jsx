import { Layout, Card, Table, Input, Button, Space, Typography, Select, Modal, Popconfirm, Row, Col } from 'antd';
import { SearchOutlined, PlusOutlined, DeleteOutlined, ArrowRightOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

// TopBar Component - có thể tái sử dụng cho toàn hệ thống
const TopBar = ({ activeTab = 'LỚP HỌC' }) => {
  return (
    <Header style={{ background: '#7B4397', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, height: '64px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: 32, height: 32, background: 'white', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#7B4397' }}>📚</span>
          </div>
          <Text style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
            Online Exam
          </Text>
        </div>

        <div style={{ display: 'flex', gap: '30px' }}>
          <Button type="text" style={{ color: 'white', background: activeTab === 'LỚP HỌC' ? 'rgba(255,255,255,0.2)' : 'transparent', border: 'none' }}>
            LỚP HỌC
          </Button>
          <Button type="text" style={{ color: 'white', background: activeTab === 'MÔN HỌC' ? 'rgba(255,255,255,0.2)' : 'transparent' }}>
            MÔN HỌC
          </Button>
          <Button type="text" style={{ color: 'white', background: activeTab === 'THI ONLINE' ? 'rgba(255,255,255,0.2)' : 'transparent' }}>
            THI ONLINE
          </Button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <UserOutlined style={{ color: 'white', fontSize: '18px' }} />
        <BellOutlined style={{ color: 'white', fontSize: '18px' }} />
      </div>
    </Header>
  );
};

export default TopBar;
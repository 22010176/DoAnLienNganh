import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Layout, Space } from 'antd';
import { useLocation, useNavigate } from 'react-router';

const { Header, } = Layout;

function PageHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Header style={{ backgroundColor: '#7b4397', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '4px', marginRight: '24px' }}>
          <span className='text-white text-lg font-bold'>
            📚 Online Exam
          </span>
        </div>
        <Space size="large" wrap>
          <Button style={{
            color: 'white',
            backgroundColor: pathname === '/lophoc' ? 'rgba(255,255,255,0.15)' : 'transparent',
            border: pathname === '/lophoc' ? '1px solid rgba(255,255,255,0.3)' : 'none',
          }} onClick={() => navigate('/lophoc')}>
            LỚP HỌC
          </Button>
          <Button style={{
            color: 'white',
            backgroundColor: pathname === '/monhoc' ? 'rgba(255,255,255,0.15)' : 'transparent',
            border: pathname === '/monhoc' ? '1px solid rgba(255,255,255,0.3)' : 'none',
          }} onClick={() => navigate('/monhoc')}>
            MÔN HỌC
          </Button>
          <Button style={{
            color: 'white',
            backgroundColor: pathname === '/thionline' ? 'rgba(255,255,255,0.15)' : 'transparent',
            border: pathname === '/thionline' ? '1px solid rgba(255,255,255,0.3)' : 'none',
          }} onClick={() => navigate('/thionline')}>
            THI ONLINE
          </Button>
        </Space>
      </div>
      <Space>
        <Button type="text" icon={<UserOutlined />} style={{ color: 'white' }} />
        <Button type="text" icon={<BellOutlined />} style={{ color: 'white' }} />
      </Space>
    </Header>
  )
}

export default PageHeader;


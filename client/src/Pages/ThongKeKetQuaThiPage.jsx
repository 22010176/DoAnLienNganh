import React, { useState } from 'react';
import {
  Layout,
  Card,
  Button,
  Select,
  Typography,
  Space,
  Row,
  Col,
  Table,
  Avatar,
  Progress
} from 'antd';
import {
  BookOutlined,
  UserOutlined,
  BarChartOutlined,
  SettingOutlined,
  TrophyOutlined,
  BellOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

export default function ThongKeKetQuaThiPage() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { key: '1', icon: <BookOutlined />, label: 'Thi giữa kỳ môn' },
    { key: '2', icon: <BookOutlined />, label: 'Toán rời rạc' },
    { key: '3', icon: <BarChartOutlined />, label: 'Thống tin kỳ thi', selected: true },
    { key: '4', icon: <UserOutlined />, label: 'Danh sách thí sinh' },
    { key: '5', icon: <SettingOutlined />, label: 'Cấu hình câu hỏi' },
    { key: '6', icon: <BarChartOutlined />, label: 'Thống kê kết quả' }
  ];

  const chartData = [
    { name: '0-2', value: 0 },
    { name: '2-4', value: 2 },
    { name: '4-5', value: 5 },
    { name: '5-6.5', value: 8 },
    { name: '6.5-8', value: 7 },
    { name: '8-10', value: 12 }
  ];

  const topStudents = [
    {
      id: 1,
      name: 'Vũ Mai Quỳnh',
      class: 'Lớp: Toán rời rạc N03',
      score: 9.8,
      rank: 1,
      avatar: '🥇'
    },
    {
      id: 2,
      name: 'Lê Bình An',
      class: 'Lớp: Toán rời rạc N01',
      score: 9.4,
      rank: 2,
      avatar: '🥈'
    },
    {
      id: 3,
      name: 'Phạm Văn Mạnh',
      class: 'Lớp: Toán rời rạc N01',
      score: 9.4,
      rank: 3,
      avatar: '🥉'
    },
    {
      id: 4,
      name: 'Đỗ Thanh Lê',
      class: 'Lớp: Toán rời rạc N01',
      score: 9.2,
      rank: 4,
      avatar: '4'
    },
    {
      id: 5,
      name: 'Hà Văn Đạt',
      class: 'Lớp: Toán rời rạc N01',
      score: 9.0,
      rank: 5,
      avatar: '5'
    }
  ];

  const classTableColumns = [
    {
      title: 'Xếp hạng',
      dataIndex: 'rank',
      key: 'rank',
      width: 100,
      align: 'center'
    },
    {
      title: 'Mã lớp',
      dataIndex: 'classCode',
      key: 'classCode',
      width: 120
    },
    {
      title: 'Tên lớp',
      dataIndex: 'className',
      key: 'className'
    },
    {
      title: 'Sĩ số',
      dataIndex: 'studentCount',
      key: 'studentCount',
      width: 100,
      align: 'center'
    },
    {
      title: 'Điểm trung bình',
      dataIndex: 'avgScore',
      key: 'avgScore',
      width: 130,
      align: 'center'
    },
    {
      title: 'Điểm cao nhất',
      dataIndex: 'maxScore',
      key: 'maxScore',
      width: 130,
      align: 'center'
    },
    {
      title: 'Điểm thấp nhất',
      dataIndex: 'minScore',
      key: 'minScore',
      width: 130,
      align: 'center'
    }
  ];

  const classTableData = [
    {
      key: 1,
      rank: 1,
      classCode: 'LH003',
      className: 'Toán rời rạc N03',
      studentCount: 15,
      avgScore: 8.42,
      maxScore: 9.8,
      minScore: 6.2
    },
    {
      key: 2,
      rank: 2,
      classCode: 'LH001',
      className: 'Toán rời rạc N01',
      studentCount: 25,
      avgScore: 8.00,
      maxScore: 9.4,
      minScore: 6.4
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header style={{
        background: '#6B46C1',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOutlined style={{ color: 'white', fontSize: '20px' }} />
            <Text style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              Online Exam
            </Text>
          </div>
          <Space size="large">
            <Text style={{ color: 'white', cursor: 'pointer' }}>LỚP HỌC</Text>
            <Text style={{ color: 'white', cursor: 'pointer' }}>MÔN HỌC</Text>
            <Button
              size="small"
              style={{
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.3)',
                background: 'transparent',
                color: 'white'
              }}
            >
              KÌ THI
            </Button>
          </Space>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <QuestionCircleOutlined style={{ color: 'white', fontSize: '18px' }} />
          <BellOutlined style={{ color: 'white', fontSize: '18px' }} />
        </div>
      </Header>

      <Layout>
        {/* Sidebar */}
        <Sider
          width={280}
          style={{ background: '#f8f9fa' }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            setCollapsed(broken);
          }}
        >
          <div style={{ padding: '16px' }}>
            <div style={{ marginBottom: '16px' }}>
              <Select
                placeholder="Tất cả các lớp"
                style={{ width: '100%' }}
                defaultValue="all"
              >
                <Option value="all">Tất cả các lớp</Option>
                <Option value="n01">Toán rời rạc N01</Option>
                <Option value="n03">Toán rời rạc N03</Option>
              </Select>
            </div>
            {menuItems.map(item => (
              <div
                key={item.key}
                style={{
                  padding: '12px 16px',
                  marginBottom: '4px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: item.selected ? '#6B46C1' : 'transparent',
                  color: item.selected ? 'white' : '#666'
                }}
              >
                {item.icon}
                <Text style={{ color: 'inherit' }}>{item.label}</Text>
              </div>
            ))}
          </div>
        </Sider>

        {/* Main Content */}
        <Content style={{ padding: '24px', background: '#f0f2f5' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Stats Cards */}
            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
              <Col xs={24} sm={12} lg={6}>
                <Card style={{ background: '#1890ff', color: 'white', textAlign: 'center' }}>
                  <div>
                    <Text style={{ color: 'white', fontSize: '14px' }}>
                      Số học sinh dự thi
                    </Text>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>
                      120
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card style={{ background: '#fa8c16', color: 'white', textAlign: 'center' }}>
                  <div>
                    <Text style={{ color: 'white', fontSize: '14px' }}>
                      Số học sinh vắng mặt
                    </Text>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>
                      120
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card style={{ background: '#52c41a', color: 'white', textAlign: 'center' }}>
                  <div>
                    <Text style={{ color: 'white', fontSize: '14px' }}>
                      Điểm trung bình
                    </Text>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>
                      7.7/10
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card style={{ background: '#eb2f96', color: 'white', textAlign: 'center' }}>
                  <div>
                    <Text style={{ color: 'white', fontSize: '14px' }}>
                      Điểm cao nhất
                    </Text>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>
                      9.8
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
              {/* Top Students */}
              <Col xs={24} lg={12}>
                <Card
                  title={
                    <div style={{
                      background: '#fa8c16',
                      color: 'white',
                      padding: '8px 16px',
                      margin: '-24px -24px 16px -24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <TrophyOutlined />
                      Top 5 học sinh có điểm cao nhất
                    </div>
                  }
                  bodyStyle={{ padding: '16px 24px' }}
                >
                  <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    {topStudents.map(student => (
                      <Row key={student.id} align="middle" justify="space-between">
                        <Col flex="auto">
                          <Space>
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: student.rank <= 3 ? '#fff2e8' : '#f0f0f0',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '16px'
                            }}>
                              {student.avatar}
                            </div>
                            <div>
                              <div style={{ fontWeight: 'bold' }}>{student.name}</div>
                              <Text type="secondary" style={{ fontSize: '12px' }}>
                                {student.class}
                              </Text>
                            </div>
                          </Space>
                        </Col>
                        <Col>
                          <Text strong style={{ fontSize: '18px', color: '#fa8c16' }}>
                            {student.score}
                          </Text>
                        </Col>
                      </Row>
                    ))}
                  </Space>
                </Card>
              </Col>

              {/* Score Distribution Chart */}
              <Col xs={24} lg={12}>
                <Card
                  title={
                    <div style={{
                      background: '#1890ff',
                      color: 'white',
                      padding: '8px 16px',
                      margin: '-24px -24px 16px -24px'
                    }}>
                      Phổ Điểm Số
                    </div>
                  }
                  bodyStyle={{ padding: '16px 24px' }}
                >
                  <div style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#1890ff" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div style={{ marginTop: '8px' }}>
                    <Text type="secondary">Khoảng điểm: 5-6.5</Text><br />
                    <Text type="secondary">Số học sinh: 5</Text>
                  </div>
                </Card>
              </Col>
            </Row>

            {/* Class Ranking Table */}
            <Card
              title={
                <Text strong style={{ fontSize: '16px' }}>
                  Thứ hạng các lớp
                </Text>
              }
            >
              <Table
                columns={classTableColumns}
                dataSource={classTableData}
                pagination={false}
                scroll={{ x: 800 }}
                size="middle"
              />
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
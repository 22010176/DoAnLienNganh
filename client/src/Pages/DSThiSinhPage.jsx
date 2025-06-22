import React from 'react';
import { Layout, Input, Select, Button, Table, Row, Col, Avatar, Badge, Space, Typography, Menu, Card, Collapse, Tooltip } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  CalendarOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  BarChartOutlined,
  SearchOutlined,
  DeleteOutlined,
  EyeOutlined,
  RightOutlined,
  DownOutlined,
  ExportOutlined,
  MoreOutlined
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function DSThiSinhPage() {
  const menuItems = [
    {
      key: '1',
      icon: <CalendarOutlined />,
      label: 'Thông tin kỳ thi'
    },
    {
      key: '2',
      icon: <UsergroupAddOutlined />,
      label: 'Danh sách thí sinh',
      style: { backgroundColor: '#8B5A96', color: '#fff' }
    },
    {
      key: '3',
      icon: <SettingOutlined />,
      label: 'Cấu hình câu hỏi'
    },
    {
      key: '4',
      icon: <BarChartOutlined />,
      label: 'Thống kê kết quả'
    }
  ];

  const studentData = [
    { key: 1, stt: 1, name: 'An Bình', gender: 'Nam', birthday: '15/03/2002', phone: '0987654321', score: '-', time: '-', submit: '-' },
    { key: 2, stt: 2, name: 'Bạch Hương Giang', gender: 'Nữ', birthday: '21/08/2001', phone: '0978123456', score: '-', time: '-', submit: '-' },
    { key: 3, stt: 3, name: 'Bùi Minh Châu', gender: 'Nữ', birthday: '10/12/2002', phone: '0967778899', score: '-', time: '-', submit: '-' },
    { key: 4, stt: 4, name: 'Cao Đức Anh', gender: 'Nam', birthday: '09/08/2001', phone: '0912345678', score: '-', time: '-', submit: '-' },
    { key: 5, stt: 5, name: 'Chu Thanh Tùng', gender: 'Nam', birthday: '23/01/2003', phone: '0909123456', score: '-', time: '-', submit: '-' },
    { key: 6, stt: 6, name: 'Đặng Thị Linh', gender: 'Nữ', birthday: '30/04/2001', phone: '0981234567', score: '-', time: '-', submit: '-' },
    { key: 7, stt: 7, name: 'Đào Phương Uyên', gender: 'Nữ', birthday: '11/09/2002', phone: '0987654432', score: '-', time: '-', submit: '-' },
    { key: 8, stt: 8, name: 'Hà Hữu Nam', gender: 'Nam', birthday: '05/05/2002', phone: '0934567890', score: '-', time: '-', submit: '-' },
    { key: 9, stt: 9, name: 'Hà Mai Anh', gender: 'Nữ', birthday: '25/02/2001', phone: '0971234567', score: '-', time: '-', submit: '-' },
    { key: 10, stt: 10, name: 'Hoàng Đức Thịnh', gender: 'Nam', birthday: '17/07/2001', phone: '0923456789', score: '-', time: '-', submit: '-' },
    { key: 11, stt: 11, name: 'Hoàng Thị Ngọc', gender: 'Nữ', birthday: '12/12/2002', phone: '0919876543', score: '-', time: '-', submit: '-' },
    { key: 12, stt: 12, name: 'Lê Hồng Phúc', gender: 'Nam', birthday: '03/06/2003', phone: '0962345678', score: '-', time: '-', submit: '-' },
    { key: 13, stt: 13, name: 'Lê Thị Cẩm Tú', gender: 'Nữ', birthday: '27/10/2002', phone: '0938123456', score: '-', time: '-', submit: '-' },
    { key: 14, stt: 14, name: 'Lê Văn Duy', gender: 'Nam', birthday: '13/03/2001', phone: '0911222334', score: '-', time: '-', submit: '-' },
    { key: 15, stt: 15, name: 'Lương Tuấn Kiệt', gender: 'Nam', birthday: '28/11/2001', phone: '0977894561', score: '-', time: '-', submit: '-' }
  ];

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: 60,
      align: 'center'
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
      width: 180
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      width: 100,
      align: 'center'
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'birthday',
      key: 'birthday',
      width: 120,
      align: 'center'
    },
    {
      title: 'SĐT',
      dataIndex: 'phone',
      key: 'phone',
      width: 130
    },
    {
      title: 'Điểm',
      dataIndex: 'score',
      key: 'score',
      width: 80,
      align: 'center'
    },
    {
      title: 'Thời gian làm bài',
      dataIndex: 'time',
      key: 'time',
      width: 150,
      align: 'center'
    },
    {
      title: 'Nộp bài',
      dataIndex: 'submit',
      key: 'submit',
      width: 100,
      align: 'center'
    },
    {
      title: 'Xem',
      key: 'view',
      width: 80,
      align: 'center',
      render: () => (
        <Button
          type="text"
          icon={<EyeOutlined />}
          size="small"
          style={{ color: '#666' }}
        />
      )
    }
  ];

  const classData = [
    { name: 'Toán rời rạc N01', students: 25 },
    { name: 'Toán rời rạc N02', students: 20 },
    { name: 'Toán rời rạc N03', students: 15 },
    { name: 'Toán rời rạc N04', students: 20 },
    { name: 'Toán rời rạc N05', students: 25 }
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Layout>
        <Sider
          width={250}
          style={{ background: '#fff', padding: '24px 0' }}
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div style={{ padding: '0 16px', marginBottom: '16px' }}>
            <Title level={5} style={{ color: '#8B5A96', margin: 0 }}>
              Thi giữa kỳ môn
            </Title>
            <Text style={{ color: '#666', fontSize: '14px' }}>
              Toán rời rạc
            </Text>
          </div>

          <Menu
            mode="vertical"
            selectedKeys={['2']}
            style={{ border: 'none' }}
            items={menuItems}
          />
        </Sider>

        <Content style={{
          padding: '24px',
          background: '#fff',
          margin: '24px',
          borderRadius: '8px'
        }}>
          <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
            <Col xs={24} sm={16} md={18}>
              <Input
                placeholder="Tìm kiếm thí sinh"
                prefix={<SearchOutlined />}
                size="large"
              />
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Select
                placeholder="Trạng thái..."
                size="large"
                style={{ width: '100%' }}
                suffixIcon={<span style={{ color: '#bfbfbf' }}>▼</span>}
              >
                <Option value="all">Tất cả</Option>
                <Option value="completed">Đã dự thi</Option>
                <Option value="pending">Vắng mặt</Option>
              </Select>
            </Col>
          </Row>

          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Text>Tổng số lớp: <strong>5</strong></Text>
              <Text style={{ marginLeft: '24px' }}>Tổng số học sinh: <strong>105</strong></Text>
            </div>
            <div>
              <Button
                type="primary"
                icon={<ExportOutlined />}
                style={{ background: '#52c41a', borderColor: '#52c41a' }}
              >
                Xuất báo cáo
              </Button>
            </div>
          </div>

          <Collapse
            ghost
            expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <RightOutlined />}
            style={{ background: '#fff' }}
          >
            {classData.map((classItem, index) => (
              <Panel
                key={index}
                header={
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Text strong>{classItem.name}</Text>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <Space>
                        <UsergroupAddOutlined />
                        <Text>{classItem.students} học sinh</Text>
                      </Space>
                      <Button
                        type="text"
                        icon={<DeleteOutlined />}
                        size="small"
                        style={{ color: '#ff4d4f' }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </div>
                }
                style={{
                  marginBottom: '8px',
                  border: '1px solid #f0f0f0',
                  borderRadius: '6px'
                }}
              >
                {index === 0 && (
                  <Table
                    columns={columns}
                    dataSource={studentData}
                    pagination={false}
                    size="small"
                    style={{ marginTop: '16px' }}
                    scroll={{ x: 1000 }}
                  />
                )}
              </Panel>
            ))}
          </Collapse>
        </Content>
      </Layout>
    </Layout>
  );
}
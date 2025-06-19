import React, { Component } from 'react';
import { Layout, Table, Button, Input, Typography, Space, Popconfirm, message, Avatar } from 'antd';
import { SearchOutlined, UserOutlined, BellOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

class DSLopChoDuyetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      students: [
        { key: '1', stt: 1, name: 'Nguyễn Văn An', gender: 'Nam', birthDate: '04/07/2007', phone: '0912 345 678', email: 'tvhung@example.com' },
        { key: '2', stt: 2, name: 'Trần Thị Mai', gender: 'Nữ', birthDate: '15/04/2007', phone: '0987 654 321', email: 'lmhung@example.com' },
        { key: '3', stt: 3, name: 'Lê Minh Tuấn', gender: 'Nam', birthDate: '12/08/2007', phone: '0901 234 567', email: 'haxbach@example.com' },
        { key: '4', stt: 4, name: 'Phạm Thị Hương', gender: 'Nữ', birthDate: '27/12/2007', phone: '0934 567 890', email: 'ngcmai@example.com' },
        { key: '5', stt: 5, name: 'Đỗ Văn Bình', gender: 'Nam', birthDate: '09/01/2007', phone: '0945 678 901', email: 'phlinh@example.com' },
        { key: '6', stt: 6, name: 'Bùi Thị Lan', gender: 'Nữ', birthDate: '16/03/2007', phone: '0976 543 210', email: 'kphanh@example.com' },
        { key: '7', stt: 7, name: 'Hoàng Văn Nam', gender: 'Nam', birthDate: '02/09/2007', phone: '0888 999 000', email: 'ttdunga@example.com' }
      ]
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value });
  }

  handleApprove = (record) => {
    message.success(`Đã duyệt học sinh ${record.name}`);
  }

  handleReject = (record) => {
    message.success(`Đã từ chối học sinh ${record.name}`);
  }

  getFilteredStudents = () => {
    const { students, searchValue } = this.state;
    return students.filter(student =>
      student.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      student.phone.includes(searchValue) ||
      student.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  render() {
    const { searchValue } = this.state;
    const filteredStudents = this.getFilteredStudents();

    const columns = [
      { title: 'STT', dataIndex: 'stt', key: 'stt', width: 60, align: 'center' },
      { title: 'Họ và tên', dataIndex: 'name', key: 'name', width: 180 },
      { title: 'Giới tính', dataIndex: 'gender', key: 'gender', width: 100, align: 'center' },
      { title: 'Ngày sinh', dataIndex: 'birthDate', key: 'birthDate', width: 120, align: 'center' },
      { title: 'SĐT', dataIndex: 'phone', key: 'phone', width: 130 },
      {
        title: 'Email', dataIndex: 'email', key: 'email', width: 200, render: (email) => (
          <Text style={{ color: '#1890ff', textDecoration: 'underline' }}>
            {email}
          </Text>
        )
      },
      {
        title: 'Thao tác', key: 'action', width: 150, align: 'center', render: (_, record) => (
          <Space>
            <Button type="text" icon={<LikeOutlined />} size="small" style={{ color: '#1890ff' }} onClick={() => this.handleApprove(record)}>
              Duyệt
            </Button>
            <Button type="text" icon={<DislikeOutlined />} size="small" style={{ color: '#ff4d4f' }} onClick={() => this.handleReject(record)}>
              Không duyệt
            </Button>
          </Space>
        )
      }
    ];

    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <Layout style={{ height: '100vh', background: '#f0f2f5' }}>
          {/* Header */}
          <Header style={{ background: '#8B4B9C', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Avatar icon={<UserOutlined />} style={{ background: '#fff', color: '#8B4B9C' }} />
                <Text style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold' }}>
                  Online Exam
                </Text>
              </div>

              <div style={{ display: 'flex', gap: '24px', marginLeft: '40px' }}>
                <Button type="text" style={{ color: '#fff', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 16px' }}>
                  LỚP HỌC
                </Button>
                <Button type="text" style={{ color: '#fff' }}>MÔN HỌC</Button>
                <Button type="text" style={{ color: '#fff' }}>THI ONLINE</Button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Button type="text" icon={<BellOutlined />} style={{ color: '#fff' }} />
              <Avatar icon={<UserOutlined />} style={{ background: '#fff', color: '#8B4B9C' }} />
            </div>
          </Header>

          <Layout>
            {/* Sidebar */}
            <Sider
              width={280}
              style={{
                background: '#fff',
                borderRight: '1px solid #f0f0f0',
                height: 'calc(100vh - 64px)',
                overflow: 'auto'
              }}
            >
              <div style={{ padding: '16px' }}>
                <Title level={4} style={{ margin: '0 0 4px 0', color: '#333', fontSize: '18px', fontWeight: 'bold' }}>
                  Lớp Tiếng Nhật cơ bản
                </Title>
                <Text type="secondary" style={{ fontSize: '13px', display: 'block', marginBottom: '16px' }}>
                  Mã lớp: NHTA1
                </Text>

                <div style={{ marginBottom: '16px' }}>
                  <Text strong style={{ fontSize: '14px', color: '#333', display: 'block', marginBottom: '8px' }}>
                    Mô tả cho lớp học: ✏️
                  </Text>
                  <div style={{ background: '#f8f8f8', border: '1px solid #e8e8e8', borderRadius: '4px', padding: '12px', fontSize: '13px', color: '#666', lineHeight: '1.4', marginBottom: '12px' }}>
                    Lớp tiếng Nhật cơ bản cung cấp cho học viên những kiến thức nền tảng về ngôn ngữ và văn hóa Nhật Bản, bao gồm các...
                  </div>
                </div>

                <div>
                  <Button
                    type="text"
                    style={{
                      width: '100%', textAlign: 'left', padding: '12px 16px', height: 'auto', color: '#333', background: 'transparent',
                      borderRadius: '6px', marginBottom: '8px', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px'
                    }}
                  >
                    <UserOutlined />
                    Danh sách lớp
                  </Button>

                  <Button
                    type="text"
                    style={{ width: '100%', padding: '12px 16px', height: 'auto', color: '#fff', background: '#8B4B9C', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '6px' }}
                  >
                    ✓ Chờ duyệt ▶
                  </Button>
                </div>
              </div>
            </Sider>

            {/* Main Content */}
            <Content style={{ padding: '24px', background: '#fff', overflow: 'auto', height: 'calc(100vh - 64px)' }}>
              {/* Search Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                <Input
                  placeholder="Tìm kiếm học sinh"
                  prefix={<SearchOutlined />}
                  value={searchValue}
                  onChange={this.handleSearchChange}
                  style={{ width: '400px' }}
                />

                <Text type="secondary" style={{ fontSize: '13px' }}>
                  Yêu cầu vào lớp sẽ được hiển thị tại đây có thể sinh viên cần tự đặt tên lớp học từ mã lớp NHTA1
                </Text>
              </div>

              {/* Table */}
              <Table
                columns={columns}
                dataSource={filteredStudents}
                pagination={{
                  current: 1,
                  pageSize: 10,
                  total: filteredStudents.length,
                  showSizeChanger: false,
                  style: { textAlign: 'center' }
                }}
                bordered
                size="middle"
                style={{ background: '#fff' }}
              />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default DSLopChoDuyetPage;
import React, { useState } from 'react';
import { Layout, Table, Button, Input, Select, Modal, Typography, Space, Popconfirm, message, Avatar } from 'antd';
import { SearchOutlined, PlusOutlined, DeleteOutlined, ArrowRightOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const ChiTietLopPage = () => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [newStudentPhone, setNewStudentPhone] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  // Dữ liệu mẫu học sinh
  const [students, setStudents] = useState([
    { key: '1', stt: 1, name: 'Trịnh Văn Hùng', gender: 'Nam', birthDate: '04/07/2007', phone: '0912 345 678', email: 'tvhung@example.com' },
    { key: '2', stt: 2, name: 'Lê Minh Khang', gender: 'Nam', birthDate: '15/04/2007', phone: '0987 654 321', email: 'hung@example.com' },
    { key: '3', stt: 3, name: 'Hà Xuân Bách', gender: 'Nam', birthDate: '12/08/2007', phone: '0901 234 567', email: 'haxbach@example.com' },
    { key: '4', stt: 4, name: 'Lê Ngọc Mai', gender: 'Nữ', birthDate: '27/12/2007', phone: '0934 567 890', email: 'ngcmai@example.com' },
    { key: '5', stt: 5, name: 'Phạm Gia Linh', gender: 'Nữ', birthDate: '09/01/2007', phone: '0945 678 901', email: 'phlinh@example.com' },
    { key: '6', stt: 6, name: 'Khương Phương Anh', gender: 'Nữ', birthDate: '16/03/2007', phone: '0976 543 210', email: 'kphanh@example.com' },
    { key: '7', stt: 7, name: 'Trần Tuấn Dũng', gender: 'Nam', birthDate: '02/09/2007', phone: '0888 999 000', email: 'ttdunga@example.com' }
  ]);

  const handleDeleteStudent = (key) => {
    setStudents(students.filter(student => student.key !== key));
    message.success('Đã xóa học sinh thành công!');
  };

  const handleAddStudent = () => {
    if (!newStudentPhone.trim()) {
      message.error('Vui lòng nhập số điện thoại!');
      return;
    }

    // Logic thêm học sinh mới
    message.success('Đã thêm học sinh thành công!');
    setIsAddModalVisible(false);
    setNewStudentPhone('');
  };

  const columns = [
    { title: 'STT', dataIndex: 'stt', key: 'stt', width: 60, align: 'center' },
    { title: 'Họ và tên', dataIndex: 'name', key: 'name', width: 180 },
    { title: 'Giới tính', dataIndex: 'gender', key: 'gender', width: 100, align: 'center' },
    { title: 'Ngày sinh', dataIndex: 'birthDate', key: 'birthDate', width: 120, align: 'center' },
    { title: 'SĐT', dataIndex: 'phone', key: 'phone', width: 130 },
    {
      title: 'Email', dataIndex: 'email', key: 'email', width: 200,
      render: (email) => (
        <Text style={{ color: '#1890ff', textDecoration: 'underline' }}>
          {email}
        </Text>
      )
    },
    {
      title: 'Thao tác', key: 'action', width: 120, align: 'center', render: (_, record) => (
        <Space>
          <Popconfirm
            title="Xác nhận xóa"
            description="Bạn có chắc chắn muốn xóa học sinh này không?"
            onConfirm={() => handleDeleteStudent(record.key)}
            okText="Xóa"
            cancelText="Hủy"
            okButtonProps={{ danger: true }}
          >
            <Button
              type="text"
              icon={<DeleteOutlined />}
              danger
              size="small"
            />
          </Popconfirm>
          <Button
            type="text"
            icon={<ArrowRightOutlined />}
            size="small"
          />
        </Space>
      )
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      student.phone.includes(searchValue) ||
      student.email.toLowerCase().includes(searchValue.toLowerCase());
    const matchesGender = !selectedGender || student.gender === selectedGender;
    return matchesSearch && matchesGender;
  });

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
              <Button
                type="text"
                style={{
                  color: '#fff',
                  background: 'rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '20px',
                  padding: '4px 16px'
                }}
              >
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
            style={{ background: '#fff', borderRight: '1px solid #f0f0f0', height: 'calc(100vh - 64px)', overflow: 'auto' }}
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
                <Button type="text"
                  style={{
                    width: '100%', textAlign: 'left', padding: '12px 16px', height: 'auto', color: '#fff', background: '#8B4B9C', borderRadius: '6px', marginBottom: '8px',
                    fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                  <UserOutlined />
                  Danh sách lớp ▶
                </Button>

                <Button
                  type="text"
                  style={{ width: '100%', textAlign: 'left', padding: '12px 16px', height: 'auto', color: '#333', background: 'transparent', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  ✓ Chờ duyệt
                </Button>
              </div>
            </div>
          </Sider>

          {/* Main Content */}
          <Content style={{ padding: '24px', background: '#fff', overflow: 'auto', height: 'calc(100vh - 64px)' }}>
            {/* Search and Filter Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
                <Input
                  placeholder="Tìm kiếm học sinh"
                  prefix={<SearchOutlined />}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  style={{ width: '300px' }}
                />
                <Select
                  placeholder="Sắp xếp"
                  style={{ width: '150px' }}
                  value={selectedGender}
                  onChange={setSelectedGender}
                  allowClear
                >
                  <Option value="">Tất cả</Option>
                  <Option value="Nam">Nam</Option>
                  <Option value="Nữ">Nữ</Option>
                </Select>
              </div>

              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setIsAddModalVisible(true)}
                style={{
                  background: '#8B4B9C',
                  borderColor: '#8B4B9C'
                }}
              >
                Thêm học sinh
              </Button>
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

        {/* Add Student Modal */}
        <Modal
          title="THÊM HỌC SINH"
          open={isAddModalVisible}
          onCancel={() => {
            setIsAddModalVisible(false);
            setNewStudentPhone('');
          }}
          footer={[
            <Button key="cancel" onClick={() => setIsAddModalVisible(false)}>
              Hủy
            </Button>,
            <Button
              key="add"
              type="primary"
              onClick={handleAddStudent}
              style={{
                background: '#8B4B9C',
                borderColor: '#8B4B9C'
              }}
            >
              Thêm học sinh
            </Button>
          ]}
          width={400}
          centered
        >
          <div style={{ padding: '16px 0' }}>
            <Text>Nhập SĐT đăng nhập của học sinh<span style={{ color: 'red' }}>*</span></Text>
            <Input
              placeholder="Nhập số điện thoại..."
              value={newStudentPhone}
              onChange={(e) => setNewStudentPhone(e.target.value)}
              style={{ marginTop: '8px' }}
            />
          </div>
        </Modal>
      </Layout>
    </div>
  );
};

export default ChiTietLopPage;
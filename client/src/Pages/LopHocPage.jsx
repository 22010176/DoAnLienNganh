import React, { useState } from 'react';
import { Layout, Input, Button, Table, Select, Space, Typography, Tooltip, Modal, Form } from 'antd';
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, ArrowRightOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';


const { Header, Content } = Layout;
const { Option } = Select;
const { Title } = Typography;

const LopHocPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Set full width for the root container
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100%';
    document.body.style.height = '100vh';
    document.documentElement.style.width = '100%';
    document.documentElement.style.height = '100%';

    // Find and style the parent container
    const container = document.querySelector('.ant-layout');
    if (container && container.parentElement) {
      container.parentElement.style.width = '100%';
      container.parentElement.style.margin = '0';
      container.parentElement.style.padding = '0';
    }
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      console.log('Form values:', values);
      // Xử lý thêm lớp học ở đây
      form.resetFields();
      setIsModalVisible(false);
    }).catch(error => {
      console.log('Validation failed:', error);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const data = [
    { key: '1', stt: '1', maLop: 'NHTA1', tenLop: 'Tiếng Nhật cơ bản', soHocSinh: 45 },
    { key: '2', stt: '2', maLop: 'TNCH2', tenLop: 'Tiếng Nhật chuyên ngành', soHocSinh: 68 },
    { key: '3', stt: '3', maLop: 'TCNH1', tenLop: 'Tài chính ngân hàng', soHocSinh: 80 },
    { key: '4', stt: '4', maLop: 'TSQX2', tenLop: 'Tổ hợp xác suất', soHocSinh: 99 },
    { key: '5', stt: '5', maLop: 'TRR2', tenLop: 'Toán rời rạc', soHocSinh: 64 },
    { key: '6', stt: '6', maLop: 'ATCS2', tenLop: 'An toàn và bảo mật thông tin', soHocSinh: 89 },
    { key: '7', stt: '7', maLop: 'CSDL1', tenLop: 'Cơ sở dữ liệu', soHocSinh: 30 },
  ];

  const columns = [
    { title: 'STT', dataIndex: 'stt', key: 'stt', width: 60, align: 'center', },
    { title: 'Mã lớp', dataIndex: 'maLop', key: 'maLop', width: 100, align: 'center', },
    { title: 'Tên lớp', dataIndex: 'tenLop', key: 'tenLop', width: 300, },
    { title: 'Số học sinh', dataIndex: 'soHocSinh', key: 'soHocSinh', width: 120, align: 'center', },
    {
      title: 'Thao tác', key: 'action', width: 150, align: 'center', render: () => (
        <Space size="small">
          <Tooltip title="Chỉnh sửa">
            <Button type="text" icon={<EditOutlined />} style={{ color: '#1890ff' }} />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button type="text" icon={<DeleteOutlined />} style={{ color: '#ff4d4f' }} />
          </Tooltip>
          <Tooltip title="Xem chi tiết">
            <Button type="text" icon={<ArrowRightOutlined />} style={{ color: '#52c41a' }} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', margin: '0', padding: '0', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', width: '100%', height: '100%' }}>
        <Header style={{ backgroundColor: '#7b4397', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '4px', marginRight: '24px' }}>
              <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
                📚 Online Exam
              </span>
            </div>
            <Space size="large" wrap>
              <Button
                type="text"
                style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 16px' }}
              >
                LỚP HỌC
              </Button>
              <Button type="text" style={{ color: 'white' }}>MÔN HỌC</Button>
              <Button type="text" style={{ color: 'white' }}>THI ONLINE</Button>
            </Space>
          </div>
          <Space>
            <Button type="text" icon={<UserOutlined />} style={{ color: 'white' }} />
            <Button type="text" icon={<BellOutlined />} style={{ color: 'white' }} />
          </Space>
        </Header>

        <Content style={{ padding: '16px', backgroundColor: '#f5f5f5', width: '100%' }}>
          <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '100%', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <Space size="middle" wrap>
                <Input
                  placeholder="Tìm kiếm theo mã lớp hoặc tên lớp"
                  prefix={<SearchOutlined />}
                  style={{ width: '100%', minWidth: '250px', maxWidth: '350px' }}
                />
                <Select
                  placeholder="Sắp xếp..."
                  style={{ width: 120, minWidth: '100px' }}
                  suffixIcon={<span>▼</span>}
                >
                  <Option value="Asce">Từ A đến Z</Option>
                  <Option value="Desc">Từ Z đến A</Option>
                  <Option value="Newest">Mới nhất</Option>
                  <Option value="Oldest">Cũ nhất</Option>
                </Select>
              </Space>
              <Button type="primary" icon={<PlusOutlined />} onClick={showModal} style={{ backgroundColor: '#7b4397', borderColor: '#7b4397', borderRadius: '6px' }}>
                Thêm lớp
              </Button>
            </div>

            <Table columns={columns} dataSource={data} pagination={false} bordered={false} scroll={{ x: 800 }}
              style={{ backgroundColor: '#fafafa', borderRadius: '8px' }}
              rowClassName={() => 'table-row'}
            />
          </div>

          {/* Modal Thêm Lớp Học */}
          <Modal
            title={<div style={{ textAlign: 'center', fontSize: '18px', fontWeight: '600', color: '#333' }}> THÊM LỚP HỌC </div>}
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={600}
            centered
            okText="Tạo lớp"
            cancelText="Hủy"
            okButtonProps={{ style: { backgroundColor: '#7b4397', borderColor: '#7b4397', borderRadius: '6px', fontWeight: '500' } }}
            cancelButtonProps={{ style: { borderRadius: '6px', fontWeight: '500' } }}
          >
            <Form form={form} layout="vertical" style={{ marginTop: '20px' }}>
              <Form.Item
                label={<span style={{ fontSize: '14px', fontWeight: '500' }}>Tên lớp</span>}
                name="tenLop"
                rules={[
                  { required: true, message: 'Vui lòng nhập tên lớp học!' },
                  { min: 3, message: 'Tên lớp phải có ít nhất 3 ký tự!' }
                ]}
              >
                <Input
                  placeholder="Nhập tên lớp học...."
                  style={{
                    borderRadius: '6px',
                    height: '40px',
                    fontSize: '14px'
                  }}
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ fontSize: '14px', fontWeight: '500' }}>Mô tả</span>}
                name="moTa"
                rules={[
                  { required: true, message: 'Vui lòng nhập mô tả về lớp học!' },
                  { min: 10, message: 'Mô tả phải có ít nhất 10 ký tự!' }
                ]}
              >
                <Input.TextArea
                  placeholder="Nhập mô tả về lớp học....."
                  rows={4}
                  style={{
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </Form.Item>
            </Form>
          </Modal>
        </Content>

        <style jsx>{`
        * {
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          overflow-x: hidden;
        }
        
        #root, [data-reactroot] {
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        .table-row:hover {
          background-color: #f0f0f0 !important;
        }
        
        .ant-table-thead > tr > th {
          background-color: #e8e1f5 !important;
          color: #333 !important;
          font-weight: 600 !important;
          border-bottom: 1px solid #d9d9d9 !important;
        }
        
        .ant-table-tbody > tr > td {
          border-bottom: 1px solid #f0f0f0 !important;
        }
        
        .ant-btn-primary:hover {
          background-color: #6a3093 !important;
          border-color: #6a3093 !important;
        }
        
        @media (max-width: 768px) {
          .ant-layout-header {
            padding: 0 8px !important;
          }
          
          .ant-layout-content {
            padding: 8px !important;
          }
          
          .ant-space {
            flex-wrap: wrap !important;
          }
          
          .ant-input {
            min-width: 200px !important;
          }
        }
        
        @media (max-width: 480px) {
          .ant-layout-header {
            flex-direction: column !important;
            height: auto !important;
            padding: 12px 8px !important;
          }
          
          .ant-layout-header > div:first-child {
            margin-bottom: 8px;
          }
          
          .ant-btn {
            font-size: 12px !important;
            padding: 4px 8px !important;
          }
        }
      `}</style>
      </Layout>
    </div>
  );
};

export default LopHocPage;
import { ArrowRightOutlined, DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Layout, Modal, Select, Space, Table, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import PageHeader from '../Components/PageHeader';

const { Content } = Layout;

function MonHocPage() {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Set full width for the root container
  useEffect(() => {
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
    { title: 'Mã môn học', dataIndex: 'maLop', key: 'maLop', width: 100, align: 'center', },
    { title: 'Tên môn học', dataIndex: 'tenLop', key: 'tenLop', width: 300, },
    { title: 'Số lượng câu hỏi', dataIndex: 'soHocSinh', key: 'soHocSinh', width: 120, align: 'center', },
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
            <Button type="text" icon={<ArrowRightOutlined />} style={{ color: '#52c41a' }} onClick={() => navigate('/chitietlophoc')} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className='w-screen h-screen overflow-hidden' >
      <Layout className='size-full bg-[#f5f5f5]' >
        <PageHeader />

        <Content className='size-full bg-[#f5f5f5] p-[16px]' style={{ padding: '16px', backgroundColor: '#f5f5f5', width: '100%' }}>
          <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '100%', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <Space size="middle" wrap>
                <Input placeholder="Tìm kiếm theo mã lớp hoặc tên lớp" prefix={<SearchOutlined />} style={{ width: '100%', minWidth: '250px', maxWidth: '350px' }} />
                <Select className='w-40' placeholder="Sắp xếp theo" suffixIcon={<span>▼</span>}
                  options={[
                    { value: 'Asce', label: 'Từ A đến Z' },
                    { value: 'Desc', label: 'Từ Z đến A' },
                    { value: 'Newest', label: 'Mới nhất' },
                    { value: 'Oldest', label: 'Cũ nhất' }]} />
              </Space>
              <Button type="primary" icon={<PlusOutlined />} onClick={showModal} style={{ backgroundColor: '#7b4397', borderColor: '#7b4397', borderRadius: '6px' }}>
                Thêm môn học
              </Button>
            </div>

            <Table size='small' bordered={false} pagination={{ pageSize: 10 }} scroll={{ x: 800 }}
              columns={columns}
              dataSource={data} />
          </div>

          {/* Modal Thêm Môn Học */}
          <Modal width={600} centered okText="Tạo môn học" cancelText="Hủy"
            title={<h1 className='text-center text-xl font-bold' >THÊM MÔN HỌC</h1>}
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{ style: { backgroundColor: '#7b4397', borderColor: '#7b4397', borderRadius: '6px', fontWeight: '500' } }}
            cancelButtonProps={{ style: { borderRadius: '6px', fontWeight: '500' } }}>
            <Form form={form} layout="vertical" style={{ marginTop: '20px' }}>
              <Form.Item name="tenLop"
                label={<span style={{ fontSize: '14px', fontWeight: '500' }}>Tên lớp</span>}
                rules={[
                  { required: true, message: 'Vui lòng nhập tên lớp học!' },
                  { min: 3, message: 'Tên lớp phải có ít nhất 3 ký tự!' }
                ]}>
                <Input placeholder="Nhập tên lớp học...." style={{ borderRadius: '6px', height: '40px', fontSize: '14px' }} />
              </Form.Item>

              <Form.Item label={<span style={{ fontSize: '14px', fontWeight: '500' }}>Mô tả</span>} name="moTa"
                rules={[
                  { required: true, message: 'Vui lòng nhập mô tả về lớp học!' },
                  { min: 10, message: 'Mô tả phải có ít nhất 10 ký tự!' }
                ]}>
                <Input.TextArea placeholder="Nhập mô tả về lớp học....." rows={4} style={{ borderRadius: '6px', fontSize: '14px' }} />
              </Form.Item>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </div>
  );
};

export default MonHocPage;
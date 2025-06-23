import { ArrowRightOutlined, DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Layout, message, Modal, Select, Space, Table, Tooltip } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import PageHeader from '../Components/PageHeader';

const { Content } = Layout;

const LopHocUrl = import.meta.env.VITE_LOPHOC_URL;
async function GetLopHoc() {
  const result = await axios.get(LopHocUrl);
  return result.data;
}
async function AddLopHoc({ tenLopHoc, moTa }) {
  const result = await axios.post(LopHocUrl, { tenLopHoc, moTa });
  return result.data;
}
async function UpdateLopHoc({ id, tenLopHoc, moTa }) {
  const result = await axios.put(`${LopHocUrl}/${id}`, { tenLopHoc, moTa });
  return result.data;
}
async function DeleteLopHoc(maLopHoc) {
  const result = await axios.delete(`${LopHocUrl}/${maLopHoc}`);
  return result.data;
}

function InputForm({ form }) {
  return (
    <Form form={form} layout="vertical" style={{ marginTop: '20px' }}>
      <Form.Item name="id" hidden>
      </Form.Item>
      <Form.Item name="tenLopHoc"
        label={<span className='font-semibold'>Tên lớp</span>}
        rules={[
          { required: true, message: 'Vui lòng nhập tên lớp học!' },
          { min: 3, message: 'Tên lớp phải có ít nhất 3 ký tự!' }
        ]}>
        <Input placeholder="Nhập tên lớp học...." style={{ borderRadius: '6px', height: '40px', fontSize: '14px' }} />
      </Form.Item>

      <Form.Item name="moTa"
        label={<span className='font-semibold'>Mô tả</span>}
        rules={[
          { required: true, message: 'Vui lòng nhập mô tả về lớp học!' },
          { min: 10, message: 'Mô tả phải có ít nhất 10 ký tự!' }
        ]}>
        <Input.TextArea placeholder="Nhập mô tả về lớp học....." style={{ borderRadius: '6px', fontSize: '14px' }} />
      </Form.Item>
    </Form>
  )
}

function LopHocPage() {
  console.log('LopHocUrl:', LopHocUrl);

  const navigate = useNavigate();
  const [lopHocData, setLopHocData] = useState([]);

  const [createModel, setCreateModel] = useState(false);
  const [updateModel, setUpdateModel] = useState(false);

  const [createForm] = Form.useForm();
  const [updateForm] = Form.useForm();

  // Set full width for the root container
  useEffect(() => {
    GetLopHoc().then(data => {
      setLopHocData(data.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const handleAdd = () => createForm.validateFields().then(async values => {
    const result = await AddLopHoc(values);
    setLopHocData(result.data)

    createForm.resetFields();
    message.success('Thêm lớp học thành công!');
    setCreateModel(false);
  }).catch(error => {
    console.log('Validation failed:', error);
  });

  const handleUpdate = () => updateForm.validateFields().then(async values => {
    const result = await UpdateLopHoc(values);
    setLopHocData(result.data)

    updateForm.resetFields();
    setUpdateModel(false);
    message.success('Cập nhật lớp học thành công!');
  }).catch(error => {
    console.log('Validation failed:', error);
  });

  const columns = [
    { title: 'STT', width: 60, align: 'center', render: (text, record, index) => index + 1 },
    { title: 'Mã lớp', dataIndex: 'maLopHoc', key: 'maLopHoc', width: 100, align: 'center', },
    { title: 'Tên lớp', dataIndex: 'tenLopHoc', key: 'tenLopHoc', width: 300, },
    { title: 'Mô tả', dataIndex: 'moTa', key: 'moTa', width: 300, },
    { title: 'Số học sinh', dataIndex: 'soHocSinh', key: 'soHocSinh', width: 120, align: 'center', },
    {
      title: 'Thao tác', key: 'action', width: 150, align: 'center', render: (_, record) => (
        <Space size="small">
          {/* <Tooltip title="Chỉnh sửa"> */}
          <Button type="text" icon={<EditOutlined />} style={{ color: '#1890ff' }}
            onClick={() => {
              updateForm.setFieldsValue({
                id: record.id,
                tenLopHoc: record.tenLopHoc,
                moTa: record.moTa,
              });
              setUpdateModel(true);
            }}
          />
          {/* </Tooltip> */}
          {/* <Tooltip title="Xóa"> */}
          <Button type="text" icon={<DeleteOutlined />} style={{ color: '#ff4d4f' }}
            onClick={async () => {
              const result = await DeleteLopHoc(record.id);
              setLopHocData(result.data);
              message.success('Xóa lớp học thành công!');
            }} />
          {/* </Tooltip> */}
          {/* <Tooltip title="Xem chi tiết"> */}
          <Button type="text" icon={<ArrowRightOutlined />} style={{ color: '#52c41a' }} onClick={() => navigate('/chitietlophoc')} />
          {/* </Tooltip> */}
        </Space>
      ),
    },
  ];

  return (
    <>
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
          <Button type="primary" icon={<PlusOutlined />} style={{ backgroundColor: '#7b4397', borderColor: '#7b4397', borderRadius: '6px' }}
            onClick={() => setCreateModel(true)}>
            Thêm lớp
          </Button>
        </div>

        <Table size='small' bordered={false} pagination={{ pageSize: 10 }} scroll={{ x: 800 }}
          columns={columns}
          dataSource={lopHocData} />
      </div>

      {/* Modal Thêm Lớp Học */}
      <Modal width={600} centered okText="Tạo lớp" cancelText="Hủy"
        title={<h1 className='text-center text-xl font-bold' >THÊM LỚP HỌC</h1>}
        open={createModel}
        onOk={handleAdd}
        onCancel={() => {
          createForm.resetFields();
          setCreateModel(false);
        }}
        okButtonProps={{ style: { backgroundColor: '#7b4397', borderColor: '#7b4397', borderRadius: '6px', fontWeight: '500' } }}
        cancelButtonProps={{ style: { borderRadius: '6px', fontWeight: '500' } }}>
        <InputForm form={createForm} />
      </Modal>
      {/* Modal Cập Nhật Lớp Học */}
      <Modal width={600} centered okText="Lưu" cancelText="Hủy"
        title={<h1 className='text-center text-xl font-bold' >CẬP NHẬT LỚP HỌC</h1>}
        open={updateModel}
        onOk={handleUpdate}
        onCancel={() => {
          updateForm.resetFields();
          setUpdateModel(false);
        }}
        okButtonProps={{ style: { backgroundColor: '#7b4397', borderColor: '#7b4397', borderRadius: '6px', fontWeight: '500' } }}
        cancelButtonProps={{ style: { borderRadius: '6px', fontWeight: '500' } }}>
        <InputForm form={updateForm} />
      </Modal>
    </>
  );
};

export default LopHocPage;
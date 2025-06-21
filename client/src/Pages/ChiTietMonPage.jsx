import React from 'react';
import { Layout, Typography, Card, Button, Modal, Input, Space, Row, Col, Statistic, Tooltip } from 'antd';
import { PlusOutlined, FileExcelOutlined, EyeOutlined, EditOutlined, DeleteOutlined, FileTextOutlined, AimOutlined, CalendarOutlined, DownOutlined, CloseOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export default function ChiTietMonPage() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0, background: '#f5f5f5' }}>
      <Layout style={{ minHeight: '100vh', width: '100%' }}>

        <Content style={{ padding: '24px', background: '#f5f5f5', width: '100%' }}>
          <Card style={{
            background: '#c4b5fd',
            padding: '0px 24px',
            margin: 0,
            borderRadius: '8px',
            marginBottom: '24px'
          }}>
            <Text style={{ color: '#374151', fontSize: '16px' }}>Môn học Toán rời rạc</Text>
            {/* Muốn hiển thị theo kiểu Môn học > Toán rời rạc */}
          </Card>

          <div style={{ marginBottom: '24px' }}>
            <Text style={{ color: '#6b7280', fontSize: '14px' }}>Cập nhật lần cuối: 17/06/2025</Text>
          </div>

          <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
            <Col xs={24} sm={12} md={6}>
              <Card style={{ textAlign: 'center', borderRadius: '8px' }}>
                <Statistic
                  title="Tổng số câu hỏi"
                  value={196}
                  valueStyle={{ color: '#7c3aed', fontSize: '32px', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card style={{ textAlign: 'center', borderRadius: '8px' }}>
                <Statistic
                  title="Câu hỏi dễ"
                  value={72}
                  valueStyle={{ color: '#7c3aed', fontSize: '32px', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card style={{ textAlign: 'center', borderRadius: '8px' }}>
                <Statistic
                  title="Câu hỏi trung bình"
                  value={78}
                  valueStyle={{ color: '#7c3aed', fontSize: '32px', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card style={{ textAlign: 'center', borderRadius: '8px' }}>
                <Statistic
                  title="Câu hỏi khó"
                  value={46}
                  valueStyle={{ color: '#7c3aed', fontSize: '32px', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
          </Row>

          <Row justify="space-between" align="middle" style={{ marginBottom: '24px' }}>
            <Col>
              <Title level={4} style={{ margin: 0 }}>CÁC BỘ CÂU HỎI:</Title>
            </Col>
            <Col>
              <Space>
                <Button type="primary" icon={<PlusOutlined />} onClick={showModal} style={{
                  background: '#6429B5',
                  borderRadius: '6px',
                  borderColor: '#7c3aed'
                }}>
                  Thêm bộ câu hỏi
                </Button>
                <Button type="primary" icon={<FileExcelOutlined />} style={{
                  background: '#209536',
                  borderRadius: '6px',
                  borderColor: '#22c55e'
                }}>
                  Xuất danh sách
                </Button>
              </Space>
            </Col>
          </Row>

          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <Card style={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <Title level={5} style={{ margin: 0 }}>I. Lý thuyết tổ hợp</Title>
                  <Space>
                    <Tooltip title="Xem">
                      <EyeOutlined style={{ color: '#6b7280', fontSize: '16px', cursor: 'pointer' }} />
                    </Tooltip>
                    <Tooltip title="Chỉnh sửa">
                      <EditOutlined style={{ color: '#3b82f6', fontSize: '16px', cursor: 'pointer' }} />
                    </Tooltip>
                    <Tooltip title="Xóa">
                      <DeleteOutlined style={{ color: '#ef4444', fontSize: '16px', cursor: 'pointer' }} />
                    </Tooltip>
                  </Space>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <FileTextOutlined />
                  <Text>70 Câu hỏi</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <AimOutlined />
                  <Text>30 Dễ, 30 Trung bình, 10 Khó</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CalendarOutlined />
                  <Text>Cập nhật lần cuối: 21/06/2025</Text>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card style={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <Title level={5} style={{ margin: 0 }}>II. Lý thuyết đồ thị</Title>
                  <Space>
                    <Tooltip title="Xem">
                      <EyeOutlined style={{ color: '#6b7280', fontSize: '16px', cursor: 'pointer' }} />
                    </Tooltip>
                    <Tooltip title="Chỉnh sửa">
                      <EditOutlined style={{ color: '#3b82f6', fontSize: '16px', cursor: 'pointer' }} />
                    </Tooltip>
                    <Tooltip title="Xóa">
                      <DeleteOutlined style={{ color: '#ef4444', fontSize: '16px', cursor: 'pointer' }} />
                    </Tooltip>
                  </Space>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <FileTextOutlined />
                  <Text>86 Câu hỏi</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <AimOutlined />
                  <Text>34 Dễ, 38 Trung bình, 14 Khó</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CalendarOutlined />
                  <Text>Cập nhật lần cuối: 21/06/2025</Text>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card style={{ borderRadius: '8px', border: '1px solid #e5e7eb', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <Title level={5} style={{ margin: 0 }}>II. Suy luận toán học</Title>
                  <Space>
                    <Tooltip title="Xem">
                      <EyeOutlined style={{ color: '#6b7280', fontSize: '16px', cursor: 'pointer' }} />
                    </Tooltip>
                    <Tooltip title="Chỉnh sửa">
                      <EditOutlined style={{ color: '#3b82f6', fontSize: '16px', cursor: 'pointer' }} />
                    </Tooltip>
                    <Tooltip title="Xóa">
                      <DeleteOutlined style={{ color: '#ef4444', fontSize: '16px', cursor: 'pointer' }} />
                    </Tooltip>
                  </Space>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <FileTextOutlined />
                  <Text>40 Câu hỏi</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <AimOutlined />
                  <Text>20 Dễ, 10 Trung bình, 10 Khó</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CalendarOutlined />
                  <Text>Cập nhật lần cuối: 21/06/2025</Text>
                </div>
                <div style={{ position: 'absolute', bottom: '8px', right: '8px' }}>
                  <DownOutlined style={{ color: '#6b7280', fontSize: '12px' }} />
                </div>
              </Card>
            </Col>
          </Row>

          <Modal
            title={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>THÊM BỘ CÂU HỎI</span>
                <CloseOutlined onClick={handleCancel} style={{ cursor: 'pointer' }} />
              </div>
            }
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            closable={false}
            width={400}
            centered
          >
            <div style={{ padding: '20px 0' }}>
              <div style={{ marginBottom: '16px' }}>
                <Text style={{ fontSize: '14px', marginBottom: '8px', display: 'block' }}>
                  Tên bộ câu hỏi<span style={{ color: '#ef4444' }}>*</span>
                </Text>
                <Input
                  placeholder="Nhập tên bộ câu hỏi..."
                  style={{ borderRadius: '6px' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <Button onClick={handleCancel} style={{ borderRadius: '6px' }}>
                  Hủy
                </Button>
                <Button
                  type="primary"
                  onClick={handleOk}
                  style={{
                    background: '#7c3aed',
                    borderColor: '#7c3aed',
                    borderRadius: '6px'
                  }}
                >
                  Thêm
                </Button>
              </div>
            </div>
          </Modal>
        </Content>
      </Layout>
    </div>
  );
}
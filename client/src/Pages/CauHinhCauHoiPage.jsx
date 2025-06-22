import React, { useState } from 'react';
import {
  Layout,
  Card,
  Button,
  Select,
  InputNumber,
  Modal,
  Radio,
  Typography,
  Space,
  Row,
  Col,
  Badge,
  Avatar,
  Divider
} from 'antd';
import {
  BookOutlined,
  UserOutlined,
  BarChartOutlined,
  SettingOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  BellOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

export default function CauHinhCauHoiPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQuestionSet, setSelectedQuestionSet] = useState('');

  const menuItems = [
    { key: '1', icon: <BarChartOutlined />, label: 'Thống tin kỳ thi' },
    { key: '2', icon: <UserOutlined />, label: 'Danh sách thí sinh' },
    { key: '3', icon: <SettingOutlined />, label: 'Cấu hình câu hỏi' },
    { key: '4', icon: <BarChartOutlined />, label: 'Thống kê kết quả' }
  ];

  const questionSets = [
    {
      id: 1,
      title: 'I. Lý thuyết tổ hợp',
      easy: 15,
      medium: 10,
      hard: 5
    },
    {
      id: 2,
      title: 'II. Lý thuyết đồ thị',
      easy: 15,
      medium: 5,
      hard: 5
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
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
          <div style={{ padding: '0 16px', marginBottom: '16px' }}>
            <Title level={5} style={{ color: '#8B5A96', margin: 0 }}>
              Thi giữa kỳ môn
            </Title>
            <Text style={{ color: '#666', fontSize: '14px' }}>
              Toán rời rạc
            </Text>
          </div>
          <div style={{ padding: '16px' }}>
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
                  backgroundColor: item.key === '5' ? '#e8f4fd' : 'transparent',
                  color: item.key === '5' ? '#1890ff' : '#666'
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
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Question Configuration */}
            <Card style={{ marginBottom: '24px' }}>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div>
                  <Text strong>Chế độ xáo trộn câu hỏi</Text>
                  <Radio.Group defaultValue="random" style={{ marginLeft: '16px' }}>
                    <Radio value="random">Xáo ngẫu nhiên cho từng người</Radio>
                  </Radio.Group>
                  <div style={{ marginTop: '8px', marginLeft: '24px' }}>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      Mỗi học sinh sẽ nhận được các câu hỏi khác nhau
                    </Text>
                  </div>
                </div>

                <div>
                  <Radio.Group defaultValue="create">
                    <Radio value="create">Tạo đề thi thủ công</Radio>
                  </Radio.Group>
                  <div style={{ marginTop: '8px', marginLeft: '24px' }}>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      Tự tạo đề thi tinh chỉnh câu và có thể chỉnh sửa mọi đề thi giống nhau, chỉ dao thứ tự câu hỏi
                    </Text>
                  </div>
                </div>
              </Space>
            </Card>

            {/* Question Count Configuration */}
            <Card>
              <Row gutter={[16, 16]} align="middle" style={{ marginBottom: '24px' }}>
                <Col xs={24} sm={12} md={8}>
                  <Text strong>Tổng số lượng câu hỏi: 50</Text>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Space>
                    <Text>Số điểm mỗi câu:</Text>
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={2}
                      style={{ width: '80px' }}
                    />
                  </Space>
                </Col>
                <Col xs={24} md={8} style={{ textAlign: 'right' }}>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => setModalVisible(true)}
                  >
                    Thêm bộ đề
                  </Button>
                </Col>
              </Row>

              <Title level={5} style={{ marginBottom: '16px' }}>
                Các bộ đề đã chọn
              </Title>

              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {questionSets.map(set => (
                  <Card key={set.id} size="small" style={{ border: '1px solid #e8e8e8' }}>
                    <Row align="middle" justify="space-between">
                      <Col xs={24} lg={16}>
                        <Text strong style={{ fontSize: '16px' }}>
                          {set.title}
                        </Text>
                      </Col>
                      <Col xs={24} lg={8}>
                        <Row gutter={8} justify="end">
                          <Col>
                            <Badge
                              count={`Dễ: ${set.easy} Câu`}
                              style={{
                                backgroundColor: '#52c41a',
                                fontSize: '12px',
                                padding: '4px 8px',
                                borderRadius: '12px'
                              }}
                            />
                          </Col>
                          <Col>
                            <Badge
                              count={`Trung bình: ${set.medium} câu`}
                              style={{
                                backgroundColor: '#faad14',
                                fontSize: '12px',
                                padding: '4px 8px',
                                borderRadius: '12px'
                              }}
                            />
                          </Col>
                          <Col>
                            <Badge
                              count={`Khó: ${set.hard} câu`}
                              style={{
                                backgroundColor: '#ff4d4f',
                                fontSize: '12px',
                                padding: '4px 8px',
                                borderRadius: '12px'
                              }}
                            />
                          </Col>
                          <Col>
                            <Space>
                              <Button
                                type="text"
                                icon={<EditOutlined />}
                                size="small"
                                style={{ color: '#1890ff' }}
                              />
                              <Button
                                type="text"
                                icon={<DeleteOutlined />}
                                size="small"
                                style={{ color: '#ff4d4f' }}
                              />
                            </Space>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </Space>

              <div style={{ textAlign: 'right', marginTop: '24px' }}>
                <Button type="primary" size="large">
                  Lưu
                </Button>
              </div>
            </Card>
          </div>
        </Content>
      </Layout>

      {/* Add Question Set Modal */}
      <Modal
        title="THÊM BỘ CÂU HỎI"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)}>
            Hủy
          </Button>,
          <Button key="submit" type="primary">
            Thêm
          </Button>
        ]}
        width={500}
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div>
            <Text>Chọn bộ câu hỏi <Text style={{ color: 'red' }}>*</Text></Text>
            <Select
              placeholder="Chọn bộ câu hỏi"
              style={{ width: '100%', marginTop: '8px' }}
              value={selectedQuestionSet}
              onChange={setSelectedQuestionSet}
            >
              <Option value="set1">Bộ câu hỏi 1</Option>
              <Option value="set2">Bộ câu hỏi 2</Option>
            </Select>
          </div>

          <Row gutter={16}>
            <Col span={8}>
              <Text>Số câu dễ <Text style={{ color: 'red' }}>*</Text></Text>
              <InputNumber
                placeholder="/70"
                style={{ width: '100%', marginTop: '8px' }}
                min={0}
                max={70}
              />
            </Col>
            <Col span={8}>
              <Text>Số câu trung bình <Text style={{ color: 'red' }}>*</Text></Text>
              <InputNumber
                placeholder="/70"
                style={{ width: '100%', marginTop: '8px' }}
                min={0}
                max={70}
              />
            </Col>
            <Col span={8}>
              <Text>Số câu khó <Text style={{ color: 'red' }}>*</Text></Text>
              <InputNumber
                placeholder="/70"
                style={{ width: '100%', marginTop: '8px' }}
                min={0}
                max={70}
              />
            </Col>
          </Row>
        </Space>
      </Modal>
    </Layout>
  );
}
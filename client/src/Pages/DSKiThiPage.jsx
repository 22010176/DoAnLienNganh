import React from 'react';
import { Layout, Input, Select, Button, Card, Tag, Row, Col, Avatar, Badge, Space, Typography } from 'antd';
import { SearchOutlined, BellOutlined, UserOutlined, PlusOutlined, ClockCircleOutlined, CalendarOutlined, BookOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Option } = Select;
const { Title, Text } = Typography;

export default function DSKiThiPage() {
  const examData = [
    { id: 1, title: "Thi giữa kỳ môn Toán rời rạc", subject: "Toán rời rạc", duration: "90 phút", startDate: "24/06/2025 8:00", endDate: "24/06/2025 9:30", status: "Chưa diễn ra", statusColor: "green" },
    { id: 2, title: "Khảo sát Tiếng Nhật N3", subject: "Tiếng Nhật", duration: "90 phút", startDate: "22/08/2025 14:00", endDate: "22/08/2025 15:30", status: "Chưa diễn ra", statusColor: "green" },
    { id: 3, title: "Thi cuối kỳ môn Kỹ thuật số", subject: "Kỹ thuật số", duration: "60 phút", startDate: "16/06/2025 8:00", endDate: "24/06/2025 9:00", status: "Đã diễn ra", statusColor: "gold" },
    { id: 4, title: "Thi cuối kỳ Tiếng Anh chuyên ngành", subject: "Tiếng Anh chuyên ngành", duration: "90 phút", startDate: "15/06/2025 14:00", endDate: "15/06/2025 15:30", status: "Đã diễn ra", statusColor: "gold" }
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Content style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={10} md={18}>
            <Input
              placeholder="Tìm kiếm kì thi"
              prefix={<SearchOutlined />}
              size="large"
            />
          </Col>
          <Col xs={24} sm={8} md={3}>
            <Select
              placeholder="Sắp xếp..."
              size="large"
              style={{ width: '100%' }}
              suffixIcon={<SearchOutlined />}
            >
              <Option value="date">Theo ngày</Option>
              <Option value="subject">Theo môn học</Option>
            </Select>
          </Col>
          <Col xs={24} sm={6} md={3}>
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              style={{ background: '#8B5A96', borderColor: '#8B5A96' }}
            >
              Tạo kì thi
            </Button>
          </Col>
        </Row>

        <Row style={{ marginBottom: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
          <Col>
            <Title level={4} style={{ color: '#8B5A96', margin: 0 }}>
              DANH SÁCH KÌ THI
            </Title>
          </Col>

        </Row>

        <Row gutter={[16, 16]}>
          {examData.map((exam) => (
            <Col xs={24} sm={12} md={8} lg={8} xl={8} key={exam.id}>
              <Card
                hoverable
                style={{
                  borderRadius: '8px',
                  border: '1px solid #f0f0f0',
                  height: '100%'
                }}
                bodyStyle={{ padding: '16px' }}
              >
                <Row>
                  <Col span={18} >
                    <Title level={5} style={{ margin: 0, marginBottom: '8px', fontSize: '16px' }}>
                      {exam.title}
                    </Title>
                  </Col>
                  <Col span={6} >
                    <Tag color={exam.statusColor} style={{ fontSize: '11px' }}>
                      {exam.status}
                    </Tag>
                  </Col>
                </Row>

                <Row>
                  <Col span={16} >
                    <Space style={{ fontSize: '14px' }}>
                      <BookOutlined style={{ color: 'blue' }} />
                      {exam.subject}
                    </Space>
                  </Col>
                  <Col span={8} >
                    <Space size={4}>
                      <ClockCircleOutlined style={{ color: '#ff4d4f', fontSize: '12px' }} />
                      <Text style={{ fontSize: '12px', color: '#ff4d4f' }}>
                        {exam.duration}
                      </Text>
                    </Space>
                  </Col>
                </Row>
                <Row style={{ marginTop: '8px' }}>
                  <Col span={16} >
                    <Space size={4}>
                      <CalendarOutlined style={{ color: '#52c41a', fontSize: '12px' }} />
                      <Text style={{ fontSize: '12px' }}>{exam.startDate}</Text>
                    </Space>
                  </Col>
                  <Col span={8} >
                    <Space size={4}>
                      <CalendarOutlined style={{ color: '#722ed1', fontSize: '12px' }} />
                      <Text style={{ fontSize: '12px' }}>{exam.endDate}</Text>
                    </Space>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}
import React from 'react';
import { Layout, Input, Select, Button, Form, DatePicker, Row, Col, Avatar, Badge, Space, Typography, Menu, InputNumber } from 'antd';
import { CalendarOutlined, UsergroupAddOutlined, SettingOutlined, BarChartOutlined, CheckOutlined, SaveOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const { Title, Text } = Typography;

export default function ThongTinKiThiPage() {
  const menuItems = [
    {
      key: '1',
      icon: <CalendarOutlined />,
      label: 'Thông tin kỳ thi',
      style: { backgroundColor: '#8B5A96', color: '#fff' }
    },
    {
      key: '2',
      icon: <UsergroupAddOutlined />,
      label: 'Danh sách thí sinh'
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
            <Title level={5} style={{ margin: 0 }}>
              Thi giữa kỳ môn Toán rời rạc
            </Title>
          </div>

          <Menu
            mode="vertical"
            selectedKeys={['1']}
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
          <Form
            layout="vertical"
            style={{ maxWidth: '800px', marginLeft: '100px', marginTop: '24px' }}
          >
            <Row gutter={[24, 16]}>
              <Col span={24}>
                <Form.Item
                  label={<Text>Tên kì thi <span style={{ color: '#ff4d4f' }}>*</span></Text>}
                  required={false}
                >
                  <Input
                    placeholder="Thi giữa kỳ môn Toán rời rạc"
                    size="large"
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  label={<Text>Môn thi <span style={{ color: '#ff4d4f' }}>*</span></Text>}
                  required={false}
                >
                  <Select
                    placeholder="Toán rời rạc"
                    size="large"
                    style={{ width: '100%' }}
                    suffixIcon={<span style={{ color: '#bfbfbf' }}>▼</span>}
                  >
                    <Option value="toan-roi-rac">Toán rời rạc</Option>
                    <Option value="ky-thuat-so">Kỹ thuật số</Option>
                    <Option value="tieng-anh">Tiếng Anh</Option>
                    <Option value="tieng-nhat">Tiếng Nhật</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  label={<Text>Thời gian làm bài thi (phút) <span style={{ color: '#ff4d4f' }}>*</span></Text>}
                  required={false}
                >
                  <InputNumber
                    placeholder="90"
                    size="large"
                    style={{ width: '100%' }}
                    min={1}
                    max={300}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label={<Text>Thời gian bắt đầu <span style={{ color: '#ff4d4f' }}>*</span></Text>}
                  required={false}
                >
                  <DatePicker
                    showTime
                    placeholder="24/06/2025 8:00"
                    size="large"
                    style={{ width: '100%' }}
                    format="DD/MM/YYYY HH:mm"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label={<Text>Thời gian kết thúc <span style={{ color: '#ff4d4f' }}>*</span></Text>}
                  required={false}
                >
                  <DatePicker
                    showTime
                    disabled='true'
                    placeholder="24/06/2025 9:30"
                    size="large"
                    style={{ width: '100%' }}
                    format="DD/MM/YYYY HH:mm"
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'flex-end',
                  marginTop: '24px'
                }}>
                  <Button
                    icon={<CheckOutlined />}
                    style={{
                      borderColor: '#52c41a',
                      color: '#52c41a'
                    }}
                  >
                    Chỉnh sửa
                  </Button>
                  <Button
                    type='default'
                    icon={<SaveOutlined />}
                    style={{
                      borderColor: '#1890ff',
                      color: '#0747AE'
                    }}
                  >
                    Lưu
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Content>
      </Layout>
    </Layout >
  );
}
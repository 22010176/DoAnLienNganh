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
  Tag,
  Checkbox,
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

export default function TaoDeThiThuCongPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQuestionSet, setSelectedQuestionSet] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const menuItems = [
    { key: '1', icon: <BarChartOutlined />, label: 'Thống tin kỳ thi' },
    { key: '2', icon: <UserOutlined />, label: 'Danh sách thí sinh' },
    { key: '3', icon: <SettingOutlined />, label: 'Cấu hình câu hỏi' },
    { key: '4', icon: <BarChartOutlined />, label: 'Thống kê kết quả' }
  ];

  const questions = [
    {
      id: 1,
      category: 'I. Lý thuyết tổ hợp',
      difficulty: 'DỄ',
      difficultyColor: '#52c41a',
      status: 'CHỌN ĐÁP ÁN ĐÚNG NHẤT',
      question: 'Câu 1: Cho 2 tập A, B với |A|=13; B| |A∩B|=4 thì |A∪B| là:',
      options: [
        { key: 'A', text: '12' },
        { key: 'B', text: '32' },
        { key: 'C', text: '31', isCorrect: true },
        { key: 'D', text: '18' }
      ]
    },
    {
      id: 2,
      category: 'I. Lý thuyết tổ hợp',
      difficulty: 'TRUNG BÌNH',
      difficultyColor: '#faad14',
      status: 'CHỌN NHIỀU ĐÁP ÁN',
      question: 'Câu 2: Một nhóm có 5 bạn: An, Bình, Cường, Duyên và Hoa. Người ta cần chọn ra 2 bạn để tham gia một tổ chọn. Trong các phương án sau, đâu là phát biểu đúng về các cách chọn?',
      options: [
        { key: 'A', text: 'Nếu chọn An thì Bình là một cách, chọn Bình thì An là một cách khác.' },
        { key: 'B', text: 'Nếu chọn An thì Bình là một cách, chọn Bình thì An là một cách khác.' },
        { key: 'C', text: 'Việc chọn 2 bạn để tham gia tổ chọn là tổ hợp, không quan tâm đến thứ tự.', isCorrect: true },
        { key: 'D', text: 'Có 20 cách để chọn 2 bạn tự nhóm trên.' }
      ]
    }
  ];

  const modalQuestions = [
    {
      id: 1,
      category: 'I. Lý thuyết tổ hợp',
      difficulty: 'DỄ',
      difficultyColor: '#52c41a',
      status: 'CHỌN ĐÁP ÁN ĐÚNG NHẤT',
      question: 'Câu 1: Cho 2 tập A, B với |A|=13; B| |A∩B|=4 thì |A∪B| là:',
      options: [
        { key: 'A', text: '12' },
        { key: 'B', text: '32' },
        { key: 'C', text: '31', isCorrect: true },
        { key: 'D', text: '18' }
      ]
    },
    {
      id: 2,
      category: 'I. Lý thuyết tổ hợp',
      difficulty: 'TRUNG BÌNH',
      difficultyColor: '#faad14',
      status: 'CHỌN NHIỀU ĐÁP ÁN',
      question: 'Câu 2: Một nhóm có 5 bạn: An, Bình, Cường, Duyên và Hoa. Người ta cần chọn ra 2 bạn để tham gia một tổ chọn. Trong các phương án sau, đâu là phát biểu đúng về các cách chọn?',
      options: [
        { key: 'A', text: 'Nếu chọn An thì Bình là một cách, chọn Bình thì An là một cách khác.', isCorrect: true },
        { key: 'B', text: 'Nếu chọn An thì Bình là một cách, chọn Bình thì An là một cách khác.' },
        { key: 'C', text: 'Việc chọn 2 bạn để tham gia tổ chọn là tổ hợp, không quan tâm đến thứ tự.', isCorrect: true },
        { key: 'D', text: 'Có 20 cách để chọn 2 bạn tự nhóm trên.' }
      ]
    },
    {
      id: 3,
      category: 'I. Lý thuyết tổ hợp',
      difficulty: 'KHÓ',
      difficultyColor: '#ff4d4f',
      status: 'CHỌN ĐÁP ÁN ĐÚNG NHẤT',
      question: 'Câu 3: Chọn biết số phần tử của tập A∪B∪C nếu mỗi tập có 100 phần tử và có các tập hợp đôi một khác:',
      options: [
        { key: 'A', text: '12' },
        { key: 'B', text: '32' },
        { key: 'C', text: '31', isCorrect: true },
        { key: 'D', text: '18' }
      ]
    }
  ];

  const handleQuestionSelect = (questionId, checked) => {
    if (checked) {
      setSelectedQuestions([...selectedQuestions, questionId]);
    } else {
      setSelectedQuestions(selectedQuestions.filter(id => id !== questionId));
    }
  };

  const renderQuestion = (question, showCheckbox = false, checked = false) => (
    <Card
      key={question.id}
      style={{
        marginBottom: '16px',
        border: '2px solid #1890ff',
        borderRadius: '8px'
      }}
    >
      <Row align="top" gutter={[16, 16]}>
        {showCheckbox && (
          <Col flex="none">
            <Checkbox
              checked={checked}
              onChange={(e) => handleQuestionSelect(question.id, e.target.checked)}
              style={{ marginTop: '8px' }}
            />
          </Col>
        )}
        <Col flex="auto">
          <div style={{ marginBottom: '12px' }}>
            <Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
              {question.category}
            </Text>
          </div>

          <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
            <Col>
              <Space>
                <Tag color={question.difficultyColor} style={{ borderRadius: '12px' }}>
                  {question.difficulty}
                </Tag>
                <Tag color="purple" style={{ borderRadius: '12px' }}>
                  {question.status}
                </Tag>
              </Space>
            </Col>
            <Col>
              <Space>
                <Button
                  type="primary"
                  size="small"
                  icon={<EditOutlined />}
                  style={{ borderRadius: '6px' }}
                />
                <Button
                  danger
                  size="small"
                  icon={<DeleteOutlined />}
                  style={{ borderRadius: '6px' }}
                />
              </Space>
            </Col>
          </Row>

          <div style={{ marginBottom: '16px' }}>
            <Text strong>{question.question}</Text>
          </div>

          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            {question.options.map(option => (
              <div
                key={option.key}
                style={{
                  padding: '8px 12px',
                  backgroundColor: option.isCorrect ? '#f6ffed' : '#f5f5f5',
                  border: option.isCorrect ? '1px solid #b7eb8f' : '1px solid #d9d9d9',
                  borderRadius: '4px'
                }}
              >
                <Text>
                  <Text strong>{option.key}.</Text> {option.text}
                </Text>
              </div>
            ))}
          </Space>
        </Col>
      </Row>
    </Card>
  );

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
            {/* Question Configuration Header */}
            <Card style={{ marginBottom: '24px' }}>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div>
                  <Text strong>Chế độ xáo trộn câu hỏi</Text>
                </div>
                <div>
                  <Radio.Group defaultValue="random">
                    <Radio value="random">Xáo ngẫu nhiên cho từng người</Radio>
                  </Radio.Group>
                </div>
                <div>
                  <Radio.Group defaultValue="create">
                    <Radio value="create">Tạo đề thi thủ công</Radio>
                  </Radio.Group>
                </div>
              </Space>
            </Card>

            {/* Question List Header */}
            <Card style={{ marginBottom: '16px' }}>
              <Row gutter={[16, 16]} align="middle">
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
                    Thêm câu hỏi
                  </Button>
                </Col>
              </Row>
            </Card>

            {/* Questions List */}
            <div style={{ marginBottom: '24px' }}>
              {questions.map(question => renderQuestion(question))}
            </div>

            {/* Save Button */}
            <div style={{ textAlign: 'right' }}>
              <Button type="primary" size="large">
                Lưu
              </Button>
            </div>
          </div>
        </Content>
      </Layout>

      {/* Add Question Modal */}
      <Modal
        title="THÊM CÂU HỎI"
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
        width={800}
        style={{ top: 20 }}
        bodyStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
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
              <Option value="set1">Chọn bộ câu hỏi</Option>
              <Option value="set2">Bộ câu hỏi 2</Option>
            </Select>
          </div>

          <Divider />

          <div>
            {modalQuestions.map(question =>
              renderQuestion(
                question,
                true,
                selectedQuestions.includes(question.id)
              )
            )}
          </div>
        </Space>
      </Modal>
    </Layout>
  );
}
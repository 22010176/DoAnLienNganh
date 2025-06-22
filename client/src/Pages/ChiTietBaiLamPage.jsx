import React from 'react';
import {
  Modal,
  Card,
  Row,
  Col,
  Typography,
  Radio,
  Space,
  Button,
  Tag,
  Divider
} from 'antd';
import {
  CloseOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function ChiTietBaiLamPage() {
  const [visible, setVisible] = React.useState(true);

  const studentInfo = {
    name: 'Nguyễn Văn Bình',
    gender: 'Nam',
    birthday: '15/01/2004',
    phone: '0872837290T',
    answeredQuestions: '35/50',
    score: '7.0/10'
  };

  const questions = [
    {
      id: 1,
      question: 'Cho 2 tập A, B với |A|=13,|B|=19,|A∩B|=1, |A∪B| là:',
      options: [
        { key: 'A', text: '12', selected: false },
        { key: 'B', text: '31', selected: true, correct: true },
        { key: 'C', text: '32', selected: false },
        { key: 'D', text: '18', selected: false }
      ],
      difficulty: 'ĐỀ',
      status: 'CHỌN ĐÁP ÁN ĐÚNG NHẤT'
    },
    {
      id: 2,
      question: 'Một nhóm có 5 bạn: An, Bình, Cường, Duyên và Hoa. Người ta cần chọn ra 2 bạn để tham gia một trò chơi. Trong các phương án sau, đâu là phát biểu đúng về cách chọn?',
      options: [
        { key: 'A', text: 'Nếu chọn An rồi Bình là một cách, chọn Bình rồi An là một cách khác.', selected: true, correct: true },
        { key: 'B', text: 'Nếu chọn An rồi Bình là một cách, chọn Bình rồi An là một cách khác.', selected: false },
        { key: 'C', text: 'Việc chọn 2 bạn để tham gia trò chơi là tô hợp, không quan tâm đến thứ tự.', selected: true, correct: true },
        { key: 'D', text: 'Có 20 cách để chọn 2 bạn từ nhóm trên.', selected: false }
      ],
      difficulty: 'TRUNG BÌNH',
      status: 'CHỌN NHIỀU ĐÁP ÁN'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ marginBottom: '20px' }}
      >
        Mở Modal Xem Chi Tiết
      </Button>

      <Modal
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UserOutlined />
            <Text strong>XEM CHI TIẾT BÀI LÀM</Text>
          </div>
        }
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width="90vw"
        style={{ maxWidth: '1200px', top: '20px' }}
        bodyStyle={{ maxHeight: '80vh', overflowY: 'auto', padding: '16px' }}
        closeIcon={<CloseOutlined />}
      >
        <Card
          style={{
            background: '#e6f4ff',
            border: '1px solid #91caff',
            marginBottom: '16px'
          }}
          bodyStyle={{ padding: '16px' }}
        >
          <Row>
            <Col span={24}>
              <Space style={{ marginBottom: '8px' }}>
                <UserOutlined />
                <Text strong>Thông tin thí sinh</Text>
              </Space>
            </Col>
          </Row>

          <Row gutter={[24, 8]}>
            <Col xs={24} sm={12}>
              <Text>Họ và tên: <strong>{studentInfo.name}</strong></Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text>Giới tính: <strong>{studentInfo.gender}</strong></Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text>Ngày sinh: <strong>{studentInfo.birthday}</strong></Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text>SĐT: <strong>{studentInfo.phone}</strong></Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text>Số câu trả lời đúng: <strong>{studentInfo.answeredQuestions}</strong></Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text>Điểm bài thi: <strong>{studentInfo.score}</strong></Text>
            </Col>
          </Row>
        </Card>

        <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Text strong style={{ fontSize: '16px' }}>50 câu hỏi</Text>
          <Text style={{ fontSize: '16px' }}>0.2 điểm/ câu</Text>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {questions.map((q) => (
            <Card
              key={q.id}
              style={{
                border: '1px solid #d9d9d9',
                borderLeft: '4px solid #1890ff'
              }}
              bodyStyle={{ padding: '16px' }}
            >
              <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <Tag color={q.difficulty === 'ĐỀ' ? 'green' : 'gold'}>
                  {q.difficulty}
                </Tag>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Tag color="blue">{q.status}</Tag>
                  <Button type="text" icon={<EditOutlined />} size="small" />
                  <Button type="text" icon={<DeleteOutlined />} size="small" style={{ color: '#ff4d4f' }} />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <Text strong>Câu {q.id}: </Text>
                <Text>{q.question}</Text>
              </div>

              <Row gutter={[16, 8]}>
                {q.options.map((option) => (
                  <Col xs={24} sm={12} key={option.key}>
                    <div
                      style={{
                        padding: '8px 12px',
                        border: '1px solid #d9d9d9',
                        borderRadius: '6px',
                        backgroundColor: option.selected && option.correct
                          ? '#f6ffed'
                          : option.selected && !option.correct
                            ? '#fff2f0'
                            : option.correct && !option.selected
                              ? '#f6ffed'
                              : '#fafafa',
                        borderColor: option.selected && option.correct
                          ? '#b7eb8f'
                          : option.selected && !option.correct
                            ? '#ffccc7'
                            : option.correct && !option.selected
                              ? '#b7eb8f'
                              : '#d9d9d9',
                        borderLeft: option.selected
                          ? `4px solid ${option.correct ? '#52c41a' : '#ff4d4f'}`
                          : option.correct
                            ? '4px solid #52c41a'
                            : '4px solid transparent'
                      }}
                    >
                      <Space>
                        <Text strong>{option.key}.</Text>
                        <Text>{option.text}</Text>
                      </Space>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card>
          ))}
        </div>
      </Modal>
    </div>
  );
}
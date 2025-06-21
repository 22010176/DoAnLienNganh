import React, { useState } from 'react';
import { Modal, Input, Select, Button, Radio, Checkbox, Alert, Row, Col, Typography } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;
const { Text } = Typography;

export default function AddQuestionForm() {
  const [isVisible, setIsVisible] = useState(true);
  const [questionType, setQuestionType] = useState('single');
  const [answers, setAnswers] = useState([
    { id: 1, text: '', checked: false },
    { id: 2, text: '', checked: false }
  ]);

  const addAnswer = () => {
    const newAnswer = {
      id: answers.length + 1,
      text: '',
      checked: false
    };
    setAnswers([...answers, newAnswer]);
  };

  const updateAnswer = (id, text) => {
    setAnswers(answers.map(answer =>
      answer.id === id ? { ...answer, text } : answer
    ));
  };

  const handleQuestionTypeChange = (value) => {
    setQuestionType(value);
    // Reset answers when changing type
    setAnswers(answers.map(answer => ({ ...answer, checked: false })));
  };

  const getAlertMessage = () => {
    if (questionType === 'single') {
      return "Chọn 1 đáp án đúng bằng cách click vào nút radio";
    } else {
      return "Có thể chọn nhiều đáp án đúng bằng cách tick vào checkbox";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <Modal
        title={null}
        open={isVisible}
        onCancel={() => setIsVisible(false)}
        footer={null}
        width={600}
        centered
        closeIcon={<CloseOutlined />}
        className="add-question-modal"
      >
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <Text className="text-xl font-semibold text-gray-700">THÊM CÂU HỎI</Text>
          </div>

          {/* Bộ câu hỏi */}
          <div className="mb-4">
            <Text className="text-gray-700 mb-2 block">
              Bộ câu hỏi <span className="text-red-500">*</span>
            </Text>
            <Input
              value="I. Lý thuyết tổ hợp"
              disabled
              className="bg-gray-200"
            />
          </div>

          {/* Row with two selects */}
          <Row gutter={16} className="mb-4">
            <Col span={12}>
              <Text className="text-gray-700 mb-2 block">
                Chọn mức độ câu hỏi <span className="text-red-500">*</span>
              </Text>
              <Select
                defaultValue="de"
                className="w-full"
                suffixIcon={<span className="text-gray-400">▼</span>}
              >
                <Option value="de">Dễ</Option>
                <Option value="trungbinh">Trung bình</Option>
                <Option value="kho">Khó</Option>
              </Select>
            </Col>
            <Col span={12}>
              <Text className="text-gray-700 mb-2 block">
                Chọn loại câu hỏi <span className="text-red-500">*</span>
              </Text>
              <Select
                value={questionType === 'single' ? 'single' : 'multiple'}
                onChange={handleQuestionTypeChange}
                className="w-full"
                suffixIcon={<span className="text-gray-400">▼</span>}
              >
                <Option value="single">Chọn đáp án đúng nhất</Option>
                <Option value="multiple">Chọn nhiều đáp án</Option>
              </Select>
            </Col>
          </Row>

          {/* Nội dung câu hỏi */}
          <div className="mb-4">
            <Text className="text-gray-700 mb-2 block">
              Nội dung câu hỏi <span className="text-red-500">*</span>
            </Text>
            <TextArea
              placeholder="Nhập nội dung câu hỏi..."
              rows={4}
              className="resize-none"
            />
          </div>

          {/* Đáp án section */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <Text className="text-gray-700">
                Đáp án <span className="text-red-500">*</span>
              </Text>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={addAnswer}
                className="bg-green-500 hover:bg-green-600 border-green-500"
              >
                Thêm đáp án
              </Button>
            </div>

            {/* Answer options */}
            <div className="space-y-3 mb-4">
              {answers.map((answer, index) => (
                <div key={answer.id} className="flex items-center gap-3">
                  {questionType === 'single' ? (
                    <Radio name="correctAnswer" />
                  ) : (
                    <Checkbox />
                  )}
                  <Input
                    placeholder={`Đáp án ${index + 1}`}
                    value={answer.text}
                    onChange={(e) => updateAnswer(answer.id, e.target.value)}
                    className="flex-1"
                  />
                </div>
              ))}
            </div>

            {/* Alert message */}
            <Alert
              message={getAlertMessage()}
              type="info"
              showIcon
              icon={<span className="text-red-500">!</span>}
              className="bg-blue-50 border-blue-200"
            />
          </div>

          {/* Footer buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              size="large"
              onClick={() => setIsVisible(false)}
              className="px-8"
            >
              Hủy
            </Button>
            <Button
              type="primary"
              size="large"
              className="bg-purple-600 hover:bg-purple-700 border-purple-600 px-8"
            >
              Thêm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
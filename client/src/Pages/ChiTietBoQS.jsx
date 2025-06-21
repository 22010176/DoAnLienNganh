import React from 'react';
import { Card, Button, Input, Select, Row, Col, Typography, Tag, Space } from 'antd';
import { SearchOutlined, PlusOutlined, FileTextOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

export default function ChiTietBoQS() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Card style={{
          background: 'rgba(100, 41, 181, 0.24)',
          margin: 0,
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <Text style={{ color: '#374151', fontSize: '16px' }}>Môn học Toán rời rạc I. Lý thuyết tổ hợp</Text>
          {/* Muốn hiển thị theo kiểu Môn học > Toán rời rạc > I. Lý thuyết tổ hợp*/}
        </Card>

        <div style={{ marginBottom: '24px' }}>
          <Text style={{ fontSize: '14px' }}>Cập nhật lần cuối: 17/06/2025</Text>
        </div>

        {/* Statistics Cards */}
        <Row gutter={[16, 16]} className="mb-6">
          <Col xs={12} md={6}>
            <Card className="text-center bg-white shadow-sm">
              <Title level={1} className="text-5xl font-bold text-purple-700">70</Title>
              <Text className="text-gray-600">Tổng số câu hỏi</Text>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="text-center bg-white shadow-sm">
              <Title level={1} className="text-5xl font-bold text-purple-700">30</Title>
              <Text className="text-gray-600">Câu hỏi dễ</Text>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="text-center bg-white shadow-sm">
              <Title level={1} className="text-5xl font-bold text-purple-700">30</Title>
              <Text className="text-gray-600">Câu hỏi trung bình</Text>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="text-center bg-white shadow-sm">
              <Title level={1} className="text-5xl font-bold text-purple-700">10</Title>
              <Text className="text-gray-600">Câu hỏi khó</Text>
            </Card>
          </Col>
        </Row>

        {/* Search and Filter Bar */}
        <Row gutter={[16, 16]} className="mb-6">
          <Col xs={24} md={8}>
            <Input
              placeholder="Tìm kiếm câu hỏi"
              prefix={<SearchOutlined className="text-gray-400" />}
              size="large"
              className="rounded-lg"
            />
          </Col>
          <Col xs={12} md={4}>
            <Select
              placeholder="Tất cả loại câu hỏi"
              size="large"
              className="w-full"
              suffixIcon={<span className="text-gray-400">▼</span>}
            >
              <Option value="all">Tất cả loại câu hỏi</Option>
            </Select>
          </Col>
          <Col xs={12} md={4}>
            <Select
              placeholder="Tất cả mức độ"
              size="large"
              className="w-full"
              suffixIcon={<span className="text-gray-400">▼</span>}
            >
              <Option value="all">Tất cả mức độ</Option>
            </Select>
          </Col>
          <Col xs={24} md={8}>
            <div className="flex gap-2 justify-end">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                size="large"
                className="bg-orange-500 hover:bg-orange-600 border-orange-500 rounded-lg"
              >
                Thêm câu hỏi
              </Button>
              <Button
                icon={<FileTextOutlined />}
                size="large"
                className="rounded-lg"
              >
                Nhập từ file
              </Button>
            </div>
          </Col>
        </Row>

        {/* Question Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <Title level={4} className="mb-6">I. Lý thuyết tổ hợp</Title>

          {/* Question 1 */}
          <div className="border-l-4 border-blue-500 bg-white rounded-lg shadow-sm mb-6 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <Text strong className="text-lg">I. Lý thuyết tổ hợp</Text>
                <Tag color="green" className="px-3 py-1 text-sm font-medium">DỄ</Tag>
                <Tag color="blue" className="px-3 py-1 text-sm font-medium">CHỌN ĐÁP ÁN ĐÚNG NHẤT</Tag>
              </div>
              <div className="flex gap-2">
                <Button type="text" icon={<EditOutlined />} className="text-blue-500" />
                <Button type="text" icon={<DeleteOutlined />} className="text-red-500" />
              </div>
            </div>

            <div className="mb-4">
              <Text strong>Câu 1: </Text>
              <Text>Cho 2 tập A, B với |A|=13,|B|=19,|A∩B|=1. |A∪B| là:</Text>
            </div>

            <div className="space-y-3">
              <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-lg">
                <Text><strong>A.</strong> 12</Text>
              </div>
              <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-lg">
                <Text><strong>B.</strong> 32</Text>
              </div>
              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <Text><strong>C.</strong> 31</Text>
              </div>
              <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-lg">
                <Text><strong>D.</strong> 18</Text>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="border-l-4 border-blue-500 bg-white rounded-lg shadow-sm mb-6 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <Text strong className="text-lg">I. Lý thuyết tổ hợp</Text>
                <Tag color="orange" className="px-3 py-1 text-sm font-medium">TRUNG BÌNH</Tag>
                <Tag color="purple" className="px-3 py-1 text-sm font-medium">CHỌN NHIỀU ĐÁP ÁN</Tag>
              </div>
              <div className="flex gap-2">
                <Button type="text" icon={<EditOutlined />} className="text-blue-500" />
                <Button type="text" icon={<DeleteOutlined />} className="text-red-500" />
              </div>
            </div>

            <div className="mb-4">
              <Text strong>Câu 2: </Text>
              <Text>Một nhóm có 5 bạn: An, Bình, Cường, Duyên và Hoa. Người ta cần chọn ra 2 bạn để tham gia một trò chơi. Trong các phương án sau, đâu là phát biểu đúng về cách chọn?</Text>
            </div>

            <div className="space-y-3">
              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <Text><strong>A.</strong> Nếu chọn An rồi Bình là một cách, chọn Bình rồi An là một cách khác.</Text>
              </div>
              <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-lg">
                <Text><strong>B.</strong> Nếu chọn An rồi Bình là một cách, chọn Bình rồi An là một cách khác.</Text>
              </div>
              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <Text><strong>C.</strong> Việc chọn 2 bạn để tham gia trò chơi là tổ hợp, không quan tâm đến thứ tự.</Text>
              </div>
              <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-lg">
                <Text><strong>D.</strong> Có 20 cách để chọn 2 bạn từ nhóm trên.</Text>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="border-l-4 border-blue-500 bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <Text strong className="text-lg">I. Lý thuyết tổ hợp</Text>
                <Tag color="red" className="px-3 py-1 text-sm font-medium">KHÓ</Tag>
                <Tag color="blue" className="px-3 py-1 text-sm font-medium">CHỌN ĐÁP ÁN ĐÚNG NHẤT</Tag>
              </div>
              <div className="flex gap-2">
                <Button type="text" icon={<EditOutlined />} className="text-blue-500" />
                <Button type="text" icon={<DeleteOutlined />} className="text-red-500" />
              </div>
            </div>

            <div className="mb-4">
              <Text strong>Câu 3: </Text>
              <Text>Cho biết số phần tử của tập A∪B∪C nếu mỗi tập có 100 phần tử và các tập hợp đôi một rời nhau:</Text>
            </div>

            <div className="space-y-3">
              <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-lg">
                <Text><strong>A.</strong> 12</Text>
              </div>
              <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-lg">
                <Text><strong>B.</strong> 32</Text>
              </div>
              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <Text><strong>C.</strong> 31</Text>
              </div>
              <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-lg">
                <Text><strong>D.</strong> 18</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
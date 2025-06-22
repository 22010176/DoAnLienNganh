import React from 'react';
import { Card, Button, Typography, Space, Divider } from 'antd';
import {
  PlusOutlined,
  ExportOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  BellOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import PageHeader from '../Components/PageHeader';

const { Title, Text } = Typography;

const OnlineExamInterface = () => {
  const statsData = [
    { number: 196, label: 'Tổng số câu hỏi', color: 'text-purple-600' },
    { number: 72, label: 'Câu hỏi dễ', color: 'text-purple-600' },
    { number: 78, label: 'Câu hỏi trung bình', color: 'text-purple-600' },
    { number: 46, label: 'Câu hỏi khó', color: 'text-purple-600' }
  ];

  const examSets = [
    {
      title: 'I. Lý thuyết tổ hợp',
      questions: 70,
      difficulty: '30 Dễ, 30 Trung bình, 10 Khó',
      lastUpdate: '21/06/2025'
    },
    {
      title: 'II. Lý thuyết đồ thị',
      questions: 86,
      difficulty: '34 Dễ, 38 Trung bình, 14 Khó',
      lastUpdate: '21/06/2025'
    },
    {
      title: 'III. Suy luận toán học',
      questions: 40,
      difficulty: '20 Dễ, 10 Trung bình, 10 Khó',
      lastUpdate: '21/06/2025'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <PageHeader />

      {/* Main Content */}
      <div className="p-6">
        {/* Breadcrumb */}
        <div className="bg-purple-100 rounded-lg p-4 mb-6">
          <Text className="text-purple-800">Môn học > Toán rời rạc</Text>
          <div className="mt-2">
            <Text className="text-sm text-gray-600">Cập nhật lần cuối: 17/06/2025</Text>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {statsData.map((stat, index) => (
            <Card key={index} className="text-center border-purple-200">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <Text className="text-gray-600">{stat.label}</Text>
            </Card>
          ))}
        </div>

        {/* Action Buttons and Question Sets */}
        <div className="flex items-center justify-between mb-6">
          <Title level={3} className="text-gray-800 mb-0">CÁC BỘ CÂU HỎI:</Title>
          <Space>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="bg-purple-600 border-purple-600 hover:bg-purple-700"
            >
              Thêm bộ câu hỏi
            </Button>
            <Button
              type="primary"
              icon={<ExportOutlined />}
              className="bg-green-600 border-green-600 hover:bg-green-700"
            >
              Xuất danh sách
            </Button>
          </Space>
        </div>

        {/* Question Sets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {examSets.map((set, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Title level={4} className="mb-0 text-gray-800">{set.title}</Title>
                  <Space>
                    <Button type="text" icon={<EyeOutlined />} className="text-gray-400 hover:text-gray-600" />
                    <Button type="text" icon={<EditOutlined />} className="text-blue-500 hover:text-blue-700" />
                    <Button type="text" icon={<DeleteOutlined />} className="text-red-500 hover:text-red-700" />
                  </Space>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FileTextOutlined className="text-gray-500 text-lg" />
                    <Text className="text-gray-700">{set.questions} Câu hỏi</Text>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CheckCircleOutlined className="text-gray-500 text-lg" />
                    <Text className="text-gray-700">{set.difficulty}</Text>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CalendarOutlined className="text-gray-500 text-lg" />
                    <Text className="text-gray-700">Cập nhật lần cuối: {set.lastUpdate}</Text>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineExamInterface;
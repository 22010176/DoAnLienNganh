import { Button, Layout, Select, Space, Table } from "antd";
import { Outlet } from "react-router";

import PageHeader from "@/Components/PageHeader";
import Topbar from "@/Components/Topbar";
import { Content } from "antd/es/layout/layout";

function TeacherLayout() {
  return (
    <div className='w-screen h-screen overflow-hidden' >
      <Layout className='size-full bg-[#f5f5f5]' >
        <PageHeader />

        <Content className='size-full bg-[#f5f5f5] p-[16px]' style={{ padding: '16px', backgroundColor: '#f5f5f5', width: '100%' }}>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
}

export default TeacherLayout
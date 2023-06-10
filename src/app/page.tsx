"use client";
import { Typography, Layout, Space } from "antd";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { ChartCard } from "@/components/ChartCard/ChartCard";
import styles from "./page.module.css";
import { Chart1, Chart2 } from "@/components/Charts";

const { Title } = Typography;
const { Header, Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          backgroundColor: "white",
          height: "unset",
          boxShadow: "0px 10px 5px 0px rgba(0,0,0,0.10)",
        }}
      >
        <Title level={3}>App title</Title>
      </Header>
      <Content className={styles.contentWrapper}>
        <PageTitle />
        <Space wrap align="center" style={{ justifyContent: "center" }}>
          <ChartCard title="Chart Title">
            <Chart1 />
          </ChartCard>
          <ChartCard title="Chart Title">
            <Chart2 />
          </ChartCard>
        </Space>
      </Content>
    </Layout>
  );
}

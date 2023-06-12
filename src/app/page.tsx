"use client";
import { Typography, Layout, Space } from "antd";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { ChartCard } from "@/components/ChartCard";
import styles from "./page.module.css";
import { Chart1, Chart2 } from "@/components/Charts";

const { Title } = Typography;
const { Header, Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <Header className={styles.header}>
        <Title level={3}>App title</Title>
      </Header>
      <Content className={styles.contentWrapper}>
        <PageTitle />
        <Space wrap align="center" className={styles.space}>
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

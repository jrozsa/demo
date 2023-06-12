import {
  FileDownloadOutlined,
  FilterList,
  NotesOutlined,
} from "@mui/icons-material";
import { Button, Space, Typography } from "antd";
import styles from "./PageTitle.module.css";
import { green, gray, presetDarkPalettes } from "@ant-design/colors";

const { Text, Title } = Typography;
export const PageTitle = () => {
  return (
    <div className={styles.wrapper}>
      <Title level={3} className={styles.title}>
        Page title
      </Title>
      <Space>
        <Button className={styles.button}>
          <Text>Export to PDF</Text>
          <FileDownloadOutlined style={{ color: green[7] }} />
        </Button>
        <Button className={styles.button}>
          <div>
            <Text>Notes</Text>
            <Text style={{ color: gray[1] }}>(3)</Text>
          </div>
          <NotesOutlined style={{ color: green[7] }} />
        </Button>
        <Button className={styles.button}>
          <Text>Filter</Text>
          <Text
            className={styles.text}
            style={{
              background: green[7],
              color: "#ffffff",
            }}
          >
            9+
          </Text>

          <FilterList style={{ color: green[7] }} />
        </Button>
      </Space>
    </div>
  );
};

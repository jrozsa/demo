import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Space, Typography } from "antd";
import styles from "./ChartCard.module.css";
import { AccountCircleOutlined, CommentOutlined } from "@mui/icons-material";
import { gray } from "@ant-design/colors";

const { Text } = Typography;
type Props = {
  title?: string;
  children?: React.ReactNode;
};
export const ChartCard = ({ title, children }: Props) => {
  return (
    <Card title={title} bordered bodyStyle={{ padding: 0 }}>
      {children}
      <Divider />
      <div className={styles.footer}>
        <Avatar icon={<UserOutlined />} />
        <div className={styles.footerMessageWrapper}>
          <Text style={{ color: gray[2] }}>3</Text>
          <CommentOutlined style={{ color: gray[2] }} />
        </div>
      </div>
    </Card>
  );
};

import React, { useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DingdingOutlined,
  ApiOutlined
} from "@ant-design/icons";
import { Avatar, Card, Col, Row, Slider, Switch, Button } from "antd";
const { Meta } = Card;

const Labels = () => {
  return (
    <>
      <Row
        gutter={16}
        style={{ width: "90%", textAlign: "center", margin: "15px" }}
      >
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </>
  );
};

const Home = () => {
  const [inputValue, setInputValue] = useState(1);
  return (
    <>
      <div
        style={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <h1>Hello this is project</h1>
        <Labels />
        <Row style={{
          gap: "22px"
        }}>
          <Card
            style={{
              width: 300,
            }}
            actions={[
              <Switch checkedChildren="On" unCheckedChildren="Off" />
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            style={{
              width: 300,
            }}
            actions={[
              <Switch checkedChildren="On" unCheckedChildren="Off" />
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            style={{
              width: 300,
            }}
            // cover={
            //   <img
            //     alt="example"
            //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            //   />
            // }
            actions={[
              <Slider
                min={1}
                max={20}
                onChange={(val) => setInputValue(val)}
                value={typeof inputValue === "number" ? inputValue : 0}
              />,
            ]}
          >
            <Meta
              // avatar={
              //   <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              // }
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            style={{
              width: 300,
            }}
            actions={[
              <Button icon={<ApiOutlined />}>Execute</Button>
            ]}
          >
            <Meta

              title="Card title"
              description="This is the description"
            />
          </Card>
        </Row>
      </div>
    </>
  );
};
export default Home;

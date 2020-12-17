import React, {useState} from 'react';
import './index.css';
import { Button, DatePicker, Alert, message, Radio, Typography, Slider, Divider, Row, Col, Layout, Menu, Breadcrumb} from 'antd';
import { Card, Upload, Popconfirm, Space, Switch, Modal} from "antd";
import { DownloadOutlined, AndroidFilled, SettingOutlined, StarTwoTone, MailOutlined, LoadingOutlined, AppstoreOutlined, HeartFilled, UploadOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { render } from '@testing-library/react';
import Draggable from 'react-draggable';

const App = () => {

  const {Link, Paragraph, Title} = Typography;
  const {Header, Footer, Sider, Content} = Layout;
  const { SubMenu } = Menu;

const [theme, setTheme]   = useState('dark');
const [visible, setVisible] = useState(false);
const [disable, setdisable] = useState(true);
const [theme1, setTheme1]   = useState('light');
const [current, setCurrent] = useState(1);
const [current1, setCurrent1] = useState(0);
const [date, setDate] = useState(null);
const [size, setSize] = useState("large");
const [color, setColor] = useState('black');
const [editableStr, setEditableStr] = useState('This is an editable text.');
const [rows, setRows] = useState(1);
const article = "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";
const style = { background: '#0092ff', padding: '12px 70px' };

const changeTheme = value => {
  setTheme(value ? 'dark' : 'light');
}

const showModal = () => {
  setVisible(true);
}

const handleOk = e => {
  setVisible(false);
}

const handleCancel = e => {
  setVisible(false);
}

const changeTheme1 = value => {
  setTheme1(value ? 'light' : 'dark');
}

const handleChange = value => {
  message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`)
  setDate(value);
};

const handleCurrent = value => {
  setCurrent(value.key);
}

const handleCurrent1 = value => {
  setCurrent1(value.key);
}

const handleRows = value => {
  setRows(value);
}

const handleSize = value => {
  setSize(value.target.value);
}

const handleClick = () => {
  if(color === 'black'){
  message.info("You Liked it \\n Hello!!",[0.7]);
  setColor('Red')}
  else{
    message.info("You unliked it !!",[0.7]);
  setColor('black')}
  }

return (
  <div style={{padding: '20px'}}>
     <div>
<Divider orientation="center">Responsive-Grid</Divider>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
  <Col className="gutter-row" span={6}>
    <div style={style}>col-6</div>
  </Col>
  <Col className="gutter-row" span={6}>
    <div style={style}>col-6</div>
  </Col>
  <Col className="gutter-row" span={6}>
    <div style={style}>col-6</div>
  </Col>
  <Col className="gutter-row" span={6}>
    <div style={style}>col-6</div>
  </Col>
</Row>

<Divider>Layout</Divider>

       
<Layout>
    <Sider style={{color: 'white', background: '#47A0E9', textAlign:'center'}}>Sider</Sider>
<Layout>
  <Header style={{color: 'white', background: '#7DBCEA', textAlign:'center'}}>Header</Header>
  <Content style={{color: 'white', background: '47A0E9', textAlign:'center'}}>Content</Content>
  <Footer style={{color: 'white', background: '#7DBCEA', textAlign:'center'}}>Footer</Footer>
</Layout>
</Layout>

<Divider>Nav Bar and Breadcrumb</Divider>


<Layout className="layout">
<Header>
  <div className="logo" />
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    <Menu.Item key="1">Home</Menu.Item>
    <Menu.Item key="2">List</Menu.Item>
    <Menu.Item key="3">App</Menu.Item>
  </Menu>
</Header>
<Content style={{ padding: '0 50px' }}>
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
  <div className="site-layout-content">Content</div>
</Content>
<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>

</div>
    <div style={{width: 500, margin:'auto'}}>

    <Divider>Card inside a Modal</Divider>


<Button onClick={showModal}>Open Draggable Modal</Button>
<Modal
  title={
    <div
      style={{
        width: '50%',
        cursor: 'move',
      }}
      onMouseOver={() => {
        if ({disable}) {
          setdisable(false);
        }
      }}
      onMouseOut={() => {
       setdisable(false);
      }}
      onFocus={() => {}}
      onBlur={() => {}}
      // end
    >
      Draggable Modal
    </div>
  }
  visible={visible}
  onOk={handleOk}
  onCancel={handleCancel}
  modalRender={modal => <Draggable disabled={disable}>{modal}</Draggable>}
>
<Card title="YouTube" extra={<a href="https://www.youtube.com/">YouTube</a>} style={{ width: 300 }}>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Twitter" extra={<a href="https://twitter.com/">Twitter</a>} style={{ width: 300 }}>
      <p>Card content</p>
    </Card>
</Modal>

  <Divider>Date Picker</Divider>
    <DatePicker onChange={handleChange}/>
      <div style={{marginTop: 16}}>
      <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
      </div>
  <br />
  <Divider>Buttons</Divider>
    <div>
  <Button type="primary" danger>Primary Button</Button> <p>(A button with type as primary and indicates danger)</p>
  <Button disabled>Default Button</Button> <p>(A default button that is disabled)</p>  </div>

  <div>
  <Divider>Resizeable Buttons via Radio Button</Divider>
  <Radio.Group value={size} onChange={handleSize}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
  </Radio.Group>

  <br /> <br />
  <Button type="primary" danger size={size}>Primary Button</Button> &nbsp;

        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} /> &nbsp;
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
  
  </div>

  <Divider>Icons</Divider>

<div className="icons">

  <StarTwoTone twoToneColor="#eb2f96" style={{fontSize: 50, marginLeft: 12}}/>
  <AndroidFilled style={{fontSize: 50, marginLeft: 12 }}/>
  <LoadingOutlined style={{fontSize: 50, marginLeft: 12}}/>
  <HeartFilled style={{fontSize: 50, marginLeft: 12,cursor:'pointer', color:`${color}`}} onClick={handleClick}/>

  <p>(Click on Heart Icon to see the message)</p>
  </div>

  <Divider>Link</Divider>

  <Link href="https://nextjs-my-blog.vercel.app/" target="_blank">
      Open My NextJs Blog (Link)
  </Link>

  <Divider>Editable Text</Divider>

  <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>

  <Divider>Suffix/Ellipsis</Divider>

  <Title level={4}>Drag to increase the number of rows</Title>

  <Slider value={rows} min={1} max={11} onChange={handleRows} />
        <Paragraph
          ellipsis={{
            rows,
            expandable: true,
            suffix: '--William Shakespeare',
            onEllipsis: ellipsis => {
              console.log('Ellipsis changed:', ellipsis);
            },
          }}
          title={`${article}--William Shakespeare`}
        >
          {article}
        </Paragraph>

      
        <Divider>Upload and Space</Divider>

<Space>
  <Upload>
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  </Upload>
  <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
    <Button>Confirm</Button>
  </Popconfirm>
  </Space>

  <Divider>Theme</Divider>


<Space>

      <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<Switch
          checked={theme1 === 'light'}
          onChange={changeTheme1}
          checkedChildren="Light"
          unCheckedChildren="Dark"
        />

        </Space>
<br /><br/>
        <Space>
        <br />
        <br />
        <Menu
          theme={theme}
          onClick={handleCurrent}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
        <br />
        <br />
        <Menu
          theme={theme1}
          onClick={handleCurrent1}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current1]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
    </Space>
        </div>

  </div>

  
);
};


render(<App />, document.getElementById("root"))

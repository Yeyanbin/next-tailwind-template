import { userState } from "@/contexts/user";
import { layoutState } from '@/contexts/layout';
import { Button, Checkbox, Form, Input } from 'antd';

const LoginPage = () => {

  const {
    user,
    isLogin
  } = userState.useState();

  // const {
  //   show,
  // } = dialogState.useState();


  const login = () => {
    isLogin!.value = true
  }

  return <div style={{width: '100%'}}>
    this is login in /views 
    <div>user: {user?.value}, isLogin: {isLogin?.value ? '已登陆' : '未登录'}</div>

    <a onClick={login}>登录</a>
    <a onClick={() => isLogin!.value = false}>注销</a>



    <LoginForm></LoginForm>
  </div>
}

const LoginForm: React.FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return   <Form
  className="flex items-center flex-col"
  name="basic"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
  <Form.Item
    label="Username"
    name="username"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
  >
    <Input.Password />
  </Form.Item>

  <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
    <Checkbox>Remember me</Checkbox>
  </Form.Item>

  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
}

export default LoginPage;
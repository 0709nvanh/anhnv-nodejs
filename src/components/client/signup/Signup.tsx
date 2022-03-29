import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import './signin.css' 
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../api/auth';
type Props = {}

type InputTypes = {
    name: string,  
    email: string,
    password: string
}
const Signup = (props: Props) => {
    const { register, handleSubmit, formState: { errors }} = useForm<InputTypes>();
    const navigate = useNavigate()
    const onFinish = (data: any) => {
        signup(data);
        navigate('/signin')
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <div className='signin'>
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="Name"
                name="user"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
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
        
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </div>
      );
}

export default Signup
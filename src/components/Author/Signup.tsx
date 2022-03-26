import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserType } from '../../types/auth';
import { useNavigate } from 'react-router-dom';

type Props = {
    onAddUser: (user: InputTypes) => void
}

type InputTypes = {
    name: string,
    email: string,
    password: string
}

const Signup = (props: Props) => {
    const { register, handleSubmit, formState: { errors }} = useForm()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<InputTypes> = user => {
        props.onAddUser(user)
        navigate('/')
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      return (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onSubmit={handleSubmit(onSubmit)}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            {...register('name'), { required: true }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
          >
            <Input {...register('email'), { required: true }} />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
          >
            <Input.Password {...register('password'), { required: true }}/>
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
}

export default Signup

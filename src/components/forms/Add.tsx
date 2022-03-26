import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';

type Inputs = {
    name: string, price: number
}
type ProductProp = {
    onAdd : (product: Inputs) => void
}

const Add = (props: ProductProp) => {
    const { register, handleSubmit, formState: { errors }} = useForm<Inputs>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        props.onAdd(dataInput);
        navigate("/admin/product");
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
  return (
    <div className="container">
        <div>
            <h2>Add new product</h2>
        </div>
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
          >
            <Input {...register('name',{ required: true })}/>
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
          >
            <Input {...register('price', { required: true })}/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register('name', { required: true, minLength: 5})} />
                {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                {errors.name && errors.name.type === "minLength" && <span>Trên 5 ký tự</span>}
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" className="form-control"  {...register('price', { required: true, min: 1})} />
                {errors.price && errors.price.type === "required" && <span>This field is required</span>}
                {errors.price && errors.price.type === "min" && <span> Less than 0</span>}
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form> */}
    </div>
  )
}

export default Add
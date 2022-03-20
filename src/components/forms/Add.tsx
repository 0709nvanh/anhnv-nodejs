import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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
  return (
    <div className="container">
        <div>
            <h2>Add new product</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
        </form>
    </div>
  )
}

export default Add
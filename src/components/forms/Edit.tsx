import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
type Inputs = {
    name: string, price: number
}
type ProductEditProp = {
    onAdd : (product: Inputs) => void
}

const Edit = (props: ProductEditProp) => {
    const { register, handleSubmit, formState: { errors }} = useForm<Inputs>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        props.onAdd(dataInput);
        navigate("/admin/product");
    }
    return (
        <div>
            <div>
                <h2>Add new product</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" {...register('name'), { required: true, minLength: 5}} />
                    {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                    {errors.name && errors.name.type === "minLength" && <span>at least 5 characters</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" {...register('price')} />
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
        </div>
  )
}

export default Edit
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
type Inputs = {
    name: string, price: number
}
type ProductProp = {
    onAdd : (product: Inputs) => void
}

const Add = (props: ProductProp) => {
    const { register, handleSubmit, formState: { errors }} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // console.log(dataInput);
        props.onAdd(dataInput);
    }
  return (
    <div className="container">
        <div>
            <h2>Add new product</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register('name')} />
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

export default Add
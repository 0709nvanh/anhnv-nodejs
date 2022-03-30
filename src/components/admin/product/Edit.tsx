import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProductType } from '../../../types/product'
import { read } from '../../../api/product'
type EditProps = {
    onUpdate: (product: ProductType) => void
}

type InputType ={
    name: string, price: number
}
const Edit = (props: EditProps) => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm<InputType>()
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const { data } = await read(Number(id))
            console.log(data);
            reset(data)
        })()
    }, [])

    const onSubmit: SubmitHandler<InputType> = (product: any) => {
        props.onUpdate(product)
        navigate('/admin/product')
    }
  return (
    <div>
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

export default Edit
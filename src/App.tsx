import { useState } from 'react'
import './App.css'
import type { ProductType } from './types/product'
import ShowInfo from './components/ShowInfo'

function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "Product A",
    age: 20
  })

  return (
    <div>
      <ShowInfo info={info}/>
    </div>
  )
}

export default App

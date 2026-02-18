import { useState } from 'react'
import './App.css'
import AlertBox from './components/alert-box'
import Greeting from './components/greeting'
import ProductCard from './components/product-card'
import ChildButton from './components/child-button'
import Counter from './components/counter'
import ShowInputValue from './components/show-input-value'
import ToggleButton from './components/toggle-button'
import ShowHide from './components/show-hide'
import Button from './components/button'
import InputLogger from './components/input-logger'
import Timer from './components/timer'
import Welcome from './components/welcome'



function App() {
  const [count,setCount] = useState(0)
 
  function increase () {
    setCount(count + 1)
  }

  return (
    <>

      <Greeting name = 'Farzin'/>
      <br />
      <br />
      <ProductCard title='Iphone 15' price='999$' description='A powerful smartphone.'/>
      <br />
      <br />
      <AlertBox type='success' message='Saved successfully!'/>
      <AlertBox type='error' message='Something went wrong!'/>
      <AlertBox type='warning' message='Be careful!'/>
      <br />
      <br />
      <h2>Count: {count}</h2>
      <ChildButton onIncrease={increase}/>
      <br />
      <br />
      <Counter/>
      <br />
      <br />
      <ShowInputValue/>
      <br />
      <br />
      <ToggleButton/>
      <br />
      <br />
      <ShowHide/>
      <br />
      <br />
      <Button/>
      <br />
      <br />
      <InputLogger/>
      <br />
      <br />
      <Timer/>
      <br />
      <br />
      <Welcome/>

      

    </>
  )
}

export default App

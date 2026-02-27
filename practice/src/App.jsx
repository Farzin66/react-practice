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
import TodoList from './components/to-do-list'
import Product from './components/product'
import UserCard from './components/UserCard'
import Parent from './components/Parent'
import LikeButton from './components/LikeButton'
import ToggleMessage from './components/ToggleMessage'
import ProfileStatus from './components/ProfileStatus'
import ProfileForm from './components/ProfileForm'
import FormValidation from './components/FormValidation'
import DebounceInput from './components/DebounceInput'
import ParentCallback from './components/ParentCallback'
import MemoParent from './components/MemoComponent'
import ThemeProvider from './context/ThemeProvider'
import ThemeHome from './components/ThemeHome'
import RefComponent from './components/RefComponent'
import FocusForm from './components/FocusForm'
import CommentBox from './components/CommentBox'
import CounterDisplay from './components/CounterDisplay'
import SetCounter from './components/SetCounter'
import MultiCounterDisplay from './components/MultiCounterDisplay'
import ThemeToggle from './components/ThemeToggle'
import UserPanel from './components/UserPanel'

function App() {
  // const [count,setCount] = useState(0)
 
  // function increase () {
  //   setCount(count + 1)
  // }

  return (
    <>

      <MultiCounterDisplay/>
      <ThemeToggle/>
      <UserPanel/>

      {/* <CounterDisplay/>
      <SetCounter/> */}
      {/* <RefComponent/> */}
      {/* <FocusForm/> */}
      {/* <CommentBox/> */}
      {/* <ThemeProvider>
      <ThemeHome/>
      </ThemeProvider> */}
      {/* <MemoComponent/> */}
      {/* <ParentCallback/> */}
      {/* <FormValidation/> */}
      {/* <Effect/> */}
      {/* <DebounceInput delay={500} onDebounce={(value) => console.log(value)}/> */}
      {/* <Greeting name = 'Farzin'/>
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
      <Welcome/> */}
{/* 
      <TodoList/> */}
      {/* <UserCard firstName={'Farzin'} lastName={'P'} age={38}/> */}
      {/* <ToggleMessage/> */}
    </>
  )
}

export default App

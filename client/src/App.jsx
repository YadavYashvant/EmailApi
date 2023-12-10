import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NextUIProvider } from '@nextui-org/react'
import './components/form.jsx'

import { Button,Input,Textarea } from '@nextui-org/react'
import { ToastContainer,toast } from 'react-toastify'
import AddCourse from './components/form.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  const notify = () => toast.success("🦄 Wow so easy!");
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setTheme(theme)
    }
  });

  const handleForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    console.log(formData);
  }
  return (
      <AddCourse/>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import './App.css';
import Header from './components/header'
import HeroSection from './components/herosection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <HeroSection />
    </main>
    </>
  )
}

export default App;

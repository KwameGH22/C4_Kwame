import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="portfolio">
        <h1 className="fname">Kwame Adarkwa-Yiadom</h1>
        <div className="educ fname">
          <h2>EDUCATIONAL BACKGROUND</h2>
          <h3>Azubi Africa (July 2023 - March 2024)</h3>
          <h4>SKILLS</h4>
          <ul>HTML</ul>
          <ul>CSS</ul>
          <ul>JAVASCRIPT</ul>
          <ul>REACTJS</ul>
        </div>
        <div className="professional">
          <h2>PROFESSIONAL EXPERIENCE</h2>
          <h3>Trainee Front-end Developer</h3>
          <h4>Duties</h4>
          <ul>
            <li>Worked on building new Angular components for the customer-facing web app which improved the time on page for the average user by 3 minutes </li>
            <li>Built extensive test coverage for all new features which decreased the number of customer complaints by 8%</li>
            <li>Designed and developed landing pages and assets also guided designers with the best practices for designing a responsive website and email assets </li>
            <li>Contributed to the in-house UI library to create reusable components that saved over 300 hours of development time per month</li>
          </ul>
          <div className='container'>
            <Button label = "Signin"/>
            <Button label = "Login"/>
          </div>  
        </div>
      </div>
    </>
  )
}

export default App

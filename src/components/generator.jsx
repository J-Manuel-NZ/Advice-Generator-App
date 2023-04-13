import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Generator = () => {
  const [posts, setPosts] = useState([])
  
  const getAdvice = async () => {
    const advice = await axios.get('https://api.adviceslip.com/advice')
    setPosts(advice.data.slip)
    console.log(posts)
  }

  useEffect(() => {
    getAdvice()
  }, [])

console.log('after posts')
  return (
    <main className="background">
      <div className='generator-container'>
        <h1 className='advice-number' id='title'>ADVICE #{posts.id}</h1>
        <p className='advice'>"{posts.advice}"</p>
        <img 
          className='divider-mobile'
          src="/assets/pattern-divider-mobile.svg" alt="graphic line to divide the generated advice from the button" 
        />
        <img 
          className='divider-desktop'
          src="/assets/pattern-divider-desktop.svg" alt="graphic line to divide the generated advice from the button" 
        />   
        <div className='circle-btn' onClick={() => getAdvice()}>
          <img src="/assets/icon-dice.svg" alt="dice icon" />
        </div>
      </div>
      
    </main>
  )
}

export default Generator
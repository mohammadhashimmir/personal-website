import React from 'react'
import Intro from './Intro'
import Projects from './Projects'
import Resume from './Resume'

function Main() {
  return (
    <div className='main-div'>
      <Intro />
      <Projects />
      <Resume />
    </div>
  )
}

export default Main
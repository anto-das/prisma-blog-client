import { resolve } from 'path'
import React from 'react'

const AboutPage = async () => {
  await new Promise((resolve) => setTimeout(resolve,4000))
  throw new Error("something went wrong..");
  return (
    <div className='text-3xl'>
      hello about page......
    </div>
  )
}

export default AboutPage

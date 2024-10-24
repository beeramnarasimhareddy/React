import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='container'>
      <h1>contact us</h1>
      <div className="form">
        <form action="">
          <label htmlFor="">Name
            <input type="text" placeholder='Enter your name' />
          </label>

          <label htmlFor="">
            Email address
            <input type="email" placeholder='enter your email'/>
          </label>

          <label htmlFor="">Phone Number
            <input type="number" />
          </label>

          <label htmlFor="">Message
          <textarea id="message" defaultValue="Your Message .."></textarea>

          </label>

          <button type='submit'>Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact

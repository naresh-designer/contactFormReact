import { useState } from "react"


const Contact = () => {
    const[contactForm,setContactForm]=useState({
        username:'',
        email:'',
        message:'',
    })

    const handleInputForm = (e) =>{
        const {name, value} = e.target
        setContactForm((prev) => ({...prev, [name]:value}) )
    }
    

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(contactForm)
    }

  return (
    <div className="contactForm" >
        <p>Please Fill Contact Form</p>
        <form onSubmit={handleSubmitForm} >
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" placeholder="Enter User Name" required value={contactForm.username} onChange={handleInputForm} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter Email" required value={contactForm.email} onChange={handleInputForm} />
            <label htmlFor="message">Message</label>
            <textarea type="textarea" name="message" placeholder="Message" required value={contactForm.message} onChange={handleInputForm} />
            <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default Contact
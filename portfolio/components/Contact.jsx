import  { useState } from 'react'
import { BiUpArrowAlt } from "react-icons/bi";
import emailjs from 'emailjs-com';
import {toast} from 'react-toastify';
import ScrollReveal from './ScrollReveal'

const Contact = () => {
    const [data,setData] = useState({fullName:"", email:"", phoneNo:"", subject:"", message:""});

    const handleChange = ({target:input, target:textarea}) =>{
        setData({...data,[input.name]: input.value, [textarea.name]: textarea.value})
        console.log(data);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const templateParams = {
            to: data.email,
            email: data.email,
            name: data.fullName,
            subject: data.subject,
            message: data.message,
            number: data.phoneNo,
        };

        try {
            const result = await emailjs.send(
                'service_n1q5vw5',
                'template_cztflli',
                templateParams,
                '4-SUiE6LZnBySGqod'
            );
            console.log('Email sent:', result.text);
            toast.success(' Email sent successfully!');
        } catch (error) {
            console.error('Email sending failed:', error);
            toast.error(' Failed to send email. Try again.');
        }
    };

  return (
    <>
        <section className="contact" id='contact'>
            <ScrollReveal direction ='down'>
            <p>Open Terminal → <span>Say Hi</span></p>
            <h2 className="heading">
                Get in <span>Touch</span>
            </h2>
            </ScrollReveal>

            <ScrollReveal direction ='up'>
            <form action="#" onSubmit={sendEmail}>
               <div className="input-box">
                    <input type="text" name='fullName' placeholder='Full Name*' onChange={handleChange} value={data.fullName} required/>
                    <input type="email" name='email' placeholder='Email Address*' onChange={handleChange} value ={data.email} required/>
                </div> 
                <div className="input-box">
                    <input type="number" name='phoneNo' placeholder='Mobile Number'onChange={handleChange} value = {data.phoneNo}/>
                    <input type="text" name='subject' placeholder='Subject' onChange={handleChange} value={data.subject} />
                </div> 
                <textarea name='message' cols="30" rows="10" placeholder='Your Message*' onChange={handleChange} value={data.message} required></textarea>
                <input type="submit" value="Send Message" className="btn" />
                <a href="#" className='arrow'><BiUpArrowAlt /></a>
            </form>
            </ScrollReveal>
            
        </section>
    </>
  )
}

export default Contact
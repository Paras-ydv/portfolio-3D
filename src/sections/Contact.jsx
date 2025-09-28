import { useState } from 'react'
import emailjs from "@emailjs/browser"
import Alert from '../components/Alert';
import { Particles } from '../components/Particles';

const Contact = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: "",});
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); // used to disable reload after we hit the submit button 
        setIsLoading(true);
        try {
            console.log("Form Submitted: ", formData);
            await emailjs.send("service_hs4c803", "template_vvg90va", {
                from_name: formData.name,
                to_name: "Paras",
                from_email: formData.email,
                to_email: "parasydv77@gmail.com",
                message: formData.message,
            }, "Fw5VMqQkhDVWtzIxM"); 
            setIsLoading(false);
            setFormData({name: "", email: "", message: ""});
            showAlertMessage("success", "Your message has been sent!");
        } 
        catch (error) {
            setIsLoading(false);
            console.log(error);
            showAlertMessage("danger", "Something went wrong!");
        }
        console.log(formData)
        // template_vvg90va
        // service_hs4c803
    }
  return (
    <section className='relative flex items-center c-space section-spacing'>
        <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        {showAlert && <Alert type={alertType} text={alertMessage}/>}
        <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
            <div className='flex flex-col items-start w-full gap-5 mb-10'>
                <h2 className='text-heading'>Let's Talk</h2>
                <p className='font-normal text-neutral-400'>Whether you're loking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>
            </div>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label htmlFor="name" className='field-label'>Full Name</label>
                    <input 
                        type="text" 
                        name='name' 
                        id='name' 
                        className='field-input field-input-focus' 
                        placeholder='John Doe'
                        autoComplete='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="email" className='field-label'>Email</label>
                    <input 
                        type="email" 
                        name='email' 
                        id='email' 
                        className='field-input field-input-focus' 
                        placeholder='johndoe@gmail.com'
                        autoComplete='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="message" className='field-label'>Message</label>
                    <textarea 
                        type="text" 
                        name='message' 
                        id='message' 
                        rows={4}
                        className='field-input field-input-focus' 
                        placeholder='Share your thoughts...'
                        autoComplete='name'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
                    {!isLoading ? "Send" : "Sending..."}
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact

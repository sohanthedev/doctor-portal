import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='mt-16' style={{background:`url(${appointment})`,backgroundSize:'cover'}}>
            <div className='text-center p-8'>
                <h4 className='text-primary font-bold'>Contact Us</h4>
                <h2 className='text-4xl font-bold text-white'>Stay connected with us</h2>
            </div>
            <div className='text-center mt-3 p-8'>
                <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mt-3" />
                <br />
                <textarea className="textarea textarea-bordered w-full max-w-xs mt-3 " placeholder="Your message"></textarea>
            </div>
        </section>
    );
};

export default Contact;
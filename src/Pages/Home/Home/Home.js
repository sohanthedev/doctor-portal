import React from 'react';
import Banner from '../Banner/Banner';
import CardInfo from '../CardInfo/CardInfo';
import Contact from '../Contact/Contact';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Exceptional from './Exceptional/Exceptional';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CardInfo></CardInfo>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;
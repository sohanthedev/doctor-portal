import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const CardInfo = () => {
    // const { name, description, icon, bgClass } = card;
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12'>
               <div className="text-white px-5 card card-side bg-green-300 shadow-xl">
        <figure><img src={clock} alt="Movie"/></figure>
        <div className="card-body">
                <h2 className="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
          
        </div>
      </div>
               <div className="text-white card card-side px-5 bg-gray-600 shadow-xl">
        <figure><img src={marker} alt="Movie"/></figure>
        <div className="card-body">
                    <h2 className="card-title">Brooklyn, NY 10036, United States</h2>
                    <p>Brooklyn, NY 10036, United States</p>
          
        </div>
      </div>
               <div className="text-white px-5 card card-side bg-green-300 shadow-xl">
        <figure><img src={phone} alt="Movie"/></figure>
        <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
          
        </div>
      </div>
        </div>
    );
};

export default CardInfo;
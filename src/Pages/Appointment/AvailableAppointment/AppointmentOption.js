import React from 'react';

const AppointmentOption = ({ appointmentOption , setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        
            <div className="card shadow-xl text-center mt-10">
  <div className="card-body">
                <h2 className="text-primary font-bold text-2xl text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length}{slots.length >1? 'spaces' : 'space'} available</p>
    <div className="card-actions justify-center">
                    
                    <label htmlFor="my-modal-3" disabled={slots.length === 0} onClick={()=>setTreatment(appointmentOption)} className="btn btn-primary text-white">Book Now</label>
    </div>
  </div>
</div>
      
    );
};

export default AppointmentOption;
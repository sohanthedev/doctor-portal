import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOption] = useState([])
    const [treatment,setTreatment]=useState(null)
    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])
   
    return (
        <div>
            <p className='text-center text-primary font-bold'>Available Services on : {format(selectedDate, 'PP')}</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    appointmentOption.map(option=><AppointmentOption key={option._id} appointmentOption={option} setTreatment={setTreatment}></AppointmentOption>)
            }
            </div>
            {
                treatment &&
                <BookingModal selectedDate={selectedDate} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
            
        </div>
    );
};

export default AvailableAppointment;
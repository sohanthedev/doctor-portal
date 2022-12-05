import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment,selectedDate,setTreatment}) => {
    const { name,slots } = treatment;

  const heandeleForm = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slots = form.slots.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: selectedDate,
      treatment:name,
      patient:name,
      slots,
      email,
      phone,
}

    console.log(booking)
    setTreatment(null)
  }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<form onSubmit={heandeleForm} className="modal ">
  <div className="modal-box relative grid gap-3">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">{name}</h3>
            <input type="text" placeholder="Type here" disabled value={format(selectedDate, 'PP')} className="input input-bordered w-full" />
            <select name='slots' className="select select-bordered w-full">
  
              {
                slots.map((sloteData,i) => <option key={i} value={sloteData}>{ sloteData}</option>)
              }
              
            </select>
            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full " />
            <input name="email" type="email" placeholder="Enter your Email" className="input input-bordered w-full " />
            <input name="phone" type="phone" placeholder="Enter your Phone Number" className="input input-bordered w-full " />
            <input type="submit" value="Submit"  className="input input-bordered w-full btn btn-primary" />
  
  </div>
</form>
        </>
    );
};

export default BookingModal;
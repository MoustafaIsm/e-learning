import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddInstructorModal() {
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    return (
        <Popup trigger={<button className="bold-text btn btn-blue"> Add Instructor </button>} modal>
            <div className="modal-header">
                <p className="bold-text large-text"> Add Insructor </p>
            </div>
            <div className="modal-content">
                <form>
                    <div className="profile-picture-input">

                    </div>
                    <div className='form-input-wrapper'>
                        <label> Name </label>
                        <input
                            type="text"
                            placeholder='Name' />
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Email </label>
                        <input
                            type="email"
                            placeholder='email' />
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Password </label>
                        <input
                            type="password"
                            placeholder='Password' />
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Major </label>
                        <input
                            type="text"
                            placeholder='Major' />
                    </div>
                    <div className="form-input-wrapper">
                        <label> Date of birth </label>
                        <DatePicker selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} className="date-picker" />
                    </div>
                    <div className='add-wrapper'>
                        <input type={'submit'} value='Add' className='btn btn-blue' />
                    </div>
                </form>
            </div>
        </Popup>
    )
}

export default AddInstructorModal
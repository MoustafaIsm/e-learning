import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

function AddInstructorModal({ onAdd }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());


    const addInstructor = (e) => {
        e.preventDefault();
        resetInputs();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('date_of_birth', dateOfBirth);
        formData.append('role_id', 2);
        onAdd(formData);
    }

    const resetInputs = () => {
        setEmail('');
        setName('');
        setPassword('');
        setDateOfBirth(new Date());
    }

    return (
        <Popup trigger={<button className="bold-text btn btn-blue"> Add Instructor </button>} modal>
            <div className="modal-header">
                <p className="bold-text large-text"> Add Insructor </p>
            </div>
            <div className="modal-content">
                <form onSubmit={addInstructor}>
                    <div className="profile-picture-input">
                        <label htmlFor="image">
                            <img src="/camera.svg" alt="camera" className='camera-wrapper' />
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className="hide" />
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Name </label>
                        <input
                            type="text"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Email </label>
                        <input
                            type="email"
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Password </label>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-input-wrapper">
                        <label> Date of birth </label>
                        <DatePicker
                            dateFormat={'dd-MM-yyyy'}
                            selected={dateOfBirth}
                            onChange={(date) => setDateOfBirth(moment(date).format('DD-MM-YYYY'))}
                            className="date-picker" />
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
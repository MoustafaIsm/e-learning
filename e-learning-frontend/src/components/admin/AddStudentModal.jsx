import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddStudentModal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    return (
        <Popup trigger={<button className="bold-text btn btn-blue"> Add Student </button>} modal>
            <div className="modal-header">
                <p className="bold-text large-text"> Add Student </p>
            </div>
            <div className="modal-content">
                <form>
                    <div className="profile-picture-input">
                        <label htmlFor="image">
                            <img src="/camera.svg" alt="camera" className='camera-wrapper' />
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            class="hide" />
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
                            selected={dateOfBirth}
                            onChange={(date) => setDateOfBirth(date)}
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

export default AddStudentModal
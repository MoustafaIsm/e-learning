import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function AddCourseModal({ onAdd }) {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [credits, setCredits] = useState(0);

    const addCourse = (e) => {
        e.preventDefault();
        resetInputs();
        const formData = new FormData();
        formData.append('code', code);
        formData.append('name', name);
        formData.append('credits', credits);
        onAdd(formData);
    }

    const resetInputs = () => {
        setCode('');
        setName('');
        setCredits(0);
    }

    return (
        <Popup trigger={<button className="bold-text btn btn-blue"> Add Course </button>} modal>
            <div className="modal-header">
                <p className="bold-text large-text"> Add Course </p>
            </div>
            <div className="modal-content">
                <form onSubmit={addCourse}>
                    <div className='form-input-wrapper'>
                        <label> Code </label>
                        <input
                            type="text"
                            placeholder='Code'
                            value={code}
                            onChange={(e) => setCode(e.target.value)} />
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
                        <label> Credits </label>
                        <input
                            type="number"
                            min={0}
                            placeholder='Credits'
                            value={credits}
                            onChange={(e) => setCredits(e.target.value)} />
                    </div>
                    <div className='add-wrapper'>
                        <input type={'submit'} value='Add' className='btn btn-blue' />
                    </div>
                </form>
            </div>
        </Popup>
    )
}

export default AddCourseModal
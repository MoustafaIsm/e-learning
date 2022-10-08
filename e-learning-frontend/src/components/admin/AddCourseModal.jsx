import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function AddCourseModal() {
    return (
        <Popup trigger={<button className="bold-text btn btn-blue"> Add Course </button>} modal>
            <div className="modal-header">
                <p className="bold-text large-text"> Add Course </p>
            </div>
            <div className="modal-content">
                <form>
                    <div className='form-input-wrapper'>
                        <label> Code </label>
                        <input
                            type="text"
                            placeholder='Code' />
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Name </label>
                        <input
                            type="text"
                            placeholder='Name' />
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Credits </label>
                        <input
                            type="number"
                            placeholder='Credits' />
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
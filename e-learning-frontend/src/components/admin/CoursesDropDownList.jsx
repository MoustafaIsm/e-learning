import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function CoursesDropDownList({ token }) {
    const options = ['one', 'two', 'three'];
    const defaultOption = options[0];
    return (
        <div>
            <Dropdown
                options={options}
                onChange={(e) => { console.log(e.value) }}
                value={defaultOption}
                placeholder="Select a course" />
        </div>
    )
}

export default CoursesDropDownList
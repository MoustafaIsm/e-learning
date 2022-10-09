import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function CoursesDropDownList({ coursesNames }) {

    const defaultOption = 'Select';

    return (
        <div>
            <Dropdown
                options={coursesNames}
                onChange={(e) => { console.log(e.value) }}
                value={defaultOption}
                placeholder="Select a course" />
        </div>
    )
}

export default CoursesDropDownList
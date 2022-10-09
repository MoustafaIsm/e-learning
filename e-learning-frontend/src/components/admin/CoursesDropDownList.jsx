import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { updateCourse } from '../../hooks/admin/updateCourse';

function CoursesDropDownList({ url, token, coursesNames, instructorId }) {

    const defaultOption = 'Select';

    const update = async (e) => {
        updateCourse(url, token, e.value, instructorId);
    }

    return (
        <div>
            <Dropdown
                options={coursesNames}
                onChange={update}
                value={defaultOption}
                placeholder="Select a course" />
        </div>
    )
}

export default CoursesDropDownList
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { updateCourse } from '../../hooks/admin/updateCourse';

function CoursesDropDownList({ url, token, coursesNames, instructorId }) {

    const defaultOption = 'Select';

    const update = async (e) => {
        const formData = new FormData();
        formData.append('code', e.value);
        formData.append('instructor_id', instructorId);
        updateCourse(url, token, formData);
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
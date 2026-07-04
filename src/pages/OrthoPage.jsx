import Ortho from "../components/departments/Ortho";
import Care from "../components/departments/Care";
import Doctorspe from '../components/departments/Doctorspe';
import Form from '../components/departments/Form';

const OrthoPage = () => {
    return (
        <div>
            <Ortho />
            <Care />
            <Doctorspe/>
            <Form department="Orthopedic" />
        </div>
    );
};

export default OrthoPage;
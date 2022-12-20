import { FormikProps } from "formik/dist/types"
import DatePicker from "react-datepicker"


interface FormModel {
    name: string,
    username: string,
    email: string,
    dob: Date | undefined,
    password: string
}



const RegistrationForm: (props: FormikProps<FormModel>) => JSX.Element = ({ handleSubmit, values, handleChange, setFieldValue }) => {


    const dateOnChange = (date: Date | null) => {
        setFieldValue("dob", date)
    }

    return (
        <form onSubmit={handleSubmit} className="form-group">

            <label>Name:</label>
            <input value={values.name} onChange={handleChange} type="text" name="name" placeholder="type your name here" />

            <label>User Name:</label>
            <input value={values.username} onChange={handleChange} type="text" name="username" placeholder="type your username here" />

            <label>Email:</label>
            <input value={values.email} onChange={handleChange} type="email" name="email" placeholder="type your email here" />

            <label>Date Of Birth:</label>
            <DatePicker value={values.dob?.toLocaleDateString()} selected={values.dob} onChange={dateOnChange} name="dob" placeholderText="tap to set your date of birth" />

            <label>Password:</label>
            <input value={values.password} onChange={handleChange} type="password" name="password" placeholder="type your password here" />

            <button type="submit">Submit</button>

        </form>
    )
}
export default RegistrationForm;
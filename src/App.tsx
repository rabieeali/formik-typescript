import { Formik } from "formik"

import "react-datepicker/dist/react-datepicker.css"
import RegistrationForm from "./components/RegistrationForm"

interface FormModel {
  name: string,
  username: string,
  email: string,
  dob: Date | undefined,
  password: string
}




const App = () => {


  return (
    <Formik<FormModel>
      initialValues={{
        name: "",
        username: "",
        email: "",
        dob: undefined, // you want it to have empty
        password: ""
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values))
      }}
      component={RegistrationForm}
    />


  )
}


export default App

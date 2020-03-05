import React, {useState} from 'react';
const RegisterForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: "",
    })
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value 
        });
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
    }
    return(
        <div>
            <h1>Please enter your information so we can sell it.</h1>
            <form onSubmit = {onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/><br></br>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/><br></br>
                <label>Email</label>
                <input type="text" name="email" onChange={onChangeHandler}/><br></br>
                <label>Password</label>
                <input type="text" name="password" onChange={onChangeHandler}/><br></br>
                <label>Confirm Password</label>
                <input type="text" name="confirmPass" onChange={onChangeHandler}/><br></br>
                <input type="submit"/><br></br>
            </form>
    <h3>First Name: {form.firstName}</h3>
    <h3>Last Name: {form.lastName}</h3>
    <h3>Email: {form.email}</h3>
    <h3>Password: {form.password}</h3>
    <h3>Confirm Password: {form.confirmPass}</h3>
        </div>
    );
}
export default RegisterForm;
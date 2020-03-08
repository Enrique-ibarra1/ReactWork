import React, {useState} from 'react';
const RegisterForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: "",
        submitted: false
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
        setForm({
            ...form,
            submitted: true
        })
    }
    return(
        <div>
            {/* {message} */}
            {form.submitted ? <h1>Thanks for your information </h1> : 
            <h1>Pls enter your info</h1>}
            <form onSubmit = {onSubmitHandler}>
                <div> 
                    {form.firstName.length < 2 && (<p>Name must be longer than 2</p>)}
                    {form.lastName.length < 2 &&( <p>Last Name must be longer than 2</p>)}
                    {form.email.length < 2 && (<p>Email Address must be longer than 2</p>)}
                    {form.password.length < 8 && (<p>Password must be at least 8 characters</p>)}
                    {form.confirmPass !== form.password && (<p>Your passwords do not match</p>)}
                </div>
                
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
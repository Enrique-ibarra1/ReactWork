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
    // let message = <h1>Please enter your information so we can sell it.</h1>
    // if(form.submitted){
    //     message = <h1>Thanks for your information we will make many $$$ off it</h1>
    // }
    return(
        <div>
            {/* {message} */}
            {form.submitted ? <h1>Thanks for your information we will make many $$$ off it</h1> : 
            <h1>Pls enter your info so we can sell it</h1>}
            <form onSubmit = {onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/><br></br>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/><br></br>
                <label>Email</label>
                <input type="text" name="email" onChange={onChangeHandler}/><br></br>
                {/* {form.submitted.password.count < 8 && <p>Pass must be at least 8 chars</p>} */}
                <label>Password</label>
                <input type="text" name="password" onChange={onChangeHandler}/><br></br>
                {/* {form.submitted.confirmPass !== form.submitted.password && (
                    <p>Your passwords do not match</p>
                )} */}
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
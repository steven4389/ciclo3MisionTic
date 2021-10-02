import React, {useState} from 'react'
import { useHistory } from 'react-router'
import './login.css'


const Login = () => {

    const history = useHistory();
    const [formValues, setFormValues] = useState({})

    const changeField = (e) => {
        setFormValues({...formValues, 
                      [e.target.name]: e.target.value})
    }

    const submit =(e)=>{
        e.preventDefault();
        
        history.push('/home')
    }

    return (
        <div className="loginComponent">
            <div className="loginBox">
                <form>
                    <div class="mb-3">
                        <input onChange={changeField} value={formValues.username} name="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="usuario" />
                    </div>
                    <div class="mb-3">
                        <input onChange={changeField} value={formValues.password} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="contraseña" />
                    </div>
                    <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login

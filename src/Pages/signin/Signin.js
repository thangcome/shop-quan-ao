import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css"
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../Component/header/Header';

const Signin = (props) => {
    const [values, setValues] = useState({
        username: "",
        password: ""
    });
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidation();
    }
    const handleValidation = () => {
        const { password, username } = values;
        if (password === "") {
            toast.error(
                "password is required!.",
                toastOptions
            );
            return false;
        } else if (username === "") {
            toast.error(
                "Username is required!",
                toastOptions
            );
            return false;
        }
        return true;
    }
    const handleChange = (e) => {

    }
    return (
        <>
            <FormContainer>
                <Header />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='brand'>
                        <h1>ĐĂNG NHẬP</h1>
                    </div>
                    <input
                        type='text'
                        placeholder='Username'
                        name='usename'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type='passowrd'
                        placeholder='Password'
                        name='password'
                        onChange={(e) => handleChange(e)}
                    />
                    <button type='submit'>ĐĂNG NHẬP</button>
                    <span>Không có tài khoản?<Link to="/signup">Đăng ký</Link></span>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    )
}

const FormContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: rgb(196, 255, 255);
    //background-image: url(https://anhdep.tv/attachments/47e71c4521602018e6c4fe9d4edc0622-jpeg.2181/);
    .brand{
        display:flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        h1{
            text-transform: uppercase;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: white;
        border-radius: 0.5rem;
        padding: 2rem 4rem;

        input{
            background-color: transparent;
            padding: 1rem;
            border: 0.12rem solid #4e0eff;
            border-radius: 0.4rem;
            font-size: 1rem;
            &:focus{
                border: 0.1rem solid #997af0;
                outline: none;
            }
        }
        button{
            background-color: #997af0;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.5s ease-in-out;
            &:hover{
                background-color: #4e0eff;
            }
        }
        span{
            color: black;
            text-transform: uppercase;
            a{
                color: #4e0eff;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }
`

export default Signin;
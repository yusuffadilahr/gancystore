import React, { useState } from 'react'
import Button from '../../elements/button/button'
import { authLogin } from '../../../service/auth.service'
import Label from '../../elements/form/label'
import InputTab from '../../elements/form/input'
import { useNavigate } from 'react-router-dom'
import ThreeColorAnimate from '../../elements/icons/threeColorAnimate'
import LogoIcons from '../../elements/icons/logoIcons'
import UserIcons from '../../elements/icons/userIcons'
import PasswordIcons from '../../elements/icons/passwordIcons'

const FormLogin = () => {
    const [loginFail, setLoginFail] = useState('')
    const Navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()

        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        authLogin(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res.data.token)
                alert('Berhasil! Silahkan Masuk!')
                Navigate('/')
            }
            else {
                setLoginFail(res.response.data)
            }
        })
    }

    const handleReload = () => {
        window.location.reload('/login')
    }
    return (
        <div className='flex justify-center w-full h-screen items-center bg-gradient-to-tr from-red-200 to-yellow-300'>
            <div className='flex justify-center h-auto items-center'>
                <div className='bg-white p-2 w-72 h-96 border flex rounded-l-3xl animate-fade-up'>
                    <div className='flex justify-center w-full '>
                        <LogoIcons />
                    </div>
                    <form onSubmit={handleLogin} className='py-24 absolute mr-2'>
                        <UserIcons />
                        <Label
                            htmlFor='username'
                            name='username'
                        >Username</Label>
                        <InputTab
                            type='text'
                            name='username'
                            placeholder='Jhon Doe'
                            autoComplete='username' />
                        <PasswordIcons />
                        <Label
                            htmlFor='password'
                            name='password'
                        >Password</Label>
                        <InputTab
                            type='password'
                            name='password'
                            placeholder='●●●●●●●'
                            autoComplete='current-password'
                            mrg='mb-10' />
                        <Button type='submit' size='w-full'
                            color='bg-gradient-to-r from-purple-950 to-red-950
                    hover:bg-gradient-to-tr hover:from-black hover:to-purple-950'>Log in</Button>
                        <div className='w-full flex justify-center items-center mt-1'>
                            <p className='font-semibold text-sm'>Dont Have an Account?</p>
                        </div>
                    </form>
                </div>
                <div className='lg:flex justify-center items-center rounded-r-3xl bg-black w-72 h-96 hidden animate-fade-up'>
                    <img src="https://i.pinimg.com/originals/a5/82/9c/a5829c4d0771098e5da318ba9a7d5044.jpg" alt=""
                        className='h-full w-full rounded-r-3xl' />
                </div>
            </div>
            {loginFail ?
                <div className='flex justify-center items-center h-screen absolute'>
                    <div className='w-80 h-32 bg-white border animate-fade-up text-center flex justify-center
                    rounded-xl'>
                        <ThreeColorAnimate />
                        <p className='mt-10 font-bold text-red-600 absolute animate-bounce'>{loginFail}!</p>
                        <div className='absolute mt-20'>
                            <Button color='bg-red-600 hover:bg-red-900'
                                size='text-sm' onClick={handleReload}>
                                Try Again
                            </Button>
                        </div>
                    </div>
                </div>
                : ''}
        </div>
    )
}

export default FormLogin

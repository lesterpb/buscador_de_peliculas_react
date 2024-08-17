import React from 'react';
import { Button, Input } from '../atoms/basicComponents';

const LoginForm = () => {
    return (
        <form>
            <Input placeholder='Email'/>
            <Input placeholder='Contraseña' type="password"/>
            <Button type='submit' color='primary'>
                Login
            </Button>
        </form>
    );
}

export default LoginForm;

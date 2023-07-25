import React from 'react';
import { Button, Input } from '../atoms/basicComponents';

const LoginForm = () => {
    return ( 
        <form>
            <Input placeholder='Nombre'/>
            <Input placeholder='Email'/>
            <Input placeholder='Teléfono'/>
            <Input placeholder='Contraseña' type="password"/>
            <Input placeholder='Confirmar contraseña' type="password"/>
            <Button type='submit' color='primary'>
                Registrar
            </Button>
        </form> 
    );
}
 
export default LoginForm;
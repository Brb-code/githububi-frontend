import React, { useState } from 'react';
import { Skeleton, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    const [version, setVersion] = useState(null);

    setTimeout(() => {
        console.log("CAMBIA")
        setVersion("0.1.0")
    }, 5000);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("mmmmmmmmmmmmmmmm")
        return navigate("/panel");
    }

    const formulario = <div >
        <Box component="form" onSubmit={handleLogin}>
            <TextField id="user" label="Usuario" variant="standard" />
            <TextField id="password" label="Contraseña" variant="standard" />
            <Button type='submit' variant="outlined">Ingresar</Button>
        </Box>
    </div>;

    return (
        version ? <div > {formulario} <br /> {version} </div> : <Skeleton animation="wave" />
    )
}

export default Home
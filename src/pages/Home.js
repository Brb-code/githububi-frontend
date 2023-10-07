import React, { useState } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [nombre, setNombre] = useState(null);
  const [pass, setPass] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    let usuario = {
      nombre,
      rol: nombre === "admin" ? "ADMINISTRADOR" : "USUARIO",
    };

    localStorage.setItem("tk", "123123123123123123123123");
    localStorage.setItem("user", JSON.stringify(usuario));
    if (usuario.rol === "ADMINISTRADOR") return navigate("/admin");
    else return navigate("/panel");
  };

  const changeUsuario = (event) => {
    if (event.target.name === "nombre") setNombre(event.target.value);
    else if (event.target.name === "pass") setPass(event.target.value);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent elevation={3} component="form" onSubmit={handleLogin}>
        <h2 variant="h5" gutterBottom>
          Iniciar sesión
        </h2>
        <TextField
          label="Nombre de usuario"
          margin="normal"
          fullWidth
          required
          name="nombre"
          value={nombre}
          onChange={changeUsuario}
        />
        <TextField
          label="Contraseña"
          type="password"
          margin="normal"
          fullWidth
          required
          name="pass"
          value={pass}
          onChange={changeUsuario}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Iniciar sesión
        </Button>
      </CardContent>
    </Card>
  );
};

export default Home;

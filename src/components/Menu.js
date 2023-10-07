import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = (props) => {
  let navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    let tk = localStorage.getItem("tk");
    if (!tk) salir();
    const usuario = JSON.parse(localStorage.getItem("user"));
    if (!usuario) salir();
    else if (usuario.rol !== "ADMINISTRADOR" && usuario.rol !== props.rol)
      salir();
    else setUsuario(usuario);
  }, []);

  const salir = () => {
    localStorage.removeItem("tk");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Proyectos UBI</Typography>
        <div style={{ width: "50%" }}></div>
        <div>
          {usuario && (
            <Button color="inherit">{usuario.nombre.toUpperCase()}</Button>
          )}
          <Button color="inherit" onClick={salir}>
            Salir
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

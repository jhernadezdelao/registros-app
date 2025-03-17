import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { AuthLAyout } from "../layout/AuthLAyout";

export const RegisterPage = () => {
  return (
    <AuthLAyout title="Crear Cuenta">
      <form>
        <Grid2 container direction="column">
          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid2>
          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@mail.com"
              fullWidth
            />
          </Grid2>
          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid2>
          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 item size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Ingresar
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLAyout>
  );
};

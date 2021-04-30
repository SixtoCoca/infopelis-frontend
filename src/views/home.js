import { Button, Grid, makeStyles, Paper, Typography, Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
  },
}));

function Home() {
  const [clientes, setClientes] = useState([]);
  const classes = useStyles();


  async function fetchData() {
    const respuesta = await fetch(
      'http://localhost:8000/api/cliente',
      {
        method: 'GET',
      }
    );
    setClientes(await respuesta.json());
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box >
      <Typography align="center" variant="h1">Infopelis</Typography>

      <Grid container justify="center" spacing={3} >
        {
          clientes.map((cliente) => (
            <Grid item xs={6} key={cliente.id}>
              <Paper className={classes.paper} elevation={3}>{cliente.nombre} {cliente.Apellidos}</Paper>
            </Grid>
          ))
        }
      </Grid>
      <Grid container justify="center">
        <Button variant="contained" color="primary">ss</Button>
      </Grid>
    </Box>
  );
}

export default Home;

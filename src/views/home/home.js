import {
  makeStyles,
  Box,
  Typography,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Productores from './productions';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
  },
  Typography: {
    padding: theme.spacing(2),
    fontFamily: "Times New Roman",
    textAlign: "center",
    textDecoration: "underline",
    fontSize: 50,
  },
}));

function Home() {
  const [valor, setValor] = useState("");
  const [clientes, setClientes] = useState([]);
  const classes = useStyles();
  const [movie, setMovie] = useState({});

  async function fetchData() {
    let respuesta = "";
    if (valor != "") {
      respuesta = await fetch(
        "http://localhost:8000/api/movie?nombre=" + valor,
        {
          method: "GET",
        }
      );
    } else {
      respuesta = await fetch("http://localhost:8000/api/movie", {
        method: "GET",
      });
    }

    setMovie(await respuesta.json());
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(movie);

  if (!movie.response) {
    return (
      <Box>
        <Typography align="center" variant="h1">
          {movie.error}
        </Typography>
        <Container>
          <input
            onChange={(evento) => {
              setValor(evento.target.value);
            }}
            value={valor}
            name="test"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              fetchData();
            }}
          >
            show
          </Button>
        </Container>
      </Box>
    );
  } else {
    let productionNames = [];
    let productionPaths = [];
    if (movie.production) {
      for (const prod of movie.production) {
        productionNames.push(prod.name);
        productionPaths.push(
          `https://www.themoviedb.org/t/p/original${prod.logo_path}`
        );
      }
    }
    return (
      <Box>
        <Typography className={classes.Typography} align="center" variant="h1">
          {movie.title}
        </Typography>
        <Container>
          <input
            onChange={(evento) => {
              setValor(evento.target.value);
            }}
            value={valor}
            name="test"
          />
          <Button
            className={classes.Button}
            variant="contained"
            color="primary"
            onClick={() => {
              fetchData();
            }}
          >
            show
          </Button>
        </Container>

        <Box justifyContent="space-around" display="flex">
          <img src={movie.poster}></img>
          <Grid className={classes.Grid}>
            <Typography align="center"> Actors: {movie.actors}</Typography>
            <Typography align="center"> Country: {movie.country}</Typography>
            <Typography align="center"> Plot: {movie.plot}</Typography>
            <Typography align="center"> Writer: {movie.writer} </Typography>
            <Typography align="center">
              {`Genres: ${movie.genres.map((genre) => genre.name).join(", ")}`}
            </Typography>
            <Typography align="center"> Released: {movie.released}</Typography>
            <Typography align="center"> Homepage: {movie.homepage}</Typography>
            <Typography align="center">
              {" "}
              imdbRating: {movie.imdbRating}
            </Typography>
            <Typography
              className={classes.Typography}
              align="center"
              variant="h2"
            >
              Algunas Opiniones:
            </Typography>
            <Typography align="center"> {movie.review1}</Typography>
            <Typography align="center"> {movie.review2}</Typography>
            <Typography align="center"> {movie.review3}</Typography>
            <Productores production={movie.production}></Productores>
            <Typography
              className={classes.Typography}
              align="center"
              variant="h2"
            >
              Sitios disponibles:
            </Typography>
            <Typography
              className={classes.Typography}
              align="center"
              variant="h3"
            >
              Para comprar:
            </Typography>
            <Typography align="center">
              {movie.providers.buy.forEach(function (elemento, indice, array) {
                console.log(elemento);
              })}
            </Typography>
            <Typography
              className={classes.Typography}
              align="center"
              variant="h3"
            >
              Ver online:
            </Typography>
            <Typography align="center">
              {movie.providers.flatrate.forEach(function (
                elemento,
                indice,
                array
              ) {
                console.log(elemento);
              })}
            </Typography>
            <Typography
              className={classes.Typography}
              align="center"
              variant="h3"
            >
              Para alquilar:
            </Typography>
            <Typography align="center">
              {movie.providers.rent.forEach(function (elemento, indice, array) {
                console.log(elemento);
              })}
            </Typography>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default Home;

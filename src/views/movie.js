import {
  makeStyles,
  Box,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  Typography: { padding: theme.spacing(2) },
  Button: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
  },
}));
function Movie() {
  const [valor, setValor] = useState("");
  const [error, setError] = useState("");
  const [movie, setMovie] = useState([]);
  const classes = useStyles();

  async function fetchData() {
    var respuesta = "";
    if (valor != "") {
      respuesta = await fetch("http://localhost:8000/api/omdb/" + valor, {
        method: "GET",
      });
    } else {
      respuesta = await fetch("http://localhost:8000/api/omdb", {
        method: "GET",
      });
    }

    setMovie(await respuesta.json());
    console.log(movie);
  }

  useEffect(() => {
    fetchData();
  }, []);
  if (movie.Response == "False") {
    return (
      <Box>
        <Typography align="center" variant="h1">
          {movie.Error}
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
      </Box>);
  } else {
    return (
      <Box>
        <Typography align="center" variant="h1">
          {movie.Title}
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

        <Container>
          <img src={movie.Poster}></img>
          <Typography align="center"> Actors: {movie.Actors}</Typography>
          <Typography align="center"> Country: {movie.Country}</Typography>
          <Typography align="center"> Plot: {movie.Plot}</Typography>
          <Typography align="center">
            {" "}
            Production: {movie.Production}
          </Typography>
          <Typography align="center"> Writer: {movie.Writer}</Typography>
          <Typography align="center"> Released: {movie.Released}</Typography>
          <Typography align="center">
            {" "}
            imdbRating: {movie.imdbRating}
          </Typography>
        </Container>
      </Box>
    );
  }
}

export default Movie;

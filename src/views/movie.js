import {
  makeStyles,
  Box,
  Typography,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  Typography: { 
    padding: theme.spacing(2),
    fontFamily: "Times New Roman",
    textAlign: "center",
    textDecoration: "underline",
    fontSize: 50,
  },
    
  Button: {
    display: "inline",
    fontSize: 20,
    textcolor: theme.palette.secondary.contrastText,
 	 textAlign: "center",
 	 userSelect: "none",
 	 backgroundColor: "transparent",
 	 border: "solid lightblue",
 	 padding: theme.spacing(2),
 	 lineHeight: 0.75,
 	 borderRadius: 0.15,
 	 padding: 10,
 	 margin: 10,
  },
  
  Grid: {
	 marginTop: "10%",
  }
  
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
        <Typography class ={classes.Typography}align="center" variant="h1">
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
           	class={classes.Button}
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
          <img src={movie.Poster}></img>
          <Grid class={classes.Grid}>
          <Typography align="center"> Actors: {movie.Actors}</Typography>
          <Typography align="center"> Country: {movie.Country}</Typography>
          <Typography align="center"> Plot: {movie.Plot}</Typography>
          <Typography align="center"> Production: {movie.Production}</Typography>
          <Typography align="center"> Writer: {movie.Writer}</Typography>
          <Typography align="center"> Released: {movie.Released}</Typography>
          <Typography align="center"> imdbRating: {movie.imdbRating}</Typography>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default Movie;

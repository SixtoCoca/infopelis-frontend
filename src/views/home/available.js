import { makeStyles, Paper, Typography } from "@material-ui/core";
import { title } from "../../lib/classes";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
  },
  title: title(theme),
}));

function Available(prov) {
  const { available } = prov;
  const classes = useStyles();
  let buy = "";
  if (prov.Available.buy) {
    buy = (
      <Typography className={classes.Typography} align="center" variant="h3">
        Para comprar:
        {prov.Available.buy.map((b) => {
          return (
            <>
              <Typography>{b.provider_name}</Typography>
              <img
                width="5%"
                src={`https://www.themoviedb.org/t/p/original${b.logo_path}`}
              />
            </>
          );
        })}
      </Typography>
    );
  } else {
    buy = (
      <Typography className={classes.Typography} align="center" variant="h3">
        Para comprar:
        <Typography>No hay sitios disponibles</Typography>
      </Typography>
    );
  }
  let rent = "";
  if (prov.Available.rent) {
    rent = (
      <Typography className={classes.Typography} align="center" variant="h3">
        Para alquilar:
        {prov.Available.rent.map((r) => {
          return (
            <>
              <Typography>{r.provider_name}</Typography>
              <img
                width="5%"
                src={`https://www.themoviedb.org/t/p/original${r.logo_path}`}
              />
            </>
          );
        })}
      </Typography>
    );
  } else {
    rent = (
      <Typography className={classes.Typography} align="center" variant="h3">
        Para alquilar:
        <Typography>No hay sitios disponibles</Typography>
      </Typography>
    );
  }
  let flatrate = "";
  if (prov.Available.flatrate) {
    flatrate = (
      <Typography className={classes.Typography} align="center" variant="h3">
        Ver online:
        {prov.Available.flatrate.map((fl) => {
          return (
            <>
              <Typography>{fl.provider_name}</Typography>
              <img
                width="5%"
                src={`https://www.themoviedb.org/t/p/original${fl.logo_path}`}
              />
            </>
          );
        })}
      </Typography>
    );
  } else {
    flatrate = (
      <Typography className={classes.Typography} align="center" variant="h3">
        Ver online:
        <Typography>No hay sitios disponibles</Typography>
      </Typography>
    );
  }
  return (
    <>
      <Paper className={classes.paper}>
        <Typography className={classes.Typography} align="center" variant="h2">
          Sitios disponibles:
        </Typography>

        {buy}
        {flatrate}
        {rent}
      </Paper>
    </>
  );
}

export default Available;

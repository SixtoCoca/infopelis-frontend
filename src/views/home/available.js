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
  let flatrate = "";
  let rent = "";
  console.log(prov);
  if (prov.Available !== undefined) {
    if (prov.Available.buy) {
      buy = (
        <Typography className={classes.Typography} align="center" variant="h3">
          Buy:
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
          Buy:
          <Typography>Not available</Typography>
        </Typography>
      );
    }
    if (prov.Available.rent) {
      rent = (
        <Typography className={classes.Typography} align="center" variant="h3">
          Rent:
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
          Rent:
          <Typography>Not available</Typography>
        </Typography>
      );
    }
    if (prov.Available.flatrate) {
      flatrate = (
        <Typography className={classes.Typography} align="center" variant="h3">
          Watch online:
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
          Watch online:
          <Typography>Not available</Typography>
        </Typography>
      );
    }
  } else {
    buy = (
      <Typography className={classes.Typography} align="center" variant="h3">
        Buy:
        <Typography>Not available</Typography>
      </Typography>
    );
    rent = (
      <Typography className={classes.Typography} align="center" variant="h3">
        Rent:
        <Typography>Not available</Typography>
      </Typography>
    );
    flatrate = (
      <Typography className={classes.Typography} align="center" variant="h3">
        Watch online:
        <Typography>Not available</Typography>
      </Typography>
    );
  }

  return (
    <>
      <Paper className={classes.paper}>
        <Typography className={classes.Typography} align="center" variant="h2">
          Available sites:
        </Typography>

        {buy}
        {flatrate}
        {rent}
      </Paper>
    </>
  );
}

export default Available;

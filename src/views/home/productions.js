import { makeStyles, Typography, Paper } from "@material-ui/core";
import { title } from "../../lib/classes";
import React from "react";
import { red,pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
  },
  title: title(theme),
}));

function Productores(props) {
  const { production } = props;
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Typography className={classes.title} align="center" variant="h2">
          Productores:
        </Typography>
        <Typography align="center">
          {production.map((prod) => {
            return (
              <>
                <Typography>{prod.name}</Typography>
                <img
                  width="5%"
                  src={`https://www.themoviedb.org/t/p/original${prod.logo_path}`}
                />
              </>
            );
          })}
        </Typography>
      </Paper>
    </>
  );
}

export default Productores;

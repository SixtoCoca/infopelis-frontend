import { makeStyles, Typography } from "@material-ui/core";
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

function Productores(props) {
  const { production } = props;
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}

export default Productores;

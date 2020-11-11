import { Grid, makeStyles, Paper } from '@material-ui/core';
import './App.css';
import User from './components/user'
import Header from './components/header'

const useStyles = makeStyles((theme) => ({
  description : {
    padding: 35
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Header></Header>
      <Grid container spacing={3}>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={3}>
          <Paper>
            <User></User>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quod, sapiente molestias optio labore ad incidunt voluptatibus alias fugiat odit natus eveniet nemo amet neque! Cupiditate, sapiente. Tenetur, adipisci commodi!
          </Paper>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
      </Grid>
    </div>
  );
}

export default App;

import { AppBar, Grid, Paper } from '@material-ui/core';
import './App.css';
import User from './components/user'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <User></User>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quod, sapiente molestias optio labore ad incidunt voluptatibus alias fugiat odit natus eveniet nemo amet neque! Cupiditate, sapiente. Tenetur, adipisci commodi!</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

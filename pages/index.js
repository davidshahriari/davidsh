import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ElevateAppBar from 'src/components/ElevateAppBar';
import Header from 'src/components/Header';
import Intro from 'src/components/Intro';
import ScrollTop from 'src/components/ScrollTop';
import Copyright from 'src/components/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
  },
}));

export default function Index(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <ElevateAppBar />
        <main>
          <div className={classes.content}>
            <Divider />
            <Header />
            <Intro />
          </div>
        </main>
        {/* <Copyright /> */}
      </div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

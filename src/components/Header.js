import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  section: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '1140px',
    padding: theme.spacing(0, 2, 6),
  },
  avatar: {
    width: '50px',
    height: '50px',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 'border-radius',
    backgroundColor: 'transparent !important',
    cursor: 'pointer',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <div className="jarallax">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h2" align="center">
                We craft beautiful websites and digital products.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary" align="center">
                We design, develop and launch websites and products for
                startups, companies and ourselves.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                wrap="nowrap"
              >
                <div className="section-header__cta-item-wrapper">
                  <Button variant="contained">Contact me</Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </section>
      <Avatar className={classes.avatar}>
        <KeyboardArrowDownIcon color="primary" />
      </Avatar>
    </div>
  );
}

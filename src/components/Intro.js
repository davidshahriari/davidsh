import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: `calc(100vh - ${theme.spacing(8)})`,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'transparent',
    backgroundImage:
      'linear-gradient(180deg, rgb(247, 249, 250) 100%, #fff 0%)',
  },
  section: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '1140px',
    padding: theme.spacing(0, 2, 6),
  },
  image: { display: 'block', width: '100%', height: '100%' },
  aos: {
    color: 'transparent',
    display: 'inline-block',
    height: 'auto',
    width: 'auto',
  },
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <div className="jarallax">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" color="textPrimary">
                        Mobile App & Web Development
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="textSecondary" align="left">
                        Our mission is to help you to grow your design skills,
                        meet and connect with professional dsigners who share
                        your passions.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  className="aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <span
                    className={clsx(
                      classes.aos,
                      'lazy-load-image-background opacity lazy-load-image-loaded'
                    )}
                  >
                    <img
                      width="auto"
                      height="auto"
                      alt="Integrations"
                      src="/images/illustrations/progressive-app.svg"
                      className={classes.image}
                    />
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary" align="center">
                Software Engineer
              </Typography>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}

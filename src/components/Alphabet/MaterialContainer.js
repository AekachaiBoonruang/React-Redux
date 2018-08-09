import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 420,
      marginLeft: 20,
      marginBottom: 20,
      textAlign: 'center',
    },
    gridHeader: {
      width: 420,
      height: 50,
      borderStyle: 'solid',
      backgroundColor: 'yellow',
      
    },
    gridList: {
      width: 70,
      height: 70,
      textAlign: 'center',
      borderStyle: 'solid',
    }
  });

function ImageGridList(props) {
    const { classes, alphabet} = props;
    const ListGridAlphabet = alphabet.map((alphabet) =>
    <Grid className={classes.gridList} key={alphabet}> 
          <p>{alphabet}</p>
    </Grid>
    );

  return (
    <div className={classes.root}>
      <Grid className={classes.gridHeader}> 
            <b>German Alaphabet</b>
      </Grid>
      {ListGridAlphabet}
      
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);

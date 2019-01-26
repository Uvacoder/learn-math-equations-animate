import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = theme => ({
  card: {
    position: 'relative',
    height: 512,
    display: 'flex',
    color: '#eee',
    textAlign: 'justify',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary,
    marginBottom: theme.spacing.unit*3,
    borderRadius: theme.spacing.unit*0.5,
    '@media (max-width: 768px)': {
      justifyContent: 'left',
    },
  },
})

/**
 * Paper
 * @type {{children: Object, classes: Object, style: Object}}
 */
Paper.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object.isRequired,
  style: PropTypes.object
}

function Paper ({classes, children, style}) {
  return (
    <div className={classes.card} style={style}>
      {children}
    </div>
  )
}

export default withStyles(styles)(Paper)
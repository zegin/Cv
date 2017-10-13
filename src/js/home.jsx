import React, { Component } from 'react' // eslint-disable-line
import muiThemeable from 'material-ui/styles/muiThemeable'
import FontIcon from 'material-ui/FontIcon'

class Home extends React.Component {
  render() {
    const styles = {
      skillbody: {
        alignItems: 'left',
      },
      home: {
        color: this.props.muiTheme.palette.alternateTextColor,
        textAlign: 'center',
        height: 'calc(100vh - ' + this.props.muiTheme.button.iconButtonSize + 'px)'
      },
      home_title: {
        paddingTop: '25vh',
        fontSize: '3.2em',
        marginBottom: 0,
        marginTop: 0,
      },
      home_subTitle: {
        fontSize: '2em'
      },
      home_email: {
        display: 'flex',
        marginTop: '5vh'
      },
      home_emailWrapper: {
        margin: 'auto',
        display: 'flex',
        fontSize: '1.1rem'
      },
      home_emailIcon: {
        margin: 'auto',
        marginRight: '.5em',
        paddingTop: '2px',
        color: this.props.muiTheme.palette.alternateTextColor,
        fontSize: '1.1rem'
      },
      home_phone: {
        display: 'flex',
        marginTop: '1vh'
      },
      home_phoneWrapper: {
        margin: 'auto',
        display: 'flex',
        fontSize: '1.1rem'
      },
      home_phoneIcon: {
        margin: 'auto',
        marginRight: '.5em',
        paddingTop: '2px',
        color: this.props.muiTheme.palette.alternateTextColor,
        fontSize: '1.1rem'
      }
    }
    return (
      <div style={styles.home}>
        <p style={styles.home_title}>Gilian Gonnord</p>
        <p style={styles.home_subTitle}>Développeur FullStack</p>
        <div style={styles.home_email}>
          <div style={styles.home_emailWrapper}>
            <FontIcon style={styles.home_emailIcon} className="material-icons">email</FontIcon>
            Gilian.gonnord4b@laposte.net
          </div>
        </div>
        <div style={styles.home_phone}>
          <div style={styles.home_phoneWrapper}>
            <FontIcon style={styles.home_phoneIcon} className="material-icons">phone</FontIcon>
            06 74 94 61 23
          </div>
        </div>
      </div>
    )
  }
}

export default muiThemeable()(Home)

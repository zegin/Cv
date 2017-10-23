import React, { Component } from 'react' // eslint-disable-line
import muiThemeable from 'material-ui/styles/muiThemeable'
import Paper from 'material-ui/Paper'
import Chip from 'material-ui/Chip'

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const styles = {
      titleWrapper: {
        backgroundColor: this.props.muiTheme.palette.primary1Color,
      },
      title: {
        color: this.props.muiTheme.palette.alternateTextColor
      },
    }
    return (
      <div className="profile--wrapper">
        <Paper className="profile--paper left">
          <div className="profile--title_wrapper" style={styles.titleWrapper}>
            <span style={styles.title}>
              Savoir-&ecirc;tre
            </span>
          </div>
          <div className="profile--content_wrapper">
            <Chip className="profile--chip">Discr&eacute;tion</Chip>
            <Chip className="profile--chip">Sens de l&apos;observation</Chip>
            <Chip className="profile--chip">S&eacute;rieux</Chip>
            <Chip className="profile--chip">Logique</Chip>
            <Chip className="profile--chip">Force de proposition</Chip>
            <Chip className="profile--chip">Autonome</Chip>
            <Chip className="profile--chip">Travail d&apos;&eacute;quipe</Chip>
          </div>
        </Paper>
        <Paper className="profile--paper middle">
          <div className="profile--title_wrapper" style={styles.titleWrapper}>
            <span style={styles.title}>
              Parcours
            </span>
          </div>
          <div className="profile--content_wrapper">
            <ul>
              <li>
                <span className="profile--content_time">2016 : </span>
                B.T.S Syst&egrave;me information organisation (solution logiciel et application m&eacute;tier)
              </li>
              <li>
                <span className="profile--content_time">2015 : </span>
                Baccalaur&eacute;at Syst&egrave;me technique management et gestion
              </li>
            </ul>
          </div>
        </Paper>
        <Paper className="profile--paper right">
          <div className="profile--title_wrapper" style={styles.titleWrapper}>
            <span style={styles.title}>
              Activit&eacute;s et int&eacute;r&ecirc;ts professionnels
            </span>
          </div>
          <div className="profile--content_wrapper">
            <Chip className="profile--chip">Nouvelles technologies</Chip>
            <Chip className="profile--chip">Exp&eacute;rience utilisateur</Chip>
            <Chip className="profile--chip">Chiffres</Chip>
            <Chip className="profile--chip">Autonomie</Chip>
            <Chip className="profile--chip">Musique</Chip>
            <Chip className="profile--chip">Litt&eacute;rature</Chip>
            <Chip className="profile--chip">Jeux vid&eacute;o</Chip>
          </div>
        </Paper>
      </div>
    )
  }
}

export default muiThemeable()(Profile)

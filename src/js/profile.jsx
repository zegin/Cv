import React from 'react'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import { withTheme } from '@material-ui/core/styles'

const Profile = props => {
  const { theme } = props
  const styles = {
    titleWrapper: {
      backgroundColor: theme.palette.primary1Color,
    },
    title: {
      color: theme.palette.alternateTextColor
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
          <Chip label='Discr&eacute;tion' className="profile--chip" />
          <Chip label='Sens de l&apos;observation' className="profile--chip" />
          <Chip label='S&eacute;rieux' className="profile--chip" />
          <Chip label='Logique' className="profile--chip" />
          <Chip label='Force de proposition' className="profile--chip" />
          <Chip label='Autonome' className="profile--chip" />
          <Chip label='Travail d&apos;&eacute;quipe' className="profile--chip" />
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
          <Chip label='Nouvelles technologies' className="profile--chip"/>
          <Chip label='Exp&eacute;rience utilisateur' className="profile--chip"/>
          <Chip label='Chiffres' className="profile--chip"/>
          <Chip label='Autonomie' className="profile--chip"/>
          <Chip label='Musique' className="profile--chip"/>
          <Chip label='Litt&eacute;rature' className="profile--chip"/>
          <Chip label='Jeux vid&eacute;o' className="profile--chip"/>
        </div>
      </Paper>
    </div>
  )
}

export default withTheme()(Profile)

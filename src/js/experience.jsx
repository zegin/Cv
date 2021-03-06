import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withTheme } from '@material-ui/core/styles'


import styled from 'styled-components'

const Left = styled.span`
  float: left;
`

const Right = styled.span`
  float: right;
`

const TitleWrapper = styled.div`
  background-color: ${props => props.theme.palette.primary1Color};
  color: ${props => props.theme.palette.alternateTextColor};
`

const Experience = props => {
  const { theme } = props
  const styles = {
    titleWrapper: {
      backgroundColor: theme.palette.primary1Color,
      color: theme.palette.alternateTextColor
    }
  }
  return (
    <div style={styles.grid} className="xp--grid">
      <Paper className="xp--top" style={styles.paper}>
        <TitleWrapper className="xp--titleWrapper">
          <Left >UDAF 49 -- Développeur Web</Left>
          <Right >20/01/17 - Aujourd&apos;hui</Right>
        </TitleWrapper>
        <div className="xp--content xp--contentTop">
          <div className="xp--contentHeader">
            D&eacute;veloppement de l&apos;intranet, de divers outils et suppl&eacute;ance du responsable informatique
          </div>
          <ul className="xp--contentLeft">
            <li>HTML / CSS (SASS)</li>
            <li>JS (Node, Express, React, Jquery)</li>
            <li>PHP (Laravel, Joomla)</li>
            <li>Base de donn&eacute;es (MySql, MongoDB)</li>
            <li>Bootstrap</li>
            <li>Design (Flat, Material)</li>
            <li>Sphinx doc, ApiDoc</li>
          </ul>
          <ul className="xp--contentRight">
            <li>Aide aux utilisateurs</li>
            <li>Déploiement de mat&eacute;riel</li>
            <li>Active Directory</li>
            <li>Exchange</li>
          </ul>
        </div>
      </Paper>
      <Paper className="xp--botLeft" style={styles.paper}>
        <TitleWrapper className="xp--titleWrapper">
          <span style={styles.left}>AEON Creation -- Stagiaire</span>
          <span style={styles.right}>2016 - 2 mois</span>
        </TitleWrapper>
        <div className="xp--content xp--contentTop">
          <div className="xp--contentHeader">
            Cr&eacute;ation d&apos;une API d&apos;optimisation d&apos;image
          </div>
          <ul className="xp--contentBot">
            <li>Python</li>
            <li>Flask</li>
            <li>Git / GitBash</li>
            <li>Dlib</li>
            <li>Sphinx Doc</li>
            <li>Analyse d&apos;image: D&eacute;tection faciale, couleur, flou, contour</li>
          </ul>
        </div>
      </Paper>
      <Paper className="xp--botRight" style={styles.paper}>
        <TitleWrapper className="xp--titleWrapper">
          <span style={styles.left}>E.N.S.A.M -- Stagiaire</span>
          <span style={styles.right}>2015 - 1 Mois</span>
        </TitleWrapper>
        <div className="xp--content xp--contentTop">
          <div className="xp--contentHeader">
            Analyse et maintenance du parc informatique
          </div>
          <ul className="xp--contentBot">
            <li>Cacti</li>
            <li>Ghost</li>
            <li>Glpi / FusionInventory</li>
            <li>Benchmark</li>
            <li>Aide aux utilisateurs</li>
          </ul>
        </div>
      </Paper>
    </div>
  )
}

Experience.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default withTheme()(Experience)

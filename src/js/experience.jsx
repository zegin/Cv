import React, { Component } from 'react' // eslint-disable-line
import muiThemeable from 'material-ui/styles/muiThemeable'
import Paper from 'material-ui/Paper'

class Experience extends React.Component {
  render() {
    const styles = {
      grid: {
        margin: '5vh 5vw',
        paddin: 0,
        display: 'grid',
        gridTemplateColumns: '[startC] 1fr [middleC] 1fr [endC]',
        gridTemplateRows: '[startR] 36vh [middleR] 36vh [endR]',
        gridGap: '3rem'
      },
      paper: {
      },
      top: {
        gridArea: 'startR / startC / middleR / endC',
      },
      botLeft: {
        gridArea: 'middleR / startC / endR / middleC',
      },
      botRight: {
        gridArea: 'middleR / middleC / endR / endC',
      },
      titleWrapper: {
        boxSizing: 'border-box',
        backgroundColor: this.props.muiTheme.palette.primary1Color,
        height: '56px',
        padding: '0px 24px',
        marginBottom: '1rem',
        paddingRight: '16px',
        lineHeight: '56px',
        fontSize: '20px',
        fontFamily: 'Roboto, sans-serif',
        position: 'relative',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: this.props.muiTheme.palette.alternateTextColor
      },
      left: {
        float: 'left',
      },
      right: {
        float: 'right',
      },
      content: {
        padding: '1rem 2rem',
        display: 'grid',
      },
      topContent: {
        gridTemplateColumns: '35% 35%',
        gridTemplateRows: 'auto',
        gridTemplateAreas: '"header header""left right"'
      },
      contentItemHeader: {
        gridArea: 'header'
      },
      contentItemLeft: {
        gridArea: 'left',
      },
      contentItemRight: {
        borderLeft: '1px solid rgba(0, 0, 0, .1)',
        paddingLeft: '5rem',
        gridArea: 'right',
      },
    }
    return (
      <div style={styles.grid}>
        <Paper style={Object.assign({},styles.paper, styles.top)} zDepth={2}>
          <div style={styles.titleWrapper}>
            <span style={styles.left}>UDAF 49 -- Développeur Web</span>
            <span style={styles.right}>20/01/17 - Aujourd&apos;hui</span>
          </div>
          <div style={Object.assign({},styles.content, styles.topContent)}>
            <div style={styles.contentItemHeader}>
              D&eacute;veloppement de l&apos;intranet, de divers outils et suppl&eacute;ance du responsable informatique
            </div>
            <ul style={styles.contentItemLeft}>
              <li>HTML / CSS (SASS)</li>
              <li>JS (Node, Express, React, Jquery)</li>
              <li>PHP (Laravel, Joomla)</li>
              <li>Base de donn&eacute;es (MySql, MongoDB)</li>
              <li>Bootstrap</li>
              <li>Design (Flat, Material)</li>
              <li>Sphinx doc, ApiDoc</li>
            </ul>
            <ul style={styles.contentItemRight}>
              <li>Aide aux utilisateurs</li>
              <li>Déploiement de mat&eacute;riel</li>
              <li>Active Directory</li>
              <li>Exchange</li>
            </ul>
          </div>
        </Paper>
        <Paper style={Object.assign({},styles.paper, styles.botLeft)} zDepth={2}>
          <div style={styles.titleWrapper}>
            <span style={styles.left}>AEON Creation -- Stagiaire</span>
            <span style={styles.right}>2016 - 2 mois</span>
          </div>
          <div style={styles.content}>
            Cr&eacute;ation d&apos;une API d&apos;optimisation d&apos;image
            <ul>
              <li>Python</li>
              <li>Flask</li>
              <li>Git / GitBash</li>
              <li>Dlib</li>
              <li>Sphinx Doc</li>
              <li>Analyse d&apos;image: D&eacute;tection faciale, couleur, flou, contour</li>
            </ul>
          </div>
        </Paper>
        <Paper style={Object.assign({},styles.paper, styles.botRight)} zDepth={2}>
          <div style={styles.titleWrapper}>
            <span style={styles.left}>E.N.S.A.M -- Stagiaire</span>
            <span style={styles.right}>2015 - 1 Mois</span>
          </div>
          <div style={styles.content}>
            Analyse et maintenance du parc informatique
            <ul>
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
}

export default muiThemeable()(Experience)

import React, { Component } from 'react' // eslint-disable-line
import muiThemeable from 'material-ui/styles/muiThemeable'
import Paper from 'material-ui/Paper'

class Experience extends React.Component {
  render() {
    const styles = {
      left: {
        float: 'left',
      },
      right: {
        float: 'right',
      },
      titleWrapper: {
        backgroundColor: this.props.muiTheme.palette.primary1Color,
        color: this.props.muiTheme.palette.alternateTextColor
      }
    }
    const GridItem = (props) => (
      <Paper className={props.class} style={styles.paper} zDepth={2}>
        <div className="xp--titleWrapper" style={styles.titleWrapper}>
          <span style={styles.left}>{props.headerLeft}</span>
          <span style={styles.right}>{props.headerRight}</span>
        </div>
        <div className="xp--content xp--contentTop">
          <div className="xp--contentHeader">
            {props.contentHeader}
          </div>
          {props.children}
        </div>
      </Paper>
    )
    return (
      <div style={styles.grid} className="xp--grid">
        <GridItem class="xp--top"
          headerLeft="UDAF 49 -- Développeur Web"
          headerRight="20/01/17 - Aujourd&apos;hui"
          contentHeader="D&eacute;veloppement de l&apos;intranet, de divers outils et suppl&eacute;ance du responsable informatique">
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
        </GridItem>
        <GridItem class="xp--botLeft"
          headerLeft="AEON Creation -- Stagiaire"
          headerRight="2016 - 2 mois"
          contentHeader="Cr&eacute;ation d&apos;une API d&apos;optimisation d&apos;image">
          <ul className="xp--contentBot">
            <li>Python</li>
            <li>Flask</li>
            <li>Git / GitBash</li>
            <li>Dlib</li>
            <li>Sphinx Doc</li>
            <li>Analyse d&apos;image: D&eacute;tection faciale, couleur, flou, contour</li>
          </ul>
        </GridItem>
        <GridItem class="xp--botRight"
          headerLeft="E.N.S.A.M -- Stagiaire"
          headerRight="2015 - 1 Mois"
          contentHeader="Analyse et maintenance du parc informatique">
          <ul className="xp--contentBot">
            <li>Cacti</li>
            <li>Ghost</li>
            <li>Glpi / FusionInventory</li>
            <li>Benchmark</li>
            <li>Aide aux utilisateurs</li>
          </ul>
        </GridItem>
      </div>
    )
  }
}

export default muiThemeable()(Experience)

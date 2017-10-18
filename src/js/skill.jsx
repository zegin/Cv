import React, { Component } from 'react' // eslint-disable-line
import muiThemeable from 'material-ui/styles/muiThemeable'
import CircularProgressbar from 'react-circular-progressbar'
import Paper from 'material-ui/Paper'

class Tile extends React.Component{
  render() {
    return (
      <div className="skill--content_tile">
        <CircularProgressbar {...this.props} />
        <p>{this.props.children}</p>
      </div>
    )
  }
}


class Skill extends React.Component {
  render() {
    const styles = {
      paper: {
        padding: '0',
        marginTop: '3rem',
      },
      titleWrapper: {
        boxSizing: 'border-box',
        backgroundColor: this.props.muiTheme.palette.primary1Color,
        height: '56px',
        padding: '0px 24px',
        marginBottom: '1rem'
      },
      title: {
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
    }
    return (
      <div className="skill--wrapper">
        <Paper style={styles.paper} zDepth={2}>
          <div style={styles.titleWrapper}>
            <span style={styles.title}>
              Front end
            </span>
          </div>
          <div style={styles.contentWrapper} className="skill--content_wrapper">
            <Tile percentage={100}>
              HTML5
            </Tile>
            <Tile percentage={90}>
              SASS
            </Tile>
            <Tile percentage={70}>
              React <span className="subText">(Webpack/Babel)</span>
            </Tile>
            <Tile percentage={90}>
              Jquery
            </Tile>
            <Tile percentage={100}>
              Bootstrap
            </Tile>
          </div>
        </Paper>

        <Paper style={styles.paper} zDepth={2}>
          <div style={styles.titleWrapper}>
            <span style={styles.title}>
              Back end
            </span>
          </div>
          <div style={styles.contentWrapper} className="skill--content_wrapper">
            <Tile percentage={100}>
              PHP
            </Tile>
            <Tile percentage={70}>
              Express
            </Tile>
            <Tile percentage={100}>
              SQL
            </Tile>
            <Tile percentage={60}>
              MongoDB
            </Tile>
            <Tile percentage={100}>
              C#
            </Tile>
            <Tile percentage={80}>
              Python
            </Tile>
          </div>
        </Paper>

        <Paper style={styles.paper} zDepth={2}>
          <div style={styles.titleWrapper}>
            <span style={styles.title}>
              Autres
            </span>
          </div>
          <div style={styles.contentWrapper} className="skill--content_wrapper">
            <Tile percentage={100}>
              Windows
            </Tile>
            <Tile percentage={100}>
              Linux
            </Tile>
            <Tile percentage={80}>
              Apache
            </Tile>
            <Tile percentage={90}>
              Git
            </Tile>
            <Tile percentage={70}>
              Agile
            </Tile>
            <Tile percentage={80}>
              Englais
            </Tile>
          </div>
        </Paper>
      </div>
    )
  }
}

export default muiThemeable()(Skill)

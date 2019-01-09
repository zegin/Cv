import React, { Component } from 'react' // eslint-disable-line
import muiThemeable from 'material-ui/styles/muiThemeable'
import CircularProgressbar from 'react-circular-progressbar'
import Paper from 'material-ui/Paper'

class Tile extends React.Component{
  render() {
    return (
      <div className="skill--content_tile">
        <CircularProgressbar {...this.props} initialAnimation={true}/>
        <p>{this.props.children}</p>
      </div>
    )
  }
}


class Skill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentages: [0, 0, 0, 0, 0]
    }
  }

  static getDerivedStateFromProps(props) {
    return {percentages: (props.index === 1 ? [60, 70, 80, 90, 100] : [0, 0, 0, 0, 0])}
  }

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
            <Tile percentage={this.state.percentages[4]}>
              HTML5
            </Tile>
            <Tile percentage={this.state.percentages[3]}>
              SASS
            </Tile>
            <Tile percentage={this.state.percentages[1]}>
              React <span className="subText">(Webpack/Babel)</span>
            </Tile>
            <Tile percentage={this.state.percentages[3]}>
              Jquery
            </Tile>
            <Tile percentage={this.state.percentages[4]}>
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
            <Tile percentage={this.state.percentages[4]}>
              PHP
            </Tile>
            <Tile percentage={this.state.percentages[1]}>
              Express
            </Tile>
            <Tile percentage={this.state.percentages[4]}>
              SQL
            </Tile>
            <Tile percentage={this.state.percentages[0]}>
              MongoDB
            </Tile>
            <Tile percentage={this.state.percentages[4]}>
              C#
            </Tile>
            <Tile percentage={this.state.percentages[2]}>
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
            <Tile percentage={this.state.percentages[4]}>
              Windows
            </Tile>
            <Tile percentage={this.state.percentages[4]}>
              Linux
            </Tile>
            <Tile percentage={this.state.percentages[2]}>
              Apache
            </Tile>
            <Tile percentage={this.state.percentages[3]}>
              Git
            </Tile>
            <Tile percentage={this.state.percentages[1]}>
              Agile
            </Tile>
            <Tile percentage={this.state.percentages[3]}>
              Anglais
            </Tile>
          </div>
        </Paper>
      </div>
    )
  }
}

export default muiThemeable()(Skill)

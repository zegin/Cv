import React from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/blueGrey'

import Home from './home'
import Skill from './skill'
import Experience from './experience'
import Profile from './profile'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import SuperAgent from 'superagent'

const theme = createMuiTheme({
  palette: {
    primary: pink,
    primary1Color: pink[500],
    accent1Color: pink[500],
    textColor: grey[900],
    alternateTextColor: '#fff',
    backgroundColor: blueGrey[500],
  },
  tabs: {
    selectedTextColor: blueGrey[200],
    textColor: '#fff'
  },
  typography: {
    useNextVariants: true,
  },
})

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
    }
    SuperAgent.get('http://localhost:3000', err => {
      if(err){
        throw err
      }
    })
  }

  handleChange = (event, value) => {
    this.setState({
      slideIndex: value,
    })
  }

  render() {
    const styles = {
      back: {
        backgroundColor: theme.palette.backgroundColor,
      },
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
      slide: {
        padding: 10,
      },
      tab: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      }
    }
    const { slideIndex } = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <div style={styles.back}>
          <Tabs
            onChange={this.handleChange}
            value={slideIndex}
            className="tabs"
            // tabItemContainerStyle={styles.tab}
          >
            <Tab className="tab" label="Accueil" value={0} />
            <Tab className="tab" label="Compétences" value={1} />
            <Tab className="tab" label="Expériences" value={2} />
            <Tab className="tab" label="Profil" value={3} />
          </Tabs>
          <SwipeableViews
            index={slideIndex}
            onChangeIndex={this.handleChange}
            animateHeight
            style={{ minHeight: 'calc(100vh - 48px)' }}
          >
            <div>
              <Home/>
            </div>
            <div style={styles.slide}>
              <Skill index={slideIndex}/>
            </div>
            <div style={styles.slide}>
              <Experience/>
            </div>
            <div style={styles.slide}>
              <Profile/>
            </div>
          </SwipeableViews>

        </div>
      </MuiThemeProvider>
    )
  }
}

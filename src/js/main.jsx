import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {pink500, white, darkBlack, blueGrey500, blueGrey200 } from 'material-ui/styles/colors'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import Home from './home'
import Skill from './skill'
import Experience from './experience'
import Profile from './profile'
import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'


const theme = getMuiTheme(baseTheme, {
  palette: {
    primary1Color: pink500,
    accent1Color: pink500,
    textColor: darkBlack,
    alternateTextColor: white,
    backgroundColor: blueGrey500,
  },
  tabs: {
    selectedTextColor: blueGrey200,
    textColor: white
  }
})

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
    }
  }

  handleChange = (value) => {
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
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={styles.back}>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            className="tabs"
            tabItemContainerStyle={styles.tab}>
            <Tab className="tab" label="Accueil" value={0} />
            <Tab className="tab" label="Compétences" value={1} />
            <Tab className="tab" label="Expériences" value={2} />
            <Tab className="tab" label="Profil" value={3} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            animateHeight
            style={{minHeight: 'calc(100vh - 48px)'}}
          >
            <div>
              <Home/>
            </div>
            <div style={styles.slide}>
              <Skill index={this.state.slideIndex}/>
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

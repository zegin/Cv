import React from 'react'

import { createMuiTheme } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import pink from '@material-ui/core/colors/pink'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/blueGrey'

import styled, { ThemeProvider } from 'styled-components'

import Home from './home'
import Skill from './skill'
import Experience from './experience'
import Profile from './profile'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import SuperAgent from 'superagent'

const theme = {
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
}

// console.log('main', theme)

const Background = styled.div`
   background-color: ${theme.palette.backgroundColor};
   font-size: 1em;
`

const Slide = styled.div`
  padding: 10px;
`

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
    const { slideIndex } = this.state
    return (
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Background>
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
              <Slide>
                <Skill index={slideIndex}/>
              </Slide>
              <Slide>
                <Experience/>
              </Slide>
              <Slide >
                <Profile/>
              </Slide>
            </SwipeableViews>

          </Background>
        </ThemeProvider>
      </NoSsr>
    )
  }
}

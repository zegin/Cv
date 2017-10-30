import React, { Component } from 'react' // eslint-disable-line
import muiThemeable from 'material-ui/styles/muiThemeable'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

// Contact Import
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import request from 'superagent'
var top = '-100vh'

class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mail: '',
      errMail: '',
      name: '',
      errName: '',
      subject: '',
      errSubject: '',
      text: '',
      errText : '',
    }
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      top='-100vh'
      this.forceUpdate()
    }
  }

  validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
    this.setState({
      errMail: re.test(this.state.mail) ? '' : 'Entrer un e-mail valide'
    })
    return re.test(this.state.mail)
  }

  validation(){
    if(this.state.mail && this.validateEmail() && this.state.name && this.state.subject && this.state.text){
      top='-100vh'
      request
        .post('http://' + process.env.IP + ':3000/send/') //eslint-disable-line
        .set('Content-Type', 'application/json')
        .send({
          mail: this.state.mail,
          name: this.state.name,
          subject: this.state.subject,
          text: this.state.text
        })
        .set('accept', 'json')
      this.forceUpdate()
      this.props.update()
    }
    this.setState({
      errMail: this.state.mail ? '' : 'Entrer votre e-mail',
      errSubject: this.state.subject ? '' : 'Entrer votre objet',
      errName: this.state.name ? '' : 'Entrer votre nom',
      errText: this.state.text ? '' : 'Entrer votre texte'
    })
  }

  render(){
    if(top==='20vh'){
      document.addEventListener('mousedown', this.handleClickOutside)
    }
    return (
      <form ref={this.setWrapperRef}>
        <Paper className= 'contact--wrapper 'style={{top: top}}>
          <TextField style={{flex: '1 1 100%'}}
            floatingLabelText="Votre mail"
            onChange={(evt, val)=>(this.setState({mail: val}))}
            onBlur={()=>(this.validateEmail())}
            errorText={this.state.errMail}
          /><br />
          <TextField style={{flex: '1 1 100%'}}
            floatingLabelText="Votre nom"
            onChange={(evt, val)=>(this.setState({name: val}))}
            errorText={this.state.errName}
          /><br />
          <TextField style={{flex: '1 1 100%'}}
            floatingLabelText="L'object"
            onChange={(evt, val)=>(this.setState({subject: val}))}
            errorText={this.state.errSubject}
          /><br />
          <TextField
            hintText="Votre message"
            fullWidth={true}
            multiLine={true}
            rowsMax={5}
            style={{marginTop: '24px', flex: '1 1 100%' }}
            onChange={(evt, val)=>(this.setState({text: val}))}
            errorText={this.state.errText}
          />
          <RaisedButton
            label="Envoyer"
            secondary={true}
            style={{margin: 'auto', marginTop: '2rem'}}
            onClick={()=>(this.validation())}
            icon={<FontIcon className="material-icons">send</FontIcon>}
          />
        </Paper>
      </form>
    )
  }
}

class Home extends React.Component {
  showContact() {
    top = '20vh'
    this.forceUpdate()
  }

  update() {
    toast.success('Merci pour votre attention !', {
      className: 'primary-toast'
    })
    this.forceUpdate()
  }

  render() {
    const styles = {
      skillbody: {
        alignItems: 'left',
      },
      home: {
        color: this.props.muiTheme.palette.alternateTextColor,
        textAlign: 'center',
        height: 'calc(100vh - ' + this.props.muiTheme.button.iconButtonSize + 'px)'
      },
      home_subTitle: {
        fontSize: '2em'
      },
      home_email: {
        display: 'flex',
        marginTop: '5vh'
      },
      home_emailWrapper: {
        margin: 'auto',
        display: 'flex',
        fontSize: '1.1rem'
      },
      home_emailIcon: {
        margin: 'auto',
        marginRight: '.5em',
        paddingTop: '2px',
        color: this.props.muiTheme.palette.alternateTextColor,
        fontSize: '1.1rem'
      },
      home_phone: {
        display: 'flex',
        marginTop: '1vh'
      },
      home_phoneWrapper: {
        margin: 'auto',
        display: 'flex',
        fontSize: '1.1rem'
      },
      home_phoneIcon: {
        margin: 'auto',
        marginRight: '.5em',
        paddingTop: '2px',
        color: this.props.muiTheme.palette.alternateTextColor,
        fontSize: '1.1rem'
      }
    }
    return (
      <div style={styles.home}>
        <p style={styles.home_title} className="home--title">Gilian Gonnord</p>
        <p style={styles.home_subTitle}>Développeur FullStack</p>
        <div style={styles.home_email}>
          <div style={styles.home_emailWrapper}>
            <FontIcon style={styles.home_emailIcon} className="material-icons">email</FontIcon>
            Gilian.gonnord4b@laposte.net
          </div>
        </div>
        <div style={styles.home_phone}>
          <div style={styles.home_phoneWrapper}>
            <FontIcon style={styles.home_phoneIcon} className="material-icons">phone</FontIcon>
            06 74 94 61 23
          </div>
        </div>
        <div>
          <RaisedButton
            onClick={()=>this.showContact()}
            label="Me contacter"
            secondary={true}
            style={{margin: '5vh'}}
            icon={<FontIcon className="material-icons">send</FontIcon>}
          />
        </div>
        <ToastContainer
          position="bottom-center"
          type="success"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
        <Contact update={()=>this.update()}/>
      </div>
    )
  }
}

export default muiThemeable()(Home)

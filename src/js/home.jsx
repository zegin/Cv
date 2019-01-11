import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
// Contact Import
// import Paper from 'material-ui/Paper'
// import TextField from 'material-ui/TextField'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Icon from './atoms/Icon'
// import { withTheme } from '@material-ui/core/styles'
// import request from 'superagent'

// class Contact extends React.Component {
 
//   constructor(props) {
//     super(props)
//     this.state = {
//       mail: '',
//       errMail: '',
//       name: '',
//       errName: '',
//       subject: '',
//       errSubject: '',
//       text: '',
//       errText : '',
//     }
//     this.setWrapperRef = this.setWrapperRef.bind(this)
//     this.handleClickOutside = this.handleClickOutside.bind(this)
//   }

//   /**
//    * Set the wrapper ref
//    */
//   setWrapperRef(node) {
//     this.wrapperRef = node
//   }

//   /**
//    * Alert if clicked on outside of element
//    */
//   handleClickOutside(event) {
//     if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
//       top='-100vh'
//       this.forceUpdate()
//     }
//   }

//   validateEmail() {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
//     this.setState({
//       errMail: re.test(this.state.mail) ? '' : 'Entrer un e-mail valide'
//     })
//     return re.test(this.state.mail)
//   }

//   validation(){
//     if(this.state.mail && this.validateEmail() && this.state.name && this.state.subject && this.state.text){
//       top='-100vh'
//       let address = 'http://' + process.env.IP + ':3000/send/'
//       request
//         .post(address) //eslint-disable-line
//         .set('Content-Type', 'application/json')
//         .send({
//           mail: this.state.mail,
//           name: this.state.name,
//           subject: this.state.subject,
//           text: this.state.text
//         })
//         .set('accept', 'json')
//         .end()
//       this.forceUpdate()
//       this.props.update()
//     }
//     this.setState({
//       errMail: this.state.mail ? '' : 'Entrer votre e-mail',
//       errSubject: this.state.subject ? '' : 'Entrer votre objet',
//       errName: this.state.name ? '' : 'Entrer votre nom',
//       errText: this.state.text ? '' : 'Entrer votre texte'
//     })
//   }

//   render(){
//     if(top==='20vh'){
//       document.addEventListener('mousedown', this.handleClickOutside)
//     }
//     return (
//       <form ref={this.setWrapperRef}>
//         <Paper className= 'contact--wrapper 'style={{ top: top }}>
//           <TextField style={{ flex: '1 1 100%' }}
//             floatingLabelText="Votre mail"
//             onChange={(evt, val)=>(this.setState({ mail: val }))}
//             onBlur={()=>(this.validateEmail())}
//             errorText={this.state.errMail}
//           /><br />
//           <TextField style={{ flex: '1 1 100%' }}
//             floatingLabelText="Votre nom"
//             onChange={(evt, val)=>(this.setState({ name: val }))}
//             errorText={this.state.errName}
//           /><br />
//           <TextField style={{ flex: '1 1 100%' }}
//             floatingLabelText="L'object"
//             onChange={(evt, val)=>(this.setState({ subject: val }))}
//             errorText={this.state.errSubject}
//           /><br />
//           <TextField
//             hintText="Votre message"
//             fullWidth={true}
//             multiLine={true}
//             rowsMax={5}
//             style={{ marginTop: '24px', flex: '1 1 100%' }}
//             onChange={(evt, val)=>(this.setState({ text: val }))}
//             errorText={this.state.errText}
//           />
//           <RaisedButton
//             label="Envoyer"
//             secondary={true}
//             style={{ margin: 'auto', marginTop: '2rem' }}
//             onClick={()=>(this.validation())}
//             icon={<FontIcon className="material-icons">send</FontIcon>}
//           />
//         </Paper>
//       </form>
//     )
//   }
// }

const Root = styled.div`
  color: ${({ theme }) => theme.palette.alternateTextColor};
  text-align: center;
`

const SubTitle = styled.p`
  font-size: 2em;
` 

const EmailContainer = styled.div`
  margin-top: 1vh;
  font-size: 1.1rem;
`

const PhoneContainer = styled.div`
  margin-top: 1vh;
  font-size: 1.1rem;
`

const ContactButton = styled(Button)`
  color: ${({ theme }) => theme.palette.alternateTextColor} !important;
  background-color: ${({ theme }) => theme.palette.primary[500]} !important;
  margin-top: 1vh !important;
`

class Home extends React.Component {
  state = {
    top: '-100vh'
  }
  
  showContact() {
    this.setState({
      top: '20vh'
    })
    // this.forceUpdate()
  }

  update() {
    toast.success('Merci pour votre attention !', {
      className: 'primary-toast'
    })
    // this.forceUpdate()
  }

  render() {
    return (
      <Root>
        <p className="home--title">Gilian Gonnord</p>
        <SubTitle>Développeur FullStack</SubTitle>
        <EmailContainer>
          <Icon className="material-icons">email</Icon>
            Gilian.gonnord4b@laposte.net
        </EmailContainer>
        <PhoneContainer>
          <Icon className="material-icons">phone</Icon>
            06 74 94 61 23
        </PhoneContainer>
        <ContactButton
          onClick={() => this.showContact()}
          label="Me contacter"
          color='primary'
          variant="contained"
        >
          <Icon className="material-icons">send</Icon> Me contacter
        </ContactButton>
        {/* <ToastContainer
          position="bottom-center"
          type="success"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
        <Contact update={()=>this.update()}/> */}
      </Root>
    )
  }
}

export default Home

import React from 'react'
import {Link} from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import  'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  constructor (props) {
    super(props)
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
    this.state = {
      openDrawer: false
    }
  }

  toggleDrawer () {
    this.setState({ openDrawer: !this.state.openDrawer })
  }

  closeDrawer () {
    this.setState({ openDrawer: false })
  }

  render () {
    return <MuiThemeProvider>
      <AppBar
        title="ALTO"
        iconElementLeft={
          <IconButton onClick={this.toggleDrawer}>
            <Menu />
          </IconButton>
        }
      />  
      <Drawer
        docked={false}
        width={250}
        open={this.state.openDrawer}
        onRequestChange={(openDrawer) => this.setState({openDrawer})}>
        <Link to='/'><MenuItem onClick={this.closeDrawer}> Home </MenuItem></Link>
      </Drawer>
      {this.props.children}
    </MuiThemeProvider>
  }
}

export default App

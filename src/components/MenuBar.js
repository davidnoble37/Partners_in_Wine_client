import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MenuBar extends React.Component {

  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({
    activeItem: name
  })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='menuBar'>
        <Menu.Item name='piw' as={Link} to='/' active={activeItem === 'piw'} onClick={this.handleItemClick}>
          Partners In Wine
        </Menu.Item>
        <Menu.Item name='home' as={Link} to='/' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <span className='cheesePic'>🧀</span>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='login' as={Link} to='/login' active={activeItem === 'login'} onClick={this.handleItemClick}>
            Log In
          </Menu.Item>
          <Menu.Item name='signup' as={Link} to='/signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
            Sign Up
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MenuBar
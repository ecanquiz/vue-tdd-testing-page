import { render, screen } from '@testing-library/vue'
import Navbar from '../../Navbar.vue'

describe('Navbar1', () => {
  it('shows logout when authenticated is true', () => {
    render(Navbar, {
      props: {
        authenticated: true
      }
    })

    // getByText will throw an error if it cannot find the element.
    screen.getByText('Logout')
  })

  it('shows login by default', () => {
    render(Navbar)
    screen.getByText('Login')
  })
})

describe('Navbar2', () => {
  function renderNavbar(props) {
    render(Navbar, {
      props
    })
  }
  
  it('shows login authenticated is true', () => {
    renderNavbar({ authenticated: true })
    screen.getByText('Logout')
  })
  
  it('shows logout by default', () => {
    renderNavbar()
    screen.getByText('Login')
  })

  it('shows login when authenticated is false', () => {
    renderNavbar({ authenticated: false })
    screen.getByText('Login')
  })
})

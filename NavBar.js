import React from 'react';
import styled from 'styled-components';

const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

class NavBar extends React.Component {
  state = {
    hoverNavBar: false
  };

  hoverNavBar() {
    window.scrollY <= 0
      ? this.setState({ hoverNavBar: false })
      : this.setState({ hoverNavBar: true });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  render () {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light bg-light fixed-top"
        style={
          this.state.hoverNavBar
            ? {
                boxShadow:
                  '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                backgroundColor: '#ef5350 !important'
              }
            : { backgroundColor: 'transparent !important' }
        }
      >
        <Branding
          href="#"
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
        >
          ReactDex Alice
        </Branding>
      </nav>
    );
  }
}

export default NavBar;
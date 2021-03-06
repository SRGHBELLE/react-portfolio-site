import React, { Component } from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles';
import profile from './assets/SandraByDebbie2.png';

class App extends Component {
  state = { displayBio: false }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
  }

  render() {
    return (
      <div>
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Sandra. I'm a software Engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in the West Orange area, and I code every day.</p>
            <p>
              My favorite language is JavaScript, and I think React.js is
              awesome!
            </p>
            <p>
              Besides coding, I also love music, movies, walking and seeing new
              places.
            </p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App

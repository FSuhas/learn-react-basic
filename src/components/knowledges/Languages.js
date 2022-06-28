import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
  state = {
    Languages: [
      {id: 1, value: "Javascript", xp: 0.6},
      {id: 2, value: "Css", xp: 0.8},
      {id: 3, value: "Html", xp: 0.8},
      {id: 4, value: "Ruby", xp: 0.4}
    ],

    Frameworks: [
      {id: 1, value: 'React', xp: 0.2},
      {id: 2, value: 'Rails', xp: 0.4},
      {id: 3, value: 'Booststrap', xp: 0.4},
      {id: 4, value: 'Sass', xp: 0.7}
    ]
  }

  render() {
    let {Languages, Frameworks} = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={Languages}
          className="languagesDisplay"
          title="Languages"
        />
        <ProgressBar
          languages={Frameworks}
          title="Frameworks & bibliothéques"
          className="frameworksDisplay"
        />
      </div>
    )
  }
}

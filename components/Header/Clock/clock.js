import React, { Component } from 'react';
import styles from "./clock.module.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    // Update time every second
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });

  }

  render() {
    const { theme } = this.props;
    const timeString = this.state.time;
    const [timePart, ampm] = timeString.split(' ');
    
    return (
      <div id="CLOCK"  
             class={`text-center font-avant_garde_bold ${theme === 'light' ? 'text-black' : 'text-stone-200'}`}
             style={{gridArea:"CLOCK", display: "flex", alignItems: "center", gap: "4px"}}>
        <h3 id={styles._H3} style={{margin: 0, lineHeight: "1"}}>
          {timePart}
        </h3>
        <span style={{fontSize: "0.8em", marginLeft: "2px"}}>
          {ampm}
        </span>
      </div>
     
    );
  }
}

export default Clock;

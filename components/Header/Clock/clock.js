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
    const textColor = theme === 'light' ? '#000000' : '#e7e5e4';
    
    return (
      <div id="CLOCK"  
             className="text-center font-avant_garde_bold"
             style={{gridArea:"CLOCK", display: "flex", alignItems: "center", gap: "4px", color: textColor}}>
        <h3 
          id={styles._H3}
          style={{margin: 0, lineHeight: "1", color: textColor}}
        >
          {timePart}
        </h3>
        <span 
          style={{fontSize: "0.8em", marginLeft: "2px", color: textColor}}
        >
          {ampm}
        </span>
      </div>
     
    );
  }
}

export default Clock;

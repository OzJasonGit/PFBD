// Date.js
import React, { Component } from 'react';
import styles from "./clock.module.css";

class DateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toDateString(),
    };
  }

  render() {
    const { theme } = this.props;
    const textColor = theme === 'light' ? '#000000' : '#f8fafc';
    return (
      <div id={styles.DATE}>
        <h3 
          id={styles._H3} 
          className="text-center font-avant_garde_bold"
          style={{marginBottom:"0px", color: textColor}}
        >
          {this.state.date}
        </h3>
      </div>
    );
  }
}

export default DateComponent;

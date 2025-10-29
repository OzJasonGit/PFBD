"use client";

import styles from './subfooter2.module.css'
import React, { Component } from 'react';
import { useTheme } from '../Context/ThemeContext';

class SubfooterInner extends Component {
  static defaultProps = {
    theme: 'dark',
  };

  render() {
    const { theme } = this.props;
    return (

        <section id={styles.SHADOW_SECTION_TAG} class={styles.center_holder}>
            <div class={styles.grid_0_main}>
            <div id={styles.TAG_HOLDER}>
                <div id={styles.TAG}>
                <h1
                    id={styles._H1}
                    class={`text-7xl font-avant_garde_bold ${theme === 'light' ? 'text-black' : 'text-stone-400'}`}>
                    {" "}
                    You're the <a class={`${theme === 'light' ? 'text-black' : 'text-stone-200'}`}>pilot </a>... We are <br/>
                    your<a class={`${theme === 'light' ? 'text-black' : 'text-emerald-200'}`}> copilot</a>.
                </h1>
                </div>
            </div>
            </div>
        </section>   

         

    )
  }
}

// Wrapper to provide theme context
export default function Subfooter() {
  const { theme } = useTheme();
  
  return <SubfooterInner theme={theme} />;
}


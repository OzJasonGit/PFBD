"use client";

import styles from './services_1.module.css';

import Image from "next/image";
import bimcopilot from './bimcopilot_logo_text_horizontal_white.svg';

import React, { Component } from 'react';
import { useTheme } from '../Context/ThemeContext';

class Services1Inner extends Component {
  static defaultProps = {
    theme: 'dark',
  };

  render() {
    const { theme } = this.props;
   
    return (
      <>
        <section id={styles.SHADOW_SECTION_BLOG} class={styles.center_holder}>
          <div class={styles.grid_0_bimcopilot}>
            <div id={styles.BIMCOPILOT_CONTAINER}>
              <div id={styles.BIMCOPILOT}>
                <Image id={styles.CENTER}
                    src={bimcopilot}   
                    className={theme === 'light' ? styles.logo_invert : ''}
                    style={{objectFit: "contain"}} 
                    quality={100}
                />  
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

// Wrapper to provide theme context
export default function Services_1() {
  const { theme } = useTheme();
  return <Services1Inner theme={theme} />;
}



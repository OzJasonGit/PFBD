"use client";

import styles from './subscribetop.module.css'
import React, { Component } from 'react';
import { useTheme } from '../Context/ThemeContext';

import Subform from "./Client/subform";

class SubcribetopInner extends Component {
  static defaultProps = {
    theme: 'dark',
  };

  render() {
    const { theme } = this.props;
    return (

    <section id={styles.SHADOW_SECTION_BLOG} class={styles.center_holder}>
        <div class={styles.grid_0_subscribe}>
          <div class={styles.sub_head}>
            <div id={styles.SUBSCRIBE} class={"border-emerald-200"}>
             

              <div id={styles.MAIN_TAG}>
                <h1
                  id={styles._H1}
                  
                  class={`font-avant_garde_bold ${theme === 'light' ? 'text-black' : 'text-stone-200'}`}>
                  Sustainable, Richer Architects through BIM, AI, Analytics and
                  Automation
                </h1>
              </div>
              <div id={styles.SUB_TAG}>
                <h3
                  id={styles._H3}
                  class={`text-left font-avant_garde_medium ${theme === 'light' ? 'text-black' : 'text-stone-400'}`}
                >
                  {" "}
                  <a class={`font-avant_garde_medium ${theme === 'light' ? 'text-black' : 'text-stone-200'}`}>
                    The design revolution is here.
                  </a>{" "}
                  The world is changing and so is{" "}
                  <a class={`font-avant_garde_medium ${theme === 'light' ? 'text-black' : 'text-stone-200'}`}>
                    architecture
                  </a>
                  . Discover new narratives, build better{" "}
                  <a class={`font-avant_garde_medium ${theme === 'light' ? 'text-black' : 'text-stone-200'}`}>
                    systems
                  </a>
                  , make more{" "}
                  <a class={`font-avant_garde_medium ${theme === 'light' ? 'text-black' : 'text-stone-200'}`}>money</a>,
                  be more{" "}
                  <a class={`font-avant_garde_medium ${theme === 'light' ? 'text-black' : 'text-stone-200'}`}>
                    sustainable
                  </a>
                  . <br /> <br />{" "}
                  <h1 
                    id={styles._H1} 
                    class={`font-avant_garde_bold ${theme === 'light' ? 'text-black' : 'text-stone-200'}`}>
                    Join the Waiting List!
                  </h1>
                </h3>
              </div>

              <Subform/>
              
            </div>
          </div>
        </div>
    </section>

    )
  }
}

// Wrapper to provide theme context
export default function Subcribetop() {
  const { theme } = useTheme();
  return <SubcribetopInner theme={theme} />;
}






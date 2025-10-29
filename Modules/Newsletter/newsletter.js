'use client'

import styles from './newsletter.module.css';

import { useRouter } from "next/navigation";
import { useTheme } from '../../components/Context/ThemeContext';

import PFDBMenu from "../../components/Menu_PFBD/menu_PFBD";

import Subscribe_2 from "../../components/Subscribetop/subscribe_2";
import Sides from "../../components/Sides/sides";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/FooterWrapper";
import Collapsed_Sales from "../../components/Collapse_Sales/collapse_sales";

import Services_1 from "../../components/services_bimcopilot/services_1";


import Image from "next/image";


const Saleslanding = ({ stories, firstStory }) => {
  const { theme } = useTheme();
  const storiesSolo_1 = stories.filter((story, i) => i == 3)
  const storiesToMap = stories.filter((story, i) => i != 0);
  const router = useRouter();

   return (

    <>
      {/* <PFDBMenu/> */}
      <Header/>
      <Sides/>

      <Services_1/>



      

      <section 
        id={styles.SHADOW_SECTION_BLOG} 
        class={styles.center_holder}
        style={{
          backgroundColor: theme === 'light' ? 'rgb(250, 250, 249)' : '#171717'
        }}
      >
        <Subscribe_2/>     
      </section>


      <section 
        id={styles.SHADOW_SECTION_BLOG} 
        class={styles.center_holder}
        style={{
          backgroundColor: theme === 'light' ? 'rgb(250, 250, 249)' : '#171717'
        }}
      >
        <div class={styles.grid_0_scroll}>
            <div id={styles.SALES_GRID_HOLDER}>

                <div  id={styles.SALES_IMAGE_HOLDER}>


                        

                        <div id={styles.SALES_IMAGE_1}>
                            <h2  class={`text-6xl font-avant_garde_bold ${theme === 'light' ? 'text-black' : 'text-stone-400'}`}
                                style={{
                                paddingBottom: "0",
                                }}>
                                Newsletter
                            </h2>                                                
                        </div>  

                        
                    
                        <div class="rounded-xl ..." id={styles.SALES_IMAGE_2}>
                            <div>
                                    {storiesSolo_1.map((story, index) => {
                                    return (          
                                    <Image
                                    alt="Picture of the author"
                                    key={story._id}
                                    width={500}
                                    height={500}
                                    src={story.image}
                                    style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    
                                    }}/>                        
                                )})} 
                            </div>
                        </div>   


                        <div id={styles.BODY_HOLDER}>
                            <div 
                                style={{
                                    gridArea: 'TITLE'                                  
                                }}>
                                    <h3 class={`text-3xl font-avant_garde_bold ${theme === 'light' ? 'text-black' : 'text-stone-200'}`}>
                                        What the hell does this mean 

                                    </h3>
                            </div>
                            <div 
                                style={{
                                    gridArea: 'BODY'                                  
                                }}>
                                    <p class={`text-lg font-avant_garde_medium ${theme === 'light' ? 'text-black' : 'text-stone-400'}`}>
                                        This is the paragraph who are you? 
                                        
                                    </p>
                            </div>
                        </div>                                          
                                     
                </div>

              

            </div>
        </div>
      </section>



      <section 
        id={styles.SHADOW_SECTION_BLOG} 
        class={styles.center_holder}
        style={{
          backgroundColor: theme === 'light' ? 'rgb(250, 250, 249)' : '#171717'
        }}
      >
        <div class={styles.grid_0_scroll}>

            <div id={styles.BOUGHT_IMAGE_HOLDER}>

                <div class="rounded-lg ..." id={styles.SALES_IMAGE_A}>
                    {storiesSolo_1.map((story, index) => {
                            return (                      
                        <Image
                        alt="Picture of the author"
                        key={story._id}
                        width={500}
                        height={500}
                        src={story.image}
                        style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        }}/>                         
                    )})} 
                </div>  


                <div class="rounded-lg ..." id={styles.SALES_IMAGE_B}>
                    {storiesSolo_1.map((story, index) => {
                        return (                 
                        <Image
                        alt="Picture of the author"
                        key={story._id}
                        width={500}
                        height={500}
                        src={story.image}
                        style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        }}/>                 
                    )})} 
                </div>   

            </div>



            <div id={styles.BOUGHT_TOGETHER_GRID}> 

                <div id={styles.BOUGHT_TOGETHER_BLOCK}>


                      



                </div>


                <div id={styles.BOUGHT_IMAGE_HOLDER_MOBILE}>
                    <div id={styles.BOUGHT_TOGETHER_GRID_MOBILE}> 

                        <div id={styles.BOUGHT_IMAGE_MOBILE}>
                            <div class="rounded-lg ..." id={styles.SALES_IMAGE_A}>
                                {storiesSolo_1.map((story, index) => {
                                        return (                      
                                    <Image
                                    alt="Picture of the author"
                                    key={story._id}
                                    width={500}
                                    height={500}
                                    src={story.image}
                                    style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    }}/>                         
                                )})} 
                            </div>  


                            <div class="rounded-lg ..." id={styles.SALES_IMAGE_B}>
                                {storiesSolo_1.map((story, index) => {
                                    return (                 
                                    <Image
                                    alt="Picture of the author"
                                    key={story._id}
                                    width={500}
                                    height={500}
                                    src={story.image}
                                    style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    }}/>                 
                                )})} 
                            </div>  
                        </div> 

                    </div>                                     
                </div>







                





            </div>
        </div>
      </section>
    
    <Footer/>


    </>

 );
};

export default Saleslanding;



                    

                    














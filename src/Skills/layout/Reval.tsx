 import React, { useEffect, useRef } from "react";
import {motion,useAnimation,useInView,} from 'framer-motion'
 


export const Reval =({children,id}:{children:React.ReactNode,id:number
})=>{
    const ref = useRef<HTMLDivElement|null>(null);
    const isInView = useInView(ref,{once:true})
    const mainControls = useAnimation();
 
    useEffect(() => {
        if(isInView)
        {
            mainControls.start('visible')
          
            console.log({id,ref},'in reval')
          
        }
     }, [isInView])
    
    return(
        <div ref={ref} style={{position:'relative',overflow:'hidden',height:'70vh'}}>
            <motion.div
                variants={{
                    hidden:{
                        opacity:0,
                        y:0.75
                    },
                    visible:{
                        opacity:1,
                        y:0
                    }
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration:2,delay:0.25}}
            >
                {children}
            </motion.div>
           
        </div>
    )
}
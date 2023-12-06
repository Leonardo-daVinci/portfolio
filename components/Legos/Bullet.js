import React from "react";

function Bullet({des}){
    return(
        <>
        <div className=' text-lg flex justify-start items-baseline'>
            <span className='mx-2'>&#x2022;</span> 
            <p className='py-2'>
                {/* Taught students the concepts of Deep Learning and Mobile Application
                Development by organizing various technical events.  */}
                {des}
            </p>
        </div>
        </>
    )
}

export default Bullet
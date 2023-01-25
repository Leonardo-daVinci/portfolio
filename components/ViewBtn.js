import React from "react";

function ViewBtn({link}){

    return(
        <>
        <div className="mt-auto w-full flex justify-end p-4">
            <a href={link} target="_blank" rel="noreferrer">
                <button className="py-2 px-6 
                rounded-full border-2 border-my-text-light
                text-my-text-light text-lg
                hover:text-white hover:bg-my-text-light
                dark:border-hover-bg-light dark:hover:bg-hover-bg-light
                dark:text-hover-bg-light dark:hover:text-card-dark">
                    View
                </button>
            </a>
        </div>
        </>
    )
}

export default ViewBtn
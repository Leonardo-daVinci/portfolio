import React from "react";

function ViewBtn({link}){

    return(
        <>
        <div className="mt-auto w-full flex justify-end p-4">
            <a href={link} target="_blank" rel="noreferrer">
                <button className="py-2 px-6 
                rounded-full group-hover:bg-my-text-light group-hover:text-white
                text-my-text-light text-lg
                dark:border-hover-bg-light dark:group-hover:bg-hover-bg-light dark:text-hover-bg-light dark:group-hover:text-card-dark">
                    View
                </button>
            </a>
        </div>
        </>
    )
}

export default ViewBtn
import React from 'react'

function HorizontalCarousel() {
  return (
    <div className='bg-teal-800'>
        <div className='flex h-48 items-center justify-center'>
            <span className='uppercase'>
                Scroll down
            </span>
        </div>

        <section className='relative h-[300vh] bg-teal-300'>
        <div className='sticky top-0 flex h-screen bg-my-text-light'>
            Hello
        </div>
    </section>
    <div className='flex h-48 items-center justify-center'>
            <span className='uppercase'>
                Scroll up
            </span>
        </div>

    </div>
  )
}

export default HorizontalCarousel
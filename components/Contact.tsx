import React from 'react'

const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >
      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        04. What&apos;s Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'>
       Let&apos;s Collaborate Together
      </h2>
      <p className='max-w-[600px] text-center text-textDark'>
      If you're open to the idea, I'd love to discuss this potential collaboration further. Let's set up a time to chat and explore how we can work together to create something amazing.
      </p>
      <a href="mailto:nwabuokeichinedu00@gmail.com">
        <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>Inbox Me</button>
      </a>
    </section>
  )
}

export default Contact

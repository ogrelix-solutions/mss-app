import React from 'react'
import EntryForm from './Components/EntryForm'
import SideBar from './Components/SideBar'

function Home() {
  return (
    <>
    <div className='flex'>
    <SideBar/>
    <section className='w-full ml-[3%]'>
    <EntryForm/>

    </section>
    </div>
    </>
  )
}

export default Home
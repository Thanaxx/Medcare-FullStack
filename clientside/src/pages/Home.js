import React from 'react'
import Appointment from '../components/Appointment'
import Benefits from '../components/Benefits'
import Coverpage from '../components/Coverpage'
import Navbar from '../components/Navigation/index'
import Services from '../components/Services'
import Steps from '../components/Steps'

function Home() {
    return (
        <>
            <Navbar />
            <Coverpage />
            <Services />
            <Benefits />
            <Steps />
            <Appointment />
        </>
    )
}

export default Home

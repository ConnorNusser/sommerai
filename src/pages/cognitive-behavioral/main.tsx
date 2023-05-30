import React from 'react'
import ClientProvider from '../../components/ClientProvider'
import Login from '../../components/Login'
import { SessionProvider } from '../../components/SessionProvider'
import Sidebar from '../../components/SideBar'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import TherapyTypes from '../../../lib/therapyTypes'
import '../../../styles/globals.css'

async function CognitiveBehavioral() {
    const session = await getServerSession(authOptions);

    return (
        <SessionProvider session={session}>
            {!session ? (<Login />) : (
                <div className="flex flex-col md:flex-row text-white">
                    <Sidebar therapy={TherapyTypes.CBT} />
                    <ClientProvider />
                    <div className="bg-[#343541] flex-1 ">

                        <div className="space-x-2 flex justify-center items-center h-screen flex-col text-center">
                            <div>
                                <div className="flex flex-col
                     items-center justify-center mb-5
                     ">
                                    <h1 className='text-2xl'>Cognitive Behavioral Therapy</h1>
                                </div>
                                <div className="space-y-2">
                                    <p className='menuInfoText'>CBT  helps individuals to identify and change negative thought patterns and behaviors that contribute to mental health issues into positive ones.</p>
                                    <p className='menuInfoText'>Use cases include Depression, Anxiety, OCD, PTSD, Substance abuse, Eating disorders, Insomnia, and Chronic Pain.</p>
                                    <p className='menuInfoText'>For constructive criticism, feedback, and feature requests please email us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rvelez@sommerai.com"><u>rvelez@sommerai.com</u></a></p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </SessionProvider>

    )
}

export default CognitiveBehavioral
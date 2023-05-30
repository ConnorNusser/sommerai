
import React from 'react'
import ClientProvider from '../../components/ClientProvider'
import Login from '../../components/Login'
import { SessionProvider } from '../../components/SessionProvider'
import Sidebar from '../../components/SideBar'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import TherapyTypes from '../../../lib/therapyTypes'
import '../../../styles/globals.css'

async function RetroactiveResolution() {
    const session = await getServerSession(authOptions);

    return (
        <SessionProvider session={session}>
            {!session ? (<Login />) : (
                <div className="flex flex-col md:flex-row text-white">
                    <Sidebar therapy={TherapyTypes.RRT} />
                    <ClientProvider />
                    <div className="bg-[#343541] flex-1 ">

                        <div className="space-x-2 flex justify-center items-center h-screen flex-col text-center">
                            <div>
                                <div className="flex flex-col
                     items-center justify-center mb-5
                     ">
                                    <h1 className='text-2xl'>Retroactive Resolution Therapy</h1>
                                </div>
                                <div className="space-y-2">
                                    <p className='menuInfoText'>RRT focuses on working back in time to identify past traumatic events while using CBT techniques to reframe negative thoughts and behaviors associated with those events into positive ones.</p>
                                    <p className='menuInfoText'>Use cases include PTSD, complex trauma, anxiety disorders, depression, and relationship issues.</p>
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

export default RetroactiveResolution
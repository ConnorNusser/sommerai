
import React from 'react'
import ClientProvider from '../../../components/ClientProvider'
import Login from '../../../components/Login'
import { SessionProvider } from '../../../components/SessionProvider'

import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

import '../../../styles/globals.css'
import HealthCardList from '../../../components/HealthCardList'

async function HealthOnboarding() {
    const session = await getServerSession(authOptions);

    return (
        <SessionProvider session={session}>
            {!session ? (<Login />) : (
                <div className="flex flex-col md:flex-row text-white md:justify-center md:items-center h-screen">
                    <ClientProvider />
                    <div className="bg-[#343541] flex-1 mt-10 ">

                        <div className="space-x-2 flex justify-center items-center flex-col text-center">
                            <div>
                                <div className="flex flex-col
                 items-center justify-center mb-5
                 ">
                                    <h1 className='text-2xl'>Healthy Nuggets</h1>
                                </div>
                                <div className="space-y-2">
                                    <p className='menuInfoText'>Therapy is just one component of mental health.
                                    </p>
                                    <p className='menuInfoText'> Add these to your life to get quick results.
                                    </p>

                                </div>

                            </div>
                            <HealthCardList />
                            <p className='menuInfoText2 text-center'>Email us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rvelez@sommerai.com"><u>rvelez@sommerai.com</u></a> for support in applying these tips to your life.</p>
                        </div>
                    </div>
                </div>
            )}
        </SessionProvider>
    )
}

export default HealthOnboarding
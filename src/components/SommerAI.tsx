import React from 'react'
import Card from './Card'
import '../styles/globals.css'

function SommerAI() {

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-[#343541] text-white mt-10'>
            <div className="w-full text-center mb-10 px-4">
                <h1 className="text-5xl font-bold mb-1">SommerAI</h1>
                <p>Mental Health.</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
                <Card
                    title="Solution Focused Brief Therapy"
                    message="Focused on finding solutions to current problems rather than dwelling on past issues."
                    icon="lightning"
                    buttonText="Try beta"
                    buttonLink="/sommer/solution-focused/"
                    duration=""
                    usage=""
                />
                <Card
                    title="Cognitive Behavioral Therapy"
                    message="Focused on addressing negative thoughts and developing coping strategies."
                    icon="sun"
                    buttonText="Try beta"
                    buttonLink="/sommer/cognitive-behavioral/"
                    duration=""
                    usage=""
                />
                <Card
                    title="Healthy Nuggets"
                    message="Therapy is only a small component of your mental health, see what else you can do."
                    icon="sun"
                    buttonText="Try beta"
                    buttonLink="/sommer/health-onboarding/"
                    duration=""
                    usage=""
                />
                {/* 
                <Card
                    title="Retroactive Resolution"
                    message="Focused on visiting past chain of events and applying Cognitive Behavioral Therapy at each point."
                    icon="recycle"
                    buttonText="Coming Soon"
                    buttonLink="/sommer/retroactive-resolution/"
                    duration="Long-term"
                    usage=""
                /> */}
            </div>

            <div className='mt-10 px-4 mb-10'>
                <p className='menuInfoText2 text-center'>For additional information read our <a href="https://versed-space-f6b.notion.site/Mental-Health-in-Low-Earth-Orbit-372c25df04fc41d78ebf791660aebfc6"><u>Mental Health in Low Earth Orbit</u></a> and <a href="https://versed-space-f6b.notion.site/AI-Therapy-vs-Human-Therapy-3d2fd47f435942ebb053a070d111ff5f"><u>AI Therapy vs Human Therapy</u></a> articles. Thank you!</p>
            </div>
        </div>
    )
}

export default SommerAI

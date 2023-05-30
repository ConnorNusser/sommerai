'use client'
import Chat from "../../../../components/Chat"
import ChatInput from "../../../../components/ChatInput"
import { getServerSession } from 'next-auth'
import '../../../../../styles/globals.css'
import { authOptions } from "../../../../../pages/api/auth/[...nextauth]"
import { SessionProvider } from "../../../../components/SessionProvider"
import Login from "../../../../components/Login"
import Sidebar from "../../../../components/SideBar"
import ClientProvider from "../../../../components/ClientProvider"
import TherapyTypes from "../../../../../lib/therapyTypes"
type Props = {
    params: {
        id: string
    }
}

async function ChatPage({ params: { id } }: Props) {
    const session = await getServerSession(authOptions);

    return (
        <div className="bg-[#343541] flex-1">
            <SessionProvider session={session}>
                {/* move to SommerAI not LandingPage */}
                {!session ? (<Login />) : (
                    <div className="flex flex-col md:flex-row">
                        <Sidebar therapy={TherapyTypes.RRT} />
                        {/* ClientProvider - Notifications */}
                        <ClientProvider />
                        <div className="flex flex-col h-screen overflow-hidden">
                            <Chat therapy={TherapyTypes.RRT} chatId={id} />
                            <ChatInput therapy={TherapyTypes.RRT} chatId={id} />
                        </div>
                    </div>
                )}
            </SessionProvider>
        </div>

    )
}

export default ChatPage
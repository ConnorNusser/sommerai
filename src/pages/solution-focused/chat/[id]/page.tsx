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
        <div className="bg-[#343541]">
            <SessionProvider session={session}>
                {!session ? (<Login />) : (
                    <div className="flex flex-col md:flex-row h-screen w-screen">
                        <Sidebar therapy={TherapyTypes.SFBT} />
                        <ClientProvider />
                        <div className="flex-auto flex flex-col max-w-screen overflow-x-auto">
                            <Chat therapy={TherapyTypes.SFBT} chatId={id} />
                            <ChatInput therapy={TherapyTypes.SFBT} chatId={id} />
                        </div>
                    </div>
                )}
            </SessionProvider>
        </div>

    )
}

export default ChatPage
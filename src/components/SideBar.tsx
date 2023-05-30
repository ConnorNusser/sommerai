
'use client'
import { useSession } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";
import { useState } from "react";
import SideBarLinkButtons from "./SideBarLinkButtons";
import Link from "next/link";

type Props = {
    therapy: string
}

function Sidebar({ therapy }: Props) {
    const { data: session } = useSession();
    const [chats, loading, error] = useCollection(
        session && query(collection(db, 'users', session.user?.email!, therapy, 'chats', "chats"), orderBy("createdAt", "asc")
        ))

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }
    const gotToMainMenu = () => {
        window.location.href = '/';
    }

    return (
        <div>
            <div className="bg-[#202123] md:hidden flex justify-between items-center h-20">
                <button onClick={gotToMainMenu}>
                    <p className="ml-10 text-white text-lg" style={{ cursor: 'pointer' }}>SommerAI</p>
                </button>

                <button onClick={toggleMenu} className="mr-5 p-2 text-gray-500 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className={`${menuOpen ? "" : 'hidden'} bg-[#202123] h-screen sm:max-w-sm md:max-w-xs md:flex md:flex-col`}>
                <div className="flex flex-col flex-auto">
                    <div className="flex-none">
                        <NewChat therapy={therapy} />
                    </div>
                    <div className="overflow-y-auto">
                        {chats?.docs.map(chat => (
                            <ChatRow therapy={therapy} closeMenu={toggleMenu} key={chat.id} id={chat.id} />
                        ))}
                    </div>

                </div>
                {session && (
                    <div className="flex-none">
                        <SideBarLinkButtons />
                    </div>
                )}

            </div>

        </div>
    );
}

export default Sidebar;
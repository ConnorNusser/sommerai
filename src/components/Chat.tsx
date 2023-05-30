'use client'
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type Props = {
    chatId: string;
    therapy: string
}

function Chat({ chatId, therapy }: Props) {
    const { data: session } = useSession();
    const [messages] = useCollection(session && query(collection(db, 'users', session?.user?.email!, therapy, 'chats', 'chats', chatId, 'messages'), orderBy("createdAt", "asc")));
    return (
        <div className="flex-auto">
            {messages?.empty && (
                <div className="flex flex-col text-center justify-center h-[50%]">
                    <p className="mt-auto text-white">Hi, It's Sommer! </p>
                    <p className="text-white">Let me know what problem you are having.</p>
                    <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
                </div>
            )}
            {messages?.docs.map((message) => (
                <Message key={message.id} message={message.data()} />
            ))}
        </div>
    )
}

export default Chat;
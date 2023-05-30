import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"

type Props = {
    id: string,
    closeMenu: (params: any) => any,
    therapy: string
}

function ChatRow({ id, closeMenu, therapy }: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);

    const [messages] = useCollection(
        collection(db, 'users', session?.user?.email!, therapy, 'chats', 'chats', id, 'messages')
    );

    useEffect(() => {
        if (!pathname) return;
        setActive(pathname.includes(id));
    }, [pathname]);

    const removeChat = async () => {
        await deleteDoc(doc(db, 'users', session?.user?.email!, therapy, 'chats', 'chats', id));
        router.replace(`sommer/${therapy}`);
    }

    const moveNav = () => {
        closeMenu(null);
        router.replace(`sommer/${therapy}/chat/${id}`)
    }

    return (
        <div onClick={moveNav} className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}>
            <ChatBubbleLeftIcon className="h-5 w-5" />
            <p className="flex-1 md:inline-flex truncate">
                {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
            </p>
            <TrashIcon onClick={removeChat} className="h-5 w-5 text-red-700/75 hover:text-red-700" />
        </div>
    )
}

export default ChatRow
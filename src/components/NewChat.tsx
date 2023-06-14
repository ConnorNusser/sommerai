'use client'

import { PlusIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase"
import {TherapyTypes} from "../constants/therapytypes"

type Props = {
    therapy: string
}

function NewChat({ therapy }: Props) {
    const router = useRouter()
    const { data: session } = useSession();
    const createNewChat = async () => {

        if (therapy == TherapyTypes.SFBT) {
            const doc = await addDoc(
                collection(db, "users", session?.user?.email!, therapy, 'chats', "chats"), {
                userId: session?.user?.email!,
                createdAt: serverTimestamp(),
                currentStep: 1,
                problem: "",
                goal: "",
                plan: "",
                //add any other things here
            }
            )
            router.replace(`sommer/${therapy}/chat/${doc.id}`);
        }
        else if (therapy == TherapyTypes.CBT) {
            const doc = await addDoc(
                collection(db, "users", session?.user?.email!, therapy, 'chats', "chats"), {
                userId: session?.user?.email!,
                createdAt: serverTimestamp(),
                currentStep: 1,
                agenda: "",
                negativeThought: "",
                negativeThoughtEvaluation: "",
                behavioralSkill: "",
                homework: "",
                //add any other things here
            }
            )
            router.replace(`sommer/${therapy}/chat/${doc.id}`);
        }

    }

    return (
        <div onClick={createNewChat} className="border-gray-700 border chatRow mt-10 md:mt-0">
            <PlusIcon className="h-4 w-4" />
            <p>New Chat</p>
        </div>
    );
}

export default NewChat;
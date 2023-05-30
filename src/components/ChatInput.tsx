'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp, getDocs, orderBy, query, doc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { db, analytics } from "../firebase";
import TherapyTypes from "../lib/therapyTypes";
import { getAnalytics, logEvent } from "firebase/analytics";

type Props = {
    chatId: string,
    therapy: string
}

function ChatInput({ chatId, therapy }: Props) {
    const [prompt, setPrompt] = useState("")
    const { data: session } = useSession();


    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
            }
        }

        //where user is created
        // await addDoc(
        //     collection(db, 'users', session?.user?.email!, therapy, 'chats', 'chats', chatId, 'messages'),
        //     message
        // )
        try {
            await addDoc(
                collection(
                    db,
                    "users",
                    session?.user?.email!,
                    therapy,
                    "chats",
                    "chats",
                    chatId,
                    "messages"
                ),
                message
            );
            logEvent(analytics, "user_added_success");
        } catch (error) {
            console.error("Error adding message:", error as Error);
            logEvent(analytics, "user_added_failure", {
                error_message: (error as Error).message,
            });
        }
        //Toast notification
        const notification = toast.loading('Give me a moment...')
        const patientName = session?.user?.name!;

        const docsWithMessages = await getDocs(query(collection(db, 'users', session?.user?.email!, therapy, 'chats', 'chats', chatId, 'messages'), orderBy("createdAt", "desc")));

        let chatHistory = docsWithMessages.docs.map((doc) => {
            const speaker = doc.data().user.name;
            const roleTitle = speaker === "ChatGPT" ? "assistant" : "user"
            const message = { role: roleTitle, content: doc.data().text }
            return message
        });

        //reverse chat history
        chatHistory.reverse();

        const chatDocRef = doc(db, "users", session?.user?.email!, therapy, "chats", "chats", chatId);
        const chatDocSnap = await getDoc(chatDocRef);
        const chatDocData = chatDocSnap.data();

        if (therapy == TherapyTypes.SFBT) {
            const currentStep: number = chatDocData!.currentStep;
            const problem: string = chatDocData!.problem;
            const goal: string = chatDocData!.goal;
            const plan: string = chatDocData!.plan
            await fetch('/api/askSFBTQuestion', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: input, chatId, session, patientName, chatHistory, therapy, currentStep, problem, goal, plan
                })
            }).then((response) => {
                //toast notification to say successfull!
                toast.success('Sommer has responded!', {
                    id: notification,
                })
            })
        }
        else if (therapy == TherapyTypes.CBT) {
            const currentStep: number = chatDocData!.currentStep;
            const agenda: string = chatDocData!.agenda;
            const negativeThought: string = chatDocData!.negativeThought;
            const negativeThoughtEvaluation: string = chatDocData!.negativeThoughtEvaluation;
            const behavioralSkill: string = chatDocData!.behavioralSkill;
            const homework: string = chatDocData!.homework;
            await fetch('/api/askCBTQuestion', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: input, chatId, session, patientName, chatHistory, therapy, currentStep, agenda, negativeThought, negativeThoughtEvaluation, behavioralSkill, homework
                })
            }).then((response) => {
                //toast notification to say successfull!
                toast.success('Sommer has responded!', {
                    id: notification,
                })
            })
        }
    }
    const charCount = prompt.length;
    const charLimit = 1000;
    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm sm:mb-10 md:mb-0 bottom-0">
            <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
                <div className="relative flex-1">
                    <textarea
                        className="bg-transparent focus:outline-none w-full h-full resize-none absolute top-0 left-0 right-0 bottom-0 px-3 py-2"
                        disabled={!session}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Type your message here..."
                        maxLength={charLimit} // Set max length to 1000
                        style={{
                            maxHeight: "5rem", // Set a max height to limit the size of the text area
                            lineHeight: "1.5", // Increase the line height to improve readability
                            fontSize: prompt.length < 100 ? "1rem" : "0.875rem", // Decrease the font size for longer messages
                        }}
                    />
                    {/* Show the number of characters remaining */}
                    <div className="absolute right-0 bottom-0 mr-2 mb-2 text-gray-400">
                        {charCount}/{charLimit}
                    </div>
                </div>
                <button
                    disabled={!prompt || !session}
                    className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
                    type="submit"
                >
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                </button>
            </form>
        </div>
    )
}

export default ChatInput
'use client'
import { BoltIcon, ArrowPathRoundedSquareIcon, SunIcon } from '@heroicons/react/24/outline'
// import { google, calendar_v3 } from "googleapis";
// import { useSession } from "next-auth/react";
// import { useEffect, useState } from 'react';
// import { calendarAuth } from '../pages/api/auth/[...nextauth]';
// import { OAuth2Client } from "google-auth-library/build/src/auth/oauth2client";
// import { GaxiosResponse } from "gaxios";

export type HealthCardProps = {
    title: string;
    message: string;
    percentage: string;
    icon: string;
    buttonText: string;
}



const HealthCard = ({ title, message, icon, buttonText, percentage }: HealthCardProps) => {
    // const { data: session, status } = useSession();
    // const [accessToken, setAccessToken] = useState("");
    // const [refreshToken, setRefreshToken] = useState("");
    // const [auth, setAuth] = useState<OAuth2Client | null>(null);
    // const [calendar, setCalendar] = useState<calendar_v3.Calendar | null>(null);
    // const [primaryCalendarId, setPrimaryCalendarId] = useState<string | null>(null);

    // const [calendarListResponse, setCalendarListResponse] = useState<
    //     GaxiosResponse<calendar_v3.Schema$CalendarList> | null
    // >(null);


    // useEffect(() => {
    //     async function getTokens() {
    //         if (status === "authenticated") {
    //             // Retrieve the access token and refresh token from the session cookies
    //             const cookies = document.cookie.split("; ");
    //             const accessTokenCookie = cookies.find((cookie) =>
    //                 cookie.startsWith("next-auth.session-token")
    //             );
    //             const refreshTokenCookie = cookies.find((cookie) =>
    //                 cookie.startsWith("next-auth.refresh-token")
    //             );
    //             if (accessTokenCookie) {
    //                 setAccessToken(accessTokenCookie.split("=")[1]);
    //             }
    //             if (refreshTokenCookie) {
    //                 setRefreshToken(refreshTokenCookie.split("=")[1]);
    //             }
    //         }
    //     }
    //     getTokens();
    // }, [status]);

    // useEffect(() => {
    //     async function getCalendarAuth() {
    //         const { auth, calendar, primaryCalendarId } = await calendarAuth({
    //             accessToken,
    //             refreshToken,
    //         });

    //         setAuth(auth);
    //         setCalendar(calendar);
    //         if (primaryCalendarId !== undefined) {
    //             setPrimaryCalendarId(primaryCalendarId);
    //         }
    //         return { auth, calendar, primaryCalendarId };
    //     }
    //     getCalendarAuth()

    // }, [refreshToken])



    let iconElement;
    let disabled = 'false';
    if (icon === 'lightning') {
        iconElement = <BoltIcon className="h-8 w-8 text-yellow-500" />;
    } else if (icon === 'sun') {
        iconElement = <SunIcon className="h-8 w-8 text-yellow-500" />;
    } else {
        iconElement = <ArrowPathRoundedSquareIcon className="h-8 w-8 text-yellow-500" />;
        disabled = 'true'
    }

    const redirectPage = () => {

        if (disabled == 'false') {
            //window.location.href = buttonLink;
        }

    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 max-w-[600px] ml-2 mr-2 mt-2 mb-2 md:ml-1 md:mr-1 md:mt-0 md:mb-0 text-center">
            <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded-full mx-auto">
                {iconElement}
            </div>
            <div className="mt-4 whitespace-normal">
                <h3 className="text-lg font-medium text-gray-700">{title}</h3>
                <p className="mt-2 text-sm text-gray-500">{message}</p>
                <p className="mt-2 text-sm text-gray-500">{percentage}</p>
            </div>
            {/* <div className="mt-6">
                <a>
                    <button
                        onClick={redirectPage}
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        {buttonText}
                    </button>
                </a>
            </div> */}
        </div>
    )
}

export default HealthCard

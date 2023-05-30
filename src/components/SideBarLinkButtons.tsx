'use client'

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function SideBarLinkButtons() {
    const router = useRouter();

    const logout = async () => {
        await signOut({ redirect: false });
        window.location.href = '/'
    };

    const goToMainMenuPage = () => {
        router.replace(`/`)
    }

    return (
        <>
            <div onClick={goToMainMenuPage} className="border-gray-700 border chatRow md:mt-0">

                <p>Main Menu</p>
            </div>
            <div onClick={logout} className="border-gray-700 border chatRow md:mt-0">
                <p>Logout</p>
            </div>
        </>
    );
}

export default SideBarLinkButtons;
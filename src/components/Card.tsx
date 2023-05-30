'use client'
import { BoltIcon, ArrowPathRoundedSquareIcon, SunIcon } from '@heroicons/react/24/outline'

type Props = {
    title: string;
    message: string;
    icon: string;
    buttonText: string;
    buttonLink: string;
    duration: string;
    usage: string;
}


const Card = ({ title, message, icon, buttonText, buttonLink, duration, usage }: Props) => {

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
            window.location.href = buttonLink;
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
                <p className="mt-2 text-sm text-gray-500">{duration}</p>
                <p className="mt-2 text-sm text-gray-500">{usage}</p>
            </div>
            <div className="mt-6">
                <a>
                    <button
                        onClick={redirectPage}
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        {buttonText}
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Card

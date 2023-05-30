'use client'
import { useState } from "react";
import HealthCard from "./HealthCard";

const HealthCard1 = () => (
    <HealthCard
        title="Call a friend"
        message="Stay connected with family and friends by scheduling weekly calls to chat about anything. Don't be afraid to surprise them, as most people enjoy unexpected calls. Over time, they may start to expect and initiate the calls themselves."
        icon="sun"
        buttonText="Add to Calendar"
        percentage=''
    />
);
const HealthCard2 = () => (
    <HealthCard
        title="Schedule something"
        message="Schedule weekly or monthly activities like trying a new restaurant, exploring a park or watching a movie together. If your friend or family member is unavailable, try again the next week or call someone else in the meantime."
        icon="sun"
        buttonText="Add to Calendar"
        percentage=''
    />
);
const HealthCard3 = () => (
    <HealthCard
        title="Exercise"
        message="By taking care of yourself and maintaining a healthy lifestyle, you'll not only look and feel good, but people will also notice and want to interact with you more. It's also a great way to make friends. Consider joining a gym or a sports club, such as jogging, rowing, or swimming."
        icon="sun"
        buttonText="Add to Calendar"
        percentage=''
    />
);
const HealthCard4 = () => (
    <HealthCard
        title="Eat good"
        message="Maintaining good nutrition can be challenging, but rewarding yourself with a nice restaurant meal on the weekend after a week of healthy eating can make it much easier."
        icon="sun"
        buttonText="Add to Calendar"
        percentage=''
    />
);
const HealthCard5 = () => (
    <HealthCard
        title="Declutter"
        message="Your living space is a reflection of your mental state. Decluttering your space can be an easy way to have an immediate positive impact on your health. Plus, with more space, you can buy nicer things and show them off to your friends and family!"
        icon="sun"
        buttonText="Add to Calendar"
        percentage=''
    />
);
const HealthCard6 = () => (
    <HealthCard
        title="No food or electronics before bed"
        message="Sleep is one of the most important but challenging aspects of self-care. However, making simple changes like avoiding food 2 hours before bed, avoiding electronic devices 1 hour before bed, keeping your room cool and quiet, and doing breathing techniques can make it easier to get better sleep."
        icon="sun"
        buttonText="Add to Calendar"
        percentage=''
    />
);

const components = [
    { id: 1, component: HealthCard1 },
    { id: 2, component: HealthCard2 },
    { id: 3, component: HealthCard3 },
    { id: 4, component: HealthCard4 },
    { id: 5, component: HealthCard5 },
    { id: 6, component: HealthCard6 },
];

const HealthCardList = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? components.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === components.length - 1 ? 0 : prevIndex + 1));
    };

    const ActiveComponent = components[activeIndex].component;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-between mb-4">
                <div className="mb-4">
                    <ActiveComponent {...components[activeIndex].component} />
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={handlePrevClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mr-4">
                        Prev
                    </button>
                    <p className="text-white-500">
                        {activeIndex + 1}/{components.length}
                    </p>
                    <button onClick={handleNextClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded ml-4">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );

};

export default HealthCardList;

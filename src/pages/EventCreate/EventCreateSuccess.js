import { useEffect, useState } from "react";

import { CheckCircleIcon } from '@heroicons/react/solid'

export default function InvalidToken(props) {
    const [isAnimationPlayed, setIsAnimationPlayed] = useState(false)
    useEffect(() => {
        setTimeout(() => { setIsAnimationPlayed(true) }, 200)
        // eslint-disable-next-line
    }, [])
    return (
        <div className="h-full w-full flex flex-initial flex-col items-center justify-center overflow-hidden px-4 sm:px-10 py-28 ">
            <div className="flex flex-col justify-center my-auto flex-wrap text-center bg-title p-12 rounded-xl shadow-lg">
                <CheckCircleIcon className={`mx-auto w-44 lg:w-80 xl:w-80 my-auto transform transition-transform duration-1000 scale-0 ${isAnimationPlayed ? "scale-100" : "scale-0"}`} color="green" />
                <div className="m-5 ">
                    <div className="text-3xl xl:text-5xl text-primary font-bold mb-1">Event Created!</div>
                    <div className="text-3xl xl:text-5xl text-primary font-light">You can close this window now</div>
                </div>

            </div>

        </div>

    );
}
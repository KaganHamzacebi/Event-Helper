import Header from "../../components/Header";
import { useEffect, useState } from "react";

import { CheckCircleIcon } from '@heroicons/react/solid'

export default function InvalidToken(props) {
    const [isAnimationPlayed, setIsAnimationPlayed] = useState(false)
    useEffect(() => {
        setTimeout(()=>{setIsAnimationPlayed(true)}, 200)
    }, [])
    return (
        <>
            <Header />

            <div className='w-full h-full flex items-center justify-center'>    
                <div className="flex flex-col justify-center flex-wrap container mx-5 md:mx-40 xl:mx-96 text-center bg-title p-12 mb-28 rounded-xl shadow-lg">
                    <CheckCircleIcon className={`mx-auto my-auto transform transition-transform duration-1000 scale-0 ${isAnimationPlayed ? "scale-100":"scale-0"}`}  color="green" size="6x" />
                    <div className="m-5 ">
                        <div className="text-3xl xl:text-5xl text-primary font-bold mb-1">Event Created!</div>
                        <div className="text-3xl xl:text-5xl text-primary font-light">You can close this window now</div>
                    </div>

                </div>

            </div>
        </>

    );
}
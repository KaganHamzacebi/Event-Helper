import { CheckCircleIcon } from '@heroicons/react/solid'

export default function Template({ imgUrl, templateName, selected, select, id }) {
    return (
        <div
            className={
                `transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl 
            rounded-xl mt-6 mb-14 ml-1 bg-gray-700 inline-block ${selected ? "ring-4 ring-green-600" : ""} `}
            onClick={() => { select(id) }}
        >
            <div className='w-96 h-96 rounded-t-xl border-2 border-gray-700'>
                <img className='w-full h-full rounded-t-xl' src={imgUrl} draggable={false} alt='template-img' />
                <CheckCircleIcon color='#8ff27f' className={`absolute top-3 right-3 w-14 ${selected ? "opacity-100" : "opacity-0"} transition-opacity duration-200 ease-in`} />
            </div>
            <h1 style={{ textAlign: 'center', padding: 6, color: 'white' }}><b>{templateName}</b></h1>
        </div>
    );
}
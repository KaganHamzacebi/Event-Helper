import { XIcon } from '@heroicons/react/solid'

export default function Tag({
    name
}) {
    return (
        <div className='pl-2 mb-2 flex flex-row'>
            <div contentEditable='false' className='p-0.5 pl-2 pr-6 select-none bg-content hover:bg-gray-600 transition-color duration-500 text-primary text-sm rounded relative'>
                {name}
                <XIcon className='w-4 absolute inline-block right-1 top-1/2 transform -translate-y-1/2 transition-all duration-500 hover:text-red-600' />
            </div>
        </div>
    )
}
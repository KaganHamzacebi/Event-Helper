export default function TextInput(props) {
    return (
        <div className='mb-8'>
            <h3 className="text-2xl font-bold text-primary mt-6">{props.title}</h3>
            <span className='text-sm text-primary-light'>{props.description}</span>
            <div className='mt-4'>
                <div className="mb-3 pt-0">
                    <input type={props.type} placeholder="Enter Channel" className="px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline w-2/4" />
                </div>
            </div>
        </div>
    );
}
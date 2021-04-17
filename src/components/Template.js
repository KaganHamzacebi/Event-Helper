export default function Template(props) {
    return (
        <div className='transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl rounded-xl mt-6 mr-6 bg-gray-700 inline-block'>
            <div className='w-96 h-96 rounded-t-xl border-2 border-gray-700'>
                <img className='w-full h-full rounded-t-xl' src={props.imgUrl} draggable={false} />
            </div>
            <h1 style={{ textAlign: 'center', padding: 6, color: 'white' }}><b>{props.templateName}</b></h1>
        </div>
    );
}
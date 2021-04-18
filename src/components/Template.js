export default function Template({imgUrl, templateName, selected, select, id}) {
    return (
        
        <div className='transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl rounded-xl mt-6 mb-6 mr-6 bg-gray-700 inline-block' onClick={() => {select(id)}}>
            <div className='w-96 h-96 rounded-t-xl border-2 border-gray-700'>
                <img className='w-full h-full rounded-t-xl' src={imgUrl} draggable={false} />
            </div>
            <h1 style={{ textAlign: 'center', padding: 6, color: 'white' }}><b>{templateName}</b></h1>
        </div>
    );
}
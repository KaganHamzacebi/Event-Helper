import './Loading.css';

export default function Loading() {

    return (
        <div className='flex'>
            <div className="m-auto loader">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
        </div>
    )
}
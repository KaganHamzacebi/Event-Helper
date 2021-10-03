import moment from 'moment';
import { UsersIcon } from '@heroicons/react/solid';

export default function EventsTableRow(event) {

    return {
        title: (
            <div className="flex justify-center gap-x-4">
                <div className='h-8 w-8 my-auto'>
                    {event.thumbnail ?
                        <img
                            className="h-full w-full rounded-3xl border-2 border-red-600"
                            src={event.thumbnail}
                            alt="row_thumbnail"
                        />
                        :
                        <img
                            className="h-full w-full rounded-3xl border-2 border-green-600"
                            src="https://images7.alphacoders.com/957/thumb-1920-957076.png"
                            alt="row_thumbnail_filler"
                        />
                    }

                </div>
                <span className="font-bold my-auto">{event.title}</span>
            </div>
        ),
        leader: (
            <div className="flex justify-center gap-x-4">
                <div className='h-8 w-8 my-auto'>
                    {event.thumbnail ?
                        <img
                            className="h-full w-full rounded-3xl border-2 border-red-600"
                            src={event.leader.avatar}
                            alt="row_thumbnail"
                        />
                        :
                        <img
                            className="h-full w-full rounded-3xl border-2 border-green-600"
                            src="https://images7.alphacoders.com/957/thumb-1920-957076.png"
                            alt="row_thumbnail_filler"
                        />
                    }

                </div>
                <span className="font-bold my-auto">{event.leader.username}</span>
            </div>
        ),
        time: (
            <div>
                <span className='font-bold'>{moment.unix(event.event_date).format("HH:mm")}</span>
                <br />
                <span className='font-bold'>{moment.unix(event.event_date).format("DD MMM YYYY")}</span>
            </div>
        ),
        participants: (
            <div className='flex justify-center gap-x-2'>
                <span className='text-center'>
                    {event.advanced_options.participant_limit === 0 ? 35 + "/" + "∞" : 35 + "/" + event.advanced_options.participant_limit}
                </span>
                <UsersIcon className='h-5 my-auto' />
            </div>
        ),
        actions: (
            <div>
                1234
            </div>
        ),
    }
}
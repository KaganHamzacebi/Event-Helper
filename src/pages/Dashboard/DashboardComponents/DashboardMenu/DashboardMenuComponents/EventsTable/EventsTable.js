import {useMemo, useEffect, useContext, useState} from 'react';
import {useTable, usePagination, useSortBy, useFilters, useGlobalFilter} from 'react-table'
import {
    ChevronRightIcon,
    ChevronLeftIcon,
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon
} from '@heroicons/react/outline';
import {UserContext} from '../../../../../../App';
import {useParams} from 'react-router';

import './EventsTable.css';
import GuildService from '../../../../../../service/GuildService';
import EventsTableRow from './EventsTableRow';

export default function EventsTable() {
    const {userToken} = useContext(UserContext);
    const {id} = useParams();
    const guildService = new GuildService();
    const [events, setEvents] = useState(null);

    useEffect(() => {
        setPageSize(5);
    }, []);

    useEffect(() => {
        async function fetchEvents() {
            const res = await guildService.getEvents(userToken, id);
            if (events == null) {
                setEvents(res.data);
            }
        }

        fetchEvents();
    }, [events])

    useEffect(() => {
        setEvents(null);
    }, [id])

    const deleteEvent = (event) => {
        const index = events.findIndex((e) => e.id === event.id);
        const copyArray = events.slice();
        copyArray.splice(index, 1);
        setEvents(copyArray);
    }

    const data = useMemo(() => {
            return events != null ? events.map((event) => {
                    return EventsTableRow(event, deleteEvent);
                })
                : []
        }
        , [events])

    const columns = useMemo(
        () => [
            {
                Header: 'Title',
                accessor: 'title', // accessor is the "key" in the data
            },
            {
                Header: 'Leader',
                accessor: 'leader',
            },
            {
                Header: 'Time',
                accessor: 'time',
            },
            {
                Header: 'Participants',
                accessor: 'participants',
            },
            {
                Header: 'Actions',
                accessor: 'actions',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize},
    } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='overflow-x-scroll overflow-y-hidden flex-grow'>
                <table className='w-full' {...getTableProps()}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="border-b-2 border-opacity-20 border-gray-300 text-white p-2 text-lg"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="bg-gray-900 bg-opacity-60 text-white text-center py-4"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-row'>
                <div className='flex-grow'></div>
                <div className="flex flex-row pagination gap-x-2 m-1 mt-3">
					<span className='font-bold text-gray-400 my-auto'>
						{pageIndex + 1} of {pageOptions.length}
					</span>
                    <input
                        name="page_no"
                        type="number"
                        size={3}
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        className={'bg-title text-primary py-0.5  px-1 relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'}
                    />
                    <ChevronDoubleLeftIcon className="w-7 h-7 text-white p-1 rounded-full transition hover:bg-black hover:bg-opacity-20 bg-opacity-20" onClick={() => gotoPage(0)} disabled={!canPreviousPage}/>
                    <ChevronLeftIcon className="w-7 h-7 text-white p-1 rounded-full transition hover:bg-black hover:bg-opacity-20 bg-opacity-20" onClick={() => previousPage()} disabled={!canPreviousPage}/>
                    <ChevronRightIcon className="w-7 h-7 text-white p-1 rounded-full transition hover:bg-black hover:bg-opacity-20 bg-opacity-20" onClick={() => nextPage()} disabled={!canNextPage}/>
                    <ChevronDoubleRightIcon className="w-7 h-7 text-white p-1 rounded-full transition hover:bg-black hover:bg-opacity-20 bg-opacity-20" onClick={() => gotoPage(pageCount - 1)}
                                            disabled={!canNextPage}/>
                </div>
            </div>
        </div>
    )
}
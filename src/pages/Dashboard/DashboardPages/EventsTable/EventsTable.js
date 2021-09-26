import { useMemo } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useGlobalFilter } from 'react-table'
import { ChevronRightIcon, ChevronLeftIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/outline';

import './EventsTable.css';
import TextInput from '../../../../components/TextInput';

export default function EventTable() {

    const data = useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'World',
                col4: 'World',
                col5: 'World',
                col6: 'World',

            },
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'World',
                col4: 'World',
                col5: 'World',
                col6: 'World',
            },
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'World',
                col4: 'World',
                col5: 'World',
                col6: 'World',
            },
        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: 'Title',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Leader',
                accessor: 'col2',
            },
            {
                Header: 'Time',
                accessor: 'col3',
            },
            {
                Header: 'Date',
                accessor: 'col4',
            },
            {
                Header: 'Participants',
                accessor: 'col5',
            },
            {
                Header: 'Actions',
                accessor: 'col6',
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
        pageIndex,
        pageSize,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
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
        <div className='w-full h-full overflow-x-scroll overflow-y-hidden flex flex-col c'>
            <table className='w-full' {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    /* CLASSNAMELER GELCEK HEADER */
                                    className="border-b-2 border-opacity-20 border-gray-300 text-white p-2 text-lg"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            /* CLASSNAME GELCEK DATA HUCRELERI */
                                            className="bg-green text-white text-center py-4"
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

            <div className='flex-grow'></div>
            <div className='flex flex-row'>
                <div className='flex-grow'></div>
                <div className="flex flex-row pagination gap-x-2">
                    <span>
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <TextInput
                        type="number"
                        defaultValue={pageIndex + 1}
                        title=''
                        name='page'
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                    <div className='p-2 border-2 border-black bg-blue-300 rounded'>
                        <ChevronDoubleLeftIcon className="w-6" onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                    </div>
                    <div className='p-2 border-2 border-black bg-blue-300 rounded'>
                        <ChevronLeftIcon className="w-6" onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                    </div>
                    <div className='p-2 border-2 border-black bg-blue-300 rounded'>
                        <ChevronRightIcon className="w-6" onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                    </div>
                    <div className='p-2 border-2 border-black bg-blue-300 rounded'>
                        <ChevronDoubleRightIcon className="w-6" onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                    </div>
                </div>
            </div>
        </div>
    )
}
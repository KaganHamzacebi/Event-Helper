/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownInput({
    content
}) {

    const [value, setValue] = useState('');

    return (
        <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border bg-title border-gray-900 shadow-lg text-primary px-4 py-2 text-sm font-medium">
                            Options
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        >
                            <div className="py-1 bg-title text-primary">
                                {
                                    content.map((item, index) => {
                                        return <Menu.Item key={index}>
                                            {({ active }) => (
                                                <a
                                                    value={value}
                                                    onChange={() => setValue(item)}
                                                    className={classNames(
                                                        active ? 'bg-gray-700 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    {item}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    })
                                }
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

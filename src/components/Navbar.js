import React from 'react';
import logo from '../assets/logo.svg';
// import { Disclosure } from "@headlessui/react";
// import { ChevronRightIcon } from '@heroicons/react/20/solid';

const navigation = [
    { name: 'About Me', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'CV & Experience', href: '#'},
    { name: 'Contact', href: '#'},
]

export default function Navbar() {
    const navButtons = navigation.map(
        entry => <NavButton name={entry.name} link={entry.href}/>
    );

    return (
        <nav className="w-screen bg-gray-800 py-2 px-1">
            <Logo className="w-16 md:w-20 float-left"/>
            <div className="w-auto hidden justify-end md:flex">
                {navButtons}
            </div>
        </nav>
    );

    // return (
    //     <nav className="mx-auto w-screen bg-gray-800 py-2 px-1 items-center flex">
    //         <Logo className="w-16 md:w-20" />
    //         <div id="navButtons" className="mx-auto border hidden xs:flex xs:flex-row">
    //             {navButtons}
    //         </div>
    //     </nav>
    // );
}

function NavButton({name, link}) {
    return (
        <a href={link} className="flex-initial mx-1.5 w-60 ">
            <button className="bg-gray-600 hover:bg-gray-500 focus:bg-gray-500 rounded-md text-amber-50 p-2 md:p-4 w-full">
                {name}
            </button>
        </a>
    );
}

function Logo({ className }) {
    return (
        <img id='logo' src={logo} className={className} alt="logo" />
    );
}


// import { Fragment } from 'react'
// import { Disclosure } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

//
// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//     return (
//         <Disclosure as="nav" className="bg-gray-800">
//             {({ open }) => (
//                 <>
//                     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                         <div className="relative flex h-16 items-center justify-between">
//                             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                                 {/* Mobile menu button*/}
//                                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                                     <span className="absolute -inset-0.5" />
//                                     <span className="sr-only">Open main menu</span>
//                                     {open ? (
//                                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                                     ) : (
//                                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                                     )}
//                                 </Disclosure.Button>
//                             </div>
//                             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                                 <div className="flex flex-shrink-0 items-center">
//                                     <img
//                                         className="h-8 w-auto"
//                                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                                         alt="Your Company"
//                                     />
//                                 </div>
//                                 <div className="hidden sm:ml-6 sm:block">
//                                     <div className="flex space-x-4">
//                                         {navigation.map((item) => (
//                                             <a
//                                                 key={item.name}
//                                                 href={item.href}
//                                                 className={classNames(
//                                                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                                     'rounded-md px-3 py-2 text-sm font-medium'
//                                                 )}
//                                                 aria-current={item.current ? 'page' : undefined}
//                                             >
//                                                 {item.name}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     <Disclosure.Panel className="sm:hidden">
//                         <div className="space-y-1 px-2 pb-3 pt-2">
//                             {navigation.map((item) => (
//                                 <Disclosure.Button
//                                     key={item.name}
//                                     as="a"
//                                     href={item.href}
//                                     className={classNames(
//                                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                         'block rounded-md px-3 py-2 text-base font-medium'
//                                     )}
//                                     aria-current={item.current ? 'page' : undefined}
//                                 >
//                                     {item.name}
//                                 </Disclosure.Button>
//                             ))}
//                         </div>
//                     </Disclosure.Panel>
//                 </>
//             )}
//         </Disclosure>
//     )
// }

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Pricing', href: '/pricing' },
// ] - better nav display, check the commented section below

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {/* {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            {item.name}
                        </Link>
                    ))} */}

                    <NavLink // allows more functionalities than Link, isActive needs to be destructured, there are more options
                        to="/"
                        className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900 ${isActive ? 'underline' : ''}`}
                    // style={({ isActive }) => isActive ? { color: 'red' } : {}}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900 ${isActive ? 'underline' : ''}`}
                    // style={({ isActive }) => isActive ? { color: 'red' } : {}}

                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/articles"
                        className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900 ${isActive ? 'underline' : ''}`}
                    // style={({ isActive }) => isActive ? { color: 'red' } : {}}

                    >
                        Articles
                    </NavLink>
                    <NavLink
                        to="/pricing"
                        className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900 ${isActive ? 'underline' : ''}`}
                    // style={({ isActive }) => isActive ? { color: 'red' } : {}}

                    >
                        Pricing
                    </NavLink>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {/* {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))} */}
                                <Link
                                    to="/"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/pricing"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Pricing
                                </Link>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
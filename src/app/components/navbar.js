/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-46 w-auto relative mr-16 lg:hidden"
                    width={100}
                    height={100}
                    src="/images/logos/bestauto.png"
                    alt="Best Auto Deals, LLC"
                  />
                  <Image
                    className="hidden h-46 relative mr-16 w-auto lg:block"
                    width={100}
                    height={100}
                    src="/images/logos/bestauto.png"
                    alt="Best Auto Deals, LLC"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8  ">
                  {/*              Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className="inline-flex items-center border-b-2 active:border-zinc-500 active:text-gray-900 border-transparent hover:border-gray-300 border-zinc-500 px-1 pt-1 text-sm font-medium text-gray-500"
                  >
                    Home
                  </a>
                  <a
                    href="/current"
                    className="inline-flex items-center border-b-2  px-1 pt-1 active:border-zinc-500 active:text-gray-900 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Current Listings
                  </a>

                  <a
                    href="/sold"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Sold Listings
                  </a>
                  <a
                    href="/faq"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    FAQ
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-zinc-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-zinc-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Current Listings
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="current"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Sold Listings
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/sold"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                FAQ
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/faq"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                About
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

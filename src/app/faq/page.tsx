"use client";
import React from "react"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const faqs = [
  {
    question: "Where do we buy the cars we sell?",
    answer:
      "Most of our cars are bought from salvage auto auctions. We also buy cars from private sellers.",
  },
  {
    question: "How are the cars repaired?",
    answer:
      "We have a team of mechanics that repair the cars. We also have a body shop that repairs the body of the cars. We also have a paint shop that paints the cars. All of our cars are repaired to the highest standards and inspected before sale.",
  },
  {
    question: "How are prices determined?",
    answer:
      "We use the Kelly Blue Book to determine the value of the car. We also take into account the condition of the car.",
  },
  {
    question: "What is the process of buying a car from us?",
    answer:
      "You can call you email to set up a time to come see the car or just come on by during working hours. If you buy a car in person, you can drive the car home same day.",
  },
  {
    question: "What kind of cars do we sell?",
    answer:
      "We sell all kinds of cars. We have sedans, coupes, trucks, and SUVs. We also sell cars of all makes and models. Please check our inventory to see what we have in stock.",
  },
  {
    question: "Types of payment we accept?",
    answer:
      "We accept only cash or check at this time. We also offer Buy Here Pay Here financing.",
  },
  // More questions...
]

export default function Faq() {
  return (
    <><Navbar />
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
      <Footer />
    </div></>
  )
}

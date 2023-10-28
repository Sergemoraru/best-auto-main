/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import Footer from "../app/components/footer";
import Navbar from "../app/components/navbar";
import aboutus1 from "/public/images/aboutus1.png";
import Image from "next/image";

const values = [
  {
    name: "Innovative Solutions.",
    description:
      "In a rapidly changing automotive landscape, we stay ahead by adopting innovative solutions and technologies, ensuring our customers have access to the latest and most efficient options available.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Quality Assurance.",
    description:
      "Every car and part we sell undergoes a rigorous inspection, ensuring our customers receive only the best, safe, and reliable products.",
    icon: HandRaisedIcon,
  },
  {
    name: "Customer-Centric.",
    description:
      "Our customers are our top priority. We strive to understand their needs and exceed their expectations, fostering long-lasting relationships.",
    icon: UserGroupIcon,
  },
  {
    name: "Continuous Improvement",
    description:
      "The automotive world is ever-evolving, and so are we. We continually seek to improve our services, products, and knowledge to serve our customers better.",
    icon: AcademicCapIcon,
  },
  {
    name: "Integrity.",
    description:
      "We believe in honest dealings and transparent transactions, ensuring our customers can trust us every step of the way.",
    icon: SparklesIcon,
  },
  {
    name: "Reliability.",
    description:
      "We understand the importance of dependable vehicles and parts in our customers' lives. Every product we offer is tested and vetted for maximum reliability and longevity.",
    icon: SunIcon,
  },
];

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>

        {/* Header section */}
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text-sky-800 sm:text-6xl">
              About Us
            </h2>
            <h3 className="mt-6 text-xl leading-8 text-gray-600 font-semibold">
              Meet the Heart Behind the Wheels
            </h3>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  <span className="font-bold text-sky-700">
                    A Passion for Cars
                  </span>
                  <br />
                  Ever since I could remember, cars have been more than just
                  vehicles to me; they've been a lifelong passion. My earliest
                  memories are filled with the hum of engines and the shimmer of
                  polished paint. This love for cars led me to establish this
                  dealership, bringing quality and reliability to every
                  customer.
                </p>
                <p className="mt-8">
                  <span className="font-bold text-sky-700">
                    Commitment to Quality Quality
                  </span>
                  <br />
                  Commitment to Quality Quality isn't just a word—it's a
                  promise. From the vehicles we source to the parts we sell,
                  every item that passes through our doors meets the highest
                  standards. Our meticulous approach ensures that our customers
                  drive away with not just a car, but a companion for the road
                  ahead.
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold text-sky-700">
                    Building Trust, One Deal at a Time
                  </span>
                  <br />
                  In this industry, trust is everything. We believe in
                  transparency, honesty, and integrity in every deal. Our
                  customers know that when they come to us, they're not just
                  making a purchase—they're joining a community that values and
                  supports them.
                </p>
                <p className="mt-8">
                  <span className="font-bold text-sky-700">
                    Forging Lasting Relationships
                  </span>
                  <br />
                  Beyond transactions and trades, what truly drives us is the
                  relationships we build with our customers. We value the
                  personal connections and the stories shared, ensuring that
                  each individual feels valued and understood. For us, it's not
                  just about cars—it's about the community and the bonds we
                  create.
                </p>
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4"></dl>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            src={aboutus1}
            alt="About us image"
            className="aspect-[9/4] px-40 w-full h-auto xl:rounded-3xl"
            placeholder="blur"
            height={1200}
            width={800}
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
              Our Core Values
            </h2>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-slate-500 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-stone-600">
                  <value.icon
                    className="absolute left-1 top-1 h-5 w-5 text-sky-700"
                    aria-hidden="true"
                  />
                  {value.name}
                </dt>{" "}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

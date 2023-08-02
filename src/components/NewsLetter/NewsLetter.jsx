import React, { useState } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import {
    Alert,
} from "@material-tailwind/react";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default function NewsLetter() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormError, setIsFormError] = useState(false);

    async function handleNewsSubmite(e) {
        e.preventDefault();
        const form = e.currentTarget;
        console.log('Submitted Successfully');
        const formData = new FormData(form);
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbxf7oGJk6PeTfU3RXZHYM68at3ImMdm-fIampaznCj8MwGoTSOPXVX1Mw_NRb8ePIhSgg/exec", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setIsFormSubmitted(true);
                setIsFormError(false);
                form.reset();
            } else {
                setIsFormSubmitted(false);
                setIsFormError(true);
            }
        } catch (error) {
            setIsFormSubmitted(false);
            setIsFormError(true);
            console.log('An error occurred. Please try again later.', error);
        }
    }

    // Modal component
    const SuccessModal = () => (
        <div className="modal">
            <div className="modal-content">
                <Alert
                    icon={<Icon />}
                    className="rounded-none mb-8 border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                >
                    Request Sent Successfully!
                </Alert>
                <button onClick={() => setIsFormSubmitted(false)}>Close</button>
            </div>
        </div>
    );

    return (
        <div className="relative py-16 overflow-hidden bg-gray-900 isolate sm:py-24 lg:py-32">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
            />
            <div className="px-6 mx-auto max-w-7xl z-10 lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div id='newsletter' className="max-w-xl lg:max-w-lg ">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Stay updated with our latest news and exclusive offers by subscribing to our newsletter. Join our community today and never miss out on exciting updates!
                        </p>
                        <form className="flex max-w-md mt-6 gap-x-4" onSubmit={handleNewsSubmite}>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-white ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                                style={{ outline: 'none' }}
                            />

                            <button
                                type="submit"
                                className="flex-none rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <dl id='news-main' className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="p-2 rounded-md bg-white/20 ring-1 ring-white/20">
                                <CalendarDaysIcon className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>

                            <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Explore a world of knowledge with our weekly newsletter featuring curated articles on diverse topics.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="p-2 rounded-md bg-white/20 ring-1 ring-white/20">
                                <HandRaisedIcon className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">No spam</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Subscribe now for our no-spam weekly articles, and receive a treasure trove of curated content delivered directly to your inbox.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            {/* Conditionally render the SuccessModal when isFormSubmitted is true */}
            {isFormSubmitted && <SuccessModal />}
        </div>
    );
};
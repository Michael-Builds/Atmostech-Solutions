import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Alert,
    Button,
    Typography,
    Tabs,
    TabsBody,
    TabPanel,
} from "@material-tailwind/react";
import Image from './sad.png';
import { useNavigate } from "react-router-dom";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path
                fillrule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function ErrorIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-red-500"
        >
            <path
                fillrule="evenodd"
                d="M12 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 20.627 0 14 5.373 2 12 2zm0 1c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S17.523 3 12 3zm1 13h-2v-2h2v2zm0-4h-2V7h2v5z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default function Unsubscription() {
    const navigate = useNavigate();
    const [reasons, setReasons] = useState({
        reason1: false,
        reason2: false,
        reason3: false,
        reason4: false,
    });

    const [type] = React.useState("card");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormError, setIsFormError] = useState(false);
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('Unsubscribed');

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        setReasons((prevReasons) => ({
            ...prevReasons,
            [name]: !prevReasons[name],
        }));
    };

    const reasonDisplayNames = {
        reason1: "Irrelevant Content",
        reason2: "Email Overload",
        reason3: "Privacy Concerns",
        reason4: "Changed Preferences",
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if at least one checkbox is checked
        const isAnyReasonSelected = Object.values(reasons).some((isChecked) => isChecked);

        if (!isAnyReasonSelected) {
            // Display error message or handle it as needed
            setIsFormError(true);
            return;
        }
        // Convert the reasons object into an array of selected reasons
        const selectedReasons = Object.keys(reasons).filter((reason) => reasons[reason]);
        const selectedReasonDisplayNames = selectedReasons.map((reason) => reasonDisplayNames[reason]);

        try {
            const response = await fetch('https://v1.nocodeapi.com/kpanti/google_sheets/hJoVtXWJDNiMyWHN?tabId=NewsLetter-Unsub', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([[email, subscriptionStatus, selectedReasonDisplayNames.join(', '), new Date().toLocaleString()]]),
            });
            const responseData = await response.json();
            console.log("API Response:", responseData);

            if (response.ok) {
                setIsFormSubmitted(true);
                setEmail('');
                setReasons({
                    reason1: false,
                    reason2: false,
                    reason3: false,
                    reason4: false,
                });
                setIsFormError(false);
                setSubscriptionStatus('Unsubscribed');
            } else {
                setIsFormError(true);
            }

        } catch (err) {
            console.log(err);
            setIsFormError(true);
        }
    };

    // Success Modal component
    const SuccessModal = () => (
        <div className="modal">
            <div className="modal-content">
                <Alert
                    icon={<Icon />}
                    className="rounded-none mb-8 border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                >
                    You've successfully Unsubscribed to our Newsletter
                </Alert>
                <button
                    onClick={() => {
                        setIsFormSubmitted(false);
                        navigate("/");
                    }}
                >Close</button>
            </div>
        </div>
    );

    // Error Modal component
    const ErrorModal = () => (
        <div className="modal">
            <div className="modal-content">
                <Alert
                    icon={<ErrorIcon />}
                    className="rounded-none mb-8 border-l-4 border-red-500 bg-red-50 font-medium text-red-500"
                >
                    An error occurred. Please try again later.
                </Alert>
                <button id='error-modal' onClick={() => setIsFormError(false)}>Close</button>
            </div>
        </div>
    );

    return (

        <div className="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
            />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            ></div>

            <div id='unsubscription-form' className="flex items-center justify-center h-screen">
                <Card id='subscription-card' className="w-full max-w-[24rem]">

                    <CardHeader
                        id='card-header'
                        floated={false}
                        shadow={false}
                        className="m-0  grid place-items-center rounded-b-none py-8 px-4 text-center"
                    >
                        <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
                            <img
                                src={Image}
                                alt=''
                                className="header-logo" />
                        </div>
                        <Typography id="unsubscription-header" className='header-unsubscription' variant="h4" color="white">
                            Newsletter Unsubscription
                        </Typography>
                    </CardHeader>
                    <CardBody>
                        <Tabs value={type} className="overflow-visible">
                            <TabsBody className="!overflow-x-hidden !overflow-y-visible">
                                <TabPanel value="card" className="p-0">
                                    <form id='form-unsubscription' onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">

                                        <div className=" unsubscribe-inputs">
                                            <Input
                                                type="email"
                                                label="Email Address"
                                                name='email'
                                                required
                                                value={email}
                                                labelProps={{ className: "unsubcribe-label" }}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="my-4">
                                            <label className="block mb-2 checkbox-main-label">
                                                Reasons
                                            </label>
                                            <div className="space-y-2 checklist">
                                                <label className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        name="reason1"
                                                        checked={reasons.reason1}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <span id='checkbox-reason' >Irrelevant Content</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        name="reason2"
                                                        checked={reasons.reason2}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <span id='checkbox-reason'>Email Overload</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        name="reason3"
                                                        checked={reasons.reason3}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <span id='checkbox-reason' >Privacy Concerns</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        name="reason4"
                                                        checked={reasons.reason4}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <span id='checkbox-reason' >Changed Preferences</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="unsubscription-btn">
                                            <Button type='submit' className="bg-transparent unsubscription-text text-white">
                                                Unsubscribe
                                            </Button>
                                        </div>
                                    </form>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>

            {/* Conditionally render the SuccessModal / Error Modal when isFormSubmitted is true */}
            {isFormSubmitted && <SuccessModal />}
            {isFormError && <ErrorModal />}
        </div>
    );
}

import { Facebook, Instagram, Linkedin, TwitterX } from "@/components/Icons";
import NavBar from "@/components/NavBar";
import { TContactFormMessage, sendContactMessage } from "@/lib/api";
import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const [loading, setLoading] = React.useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const values = e.target as any;
        const data: TContactFormMessage = {
            email: values.email.value,
            first_name: values.first_name.value,
            phone_number: values.phone_number.value,
            message: values.message.value,
        };

        sendContactMessage(data)
            .then((res) => {
                toast.success("Your message has been submitted successfully.");
            })
            .catch((err) => {
                toast.error(
                    "Please try again. We could not send your message."
                );
            })
            .finally(() => setLoading(false));
    };
    return (
        <main className="2xl:h-screen min-h-screen flex flex-col bg-[url('/images/contact-page-bg.png')] bg-cover pb-20 2xl:pb-0">
            <NavBar />
            <div className="flex-grow grid xl:gap-0  gap-5 grid-cols-1 xl:grid-cols-2 container items-center">
                <div className="space-y-5 flex flex-col xl:items-start items-center xl:order-none order-last">
                    <div className="xl:flex xl:flex-col hidden">
                        <h1 className="text-primary font-semibold text-4xl font-clash">
                            Get in touch
                        </h1>
                        <p>
                            Contact <br />
                            Information
                        </p>
                        <p>
                            27,Alara Street
                            <b /> Yaba 100012 <b /> Lagos State
                        </p>
                        <p>Call Us : 07067981819</p>
                        <p>
                            we are open from Monday-Friday
                            <br /> 08:00am - 05:00pm
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-primary font-semibold text-center xl:text-left">
                            Share on
                        </p>
                        <ul className="flex items-center space-x-3">
                            <li>
                                <Instagram />
                            </li>
                            <li>
                                <TwitterX />
                            </li>
                            <li>
                                <Facebook />
                            </li>
                            <li>
                                <Linkedin />
                            </li>
                        </ul>
                    </div>
                </div>

                <form
                    action="#"
                    onSubmit={handleSubmit}
                    className="w-full xl:bg-white/5 rounded-xl xl:shadow-2xl xl:p-14 md:p-10 p-5  flex flex-col space-y-8"
                >
                    <p className="text-primary font-clash font-semibold text-xl">
                        Questions or need assistance? <br /> Let us know about
                        it!
                    </p>
                    <p className="xl:hidden">
                        Email us below to any question related to our event
                    </p>
                    <input
                        name="first_name"
                        type="text"
                        required
                        placeholder="First Name"
                        className="bg-white/5 placeholder:text-white px-5 py-3 border-white border rounded-md outline-none"
                    />
                    <input
                        name="email"
                        required
                        type="email"
                        placeholder="Mail"
                        className="bg-white/5 placeholder:text-white px-5 py-3 border-white border rounded-md outline-none"
                    />
                    <input
                        name="phone_number"
                        type="tel"
                        placeholder="Phone"
                        className="bg-white/5 placeholder:text-white px-5 py-3 border-white border rounded-md outline-none"
                    />
                    <textarea
                        required
                        className="bg-white/5 placeholder:text-white px-5 py-3 border-white border rounded-md outline-none"
                        name="message"
                        placeholder="Message"
                        rows={10}
                    ></textarea>
                    <button
                        disabled={loading}
                        type="submit"
                        className="primary-btn self-start mx-auto"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;

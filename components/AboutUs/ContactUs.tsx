import Map from './Map';

const ContactUs = () => {
    const address =
        'Shubham Complex, Opposite Navrangpura Jain Temple, Navrangpura, Ahmedabad, Gujarat - 380009';

    return (
        <div className="text-[#546FFF] px-[50px] xl:px-[150px] py-[60px] flex flex-col items-center">
            <p>Contact Us</p>

            <h2 className="text-[30px] font-[700] mt-[1.5rem] mb-[0.5rem]">
                Let&apos;s secure your future with secure sure
            </h2>

            <div className="bg-[#F0F2FF] w-full rounded-3xl flex px-10 gap-4">
                <form
                    className="w-1/2 flex flex-col justify-center items-center gap-4 py-10"
                    autoComplete="off"
                >
                    <div className="w-full flex gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            id="firstName"
                            className="w-1/2 border border-[#546FFF] placeholder-[#546FFF] rounded-full py-2 px-5 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            id="lastName"
                            className="w-1/2 border border-[#546FFF] placeholder-[#546FFF] rounded-full py-2 px-5 outline-none"
                        />
                    </div>

                    <div className="w-full flex gap-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                            id="email"
                            className="w-1/2 border border-[#546FFF] placeholder-[#546FFF] rounded-full py-2 px-5 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Contact number"
                            name="contactNumber"
                            id="contactNumber"
                            className="w-1/2 border border-[#546FFF] placeholder-[#546FFF] rounded-full py-2 px-5 outline-none"
                        />
                    </div>

                    <div className="rounded-3xl border border-[#546FFF] bg-white py-3 px-5 w-full">
                        <textarea
                            placeholder="Message"
                            name="message"
                            id="message"
                            // cols={30}
                            className="w-full border-0 placeholder-[#546FFF] outline-none"
                            rows={5}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>

                <div className="flex-1 py-6">
                    <Map address={address} />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

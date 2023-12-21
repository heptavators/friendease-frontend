export default function Error() {
    return (
        <div className="bg-neutralPrimary min-h-screen">
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex justify-center">
                    <svg height="32" style={{ overflow: 'visible', background: 'new 0 0 32 32' }} viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g>
                            <g id="Error_1_">
                                <g id="Error">
                                    <circle cx="16" cy="16" id="BG" r="16" style={{ fill: '#D72828' }} />
                                    <path d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z" id="Exclamatory_x5F_Sign" style={{ fill: '#E6E6E6' }} />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-red-500 font-semibold text-center">Payment Error!</h3>
                    <p className="text-gray-600 my-2">Your payment is failed, please try again.</p>
                    <div>
                        <img className="mx-auto h-28 object-cover" src="/favicon.png" alt="Friendease Logo" />
                        <p className="text-primary">Friendease</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

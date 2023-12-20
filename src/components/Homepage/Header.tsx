import headerImg from '/assets/images/pexels-kampus-production-5935242.jpg'

export default function Header() {
    return (
        <header className="bg-primary">
            <div className='flex max-w-7xl mx-auto' style={{
                background: "linear-gradient(rgba(155, 39, 79, 0.5), rgba(155, 39, 79, 0.5) 100%, rgba(155, 39, 79, 0.5)), url('/assets/images/pexels-photo-6168976.jpeg')",
                backgroundSize: "full",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
                height: "40vh",
            }}>
                <div className="my-auto flex flex-col gap-5 max-w-xl p-5">
                    <h1 className="text-white text-5xl font-bold">Gak perlu takut sendirian lagi!</h1>
                    <p className="text-white text-xl font-bold">#bersamalebihasyik</p>
                </div>
            </div>
        </header>
    )
}

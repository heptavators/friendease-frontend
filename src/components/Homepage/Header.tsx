import headerImg from '/assets/images/header.svg'

export default function Header() {
    return (
        <header className="bg-primary flex justify-around p-16">
            <div className="my-auto flex flex-col gap-5">
                <h1 className="text-white text-5xl font-bold">Gak perlu takut sendirian lagi!</h1>
                <p className="text-white text-xl">#bersamalebihasyik</p>
            </div>
            <img src={headerImg} alt="header" className="w-1/2" />
        </header>
    )
}

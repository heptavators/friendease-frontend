import imgDetail from '/assets/images/card1.svg';
import imgDetail2 from '/assets/images/card2.svg';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

export default function Content() {
    return (
        <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 lg:grid-cols-2 gap-5 p-8">
            <div className=" bg-neutral rounded-2xl p-8 flex flex-col justify-center shadow-lg">
                <div className="flex flex-col gap-5 my-auto">
                    <h1 className="text-4xl font-bold">Bosen sendirian? Cari teman jalan!</h1>
                    <p className="text-xl">#bersamalebihasyik</p>
                    <p className="text-xl">Ajak jalan sekarang <ArrowCircleRightRoundedIcon fontSize="large" /></p>
                </div>
            </div>
            <img src={imgDetail} alt="header" className="w-3/4 mx-auto" />
            <img src={imgDetail2} alt="header" className="w-3/4 mx-auto hidden lg:block" />
            <div className=" bg-neutral rounded-2xl p-8 flex flex-col justify-center shadow-lg">
                <div className="flex flex-col gap-5 ">
                    <h1 className="text-4xl font-bold">Dapatkan promo menarik dari EaseWallet!</h1>
                    <p className="text-xl">Aktivasinya GRATIS dan dapatkan diskon untuk pesanan pertamamu! S&K Berlaku~</p>
                    <div>
                        <button type="button" className="bg-primary rounded-3xl text-white font-bold text-xl py-2 px-4">Coba EaseWallet</button>
                    </div>
                </div>
            </div>
            <img src={imgDetail2} alt="header" className="w-3/4 mx-auto block lg:hidden" />

        </div>
    )
}

import { Team } from "src/types/team";

const ourTeamList = [
    {
        name: "Farhan Rivaldy",
        bangkitId: "C270BSY3044",
        path: "Cloud Computing",
        primaryEmail: "mailto:fariv.fariv12@gmail.com",
        secondaryEmail: "c270bsy3044@bangkit.academy",
        linkedIn: "https://www.linkedin.com/in/farhanrivaldy/",
        github: "https://github.com/HaradaKumiko",
        photoURL: "assets/images/team/farhan.jpg"
    }, {
        name: "Alfizdiana Sholikhah",
        bangkitId: "C006BSX3816",
        path: "Cloud Computing",
        primaryEmail: "mailto:alfizdiana12@gmail.com",
        secondaryEmail: "c006bsx3816@bangkit.academy",
        linkedIn: "https://www.linkedin.com/in/alfizdiana-sholikhah-7a06a3222/",
        github: "https://github.com/alfizdiana",
        photoURL: "assets/images/team/alfiz.jpeg"
    }, {
        name: "Ahmad Rusdianto Andarina Syakbani",
        bangkitId: "M116BSY0745",
        path: "Machine Learning",
        primaryEmail: "mailto:ahmd.rusdian@gmail.com",
        secondaryEmail: "m116bsy0745@bangkit.academy",
        linkedIn: "https://www.linkedin.com/in/ahmad-rusdianto-andarina-syakbani-4b7421238",
        github: "https://github.com/ARusDian",
        photoURL: "assets/images/team/dian.jpg"
    }, {
        name: "Jordan Marcelino",
        bangkitId: "M315BSY0093",
        path: "Machine Learning",
        primaryEmail: "jhordan.marcelino@gmail.com",
        secondaryEmail: "m315bsy0093@bangkit.academy",
        linkedIn: "https://www.linkedin.com/in/jordan-marcelino-0b3b8621b/",
        github: "https://github.com/jordanmarcelino",
        photoURL: "assets/images/team/jordan.jpg"
    }, {
        name: "Muhammad Fathurrohim",
        bangkitId: "M116BSY1249",
        path: "Machine Learning",
        primaryEmail: "m.faturrohim13@gmail.com",
        secondaryEmail: "m116bsy1249@bangkit.academy",
        linkedIn: "https://www.linkedin.com/in/muhammad-fathurrohim-1a7931221/",
        github: "https://github.com/Uskrai",
        photoURL: "assets/images/team/fathur.jpg"
    }, {
        name: "Archie Dylan Ramadhan",
        bangkitId: "A116BSY2329",
        path: "Mobile Development",
        primaryEmail: "mailto:archie3036@gmail.com",
        secondaryEmail: "a116bsy2329@bangkit.academy",
        linkedIn: "https://www.linkedin.com/in/archie-dylan-ramadhan/",
        github: "https://github.com/ArDylan",
        photoURL: "assets/images/team/dylan.jpg"
    }, {
        name: "Heru Aryasuta",
        bangkitId: "A251BSY2081",
        path: "Mobile Development",
        primaryEmail: "mailto:aryasutaheru08@gmail.com",
        secondaryEmail: "a251bsy2081@bangkit.academy",
        linkedIn: "https://www.linkedin.com/in/heru-aryasuta-87577b262/",
        github: "https://github.com/HeruAryasuta",
        photoURL: "assets/images/team/heru.jpg"
    }
];

export default function OurTeam() { 

    return (
        <section className="w-full m-8 border rounded-xl">
            <div className="flex justify-center">
                <div className="flex flex-col gap-3">
                    <p className="text-4xl font-bold text-center mt-16 mb-8">
                        Tim Kami
                    </p>
                    <p className="text-xl font-semibold text-slate-400">

                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 my-8 gap-12">
                {ourTeamList.map((member: Team) => (
                    <div className="flex flex-col gap-3" key={member.bangkitId}>
                        <img src={member.photoURL} alt="profile" className="mx-auto rounded-full w-1/4" />
                        <p className="text-2xl font-semibold text-center">{member.name}</p>
                        <p className="text-xl font-semibold text-center text-slate-400">{member.path}</p>
                        <div className="flex justify-center gap-8">
                            <a href={member.primaryEmail} target="_blank" className="my-auto" rel="noreferrer">
                                <img src="assets/images/icons/gmail.svg" alt="gmail" className="mx-auto w-8" />
                            </a>
                            <a href={member.linkedIn} target="_blank" className="my-auto" rel="noreferrer">
                                <img src="assets/images/icons/linkedin.svg" alt="linkedin" className="mx-auto w-8" />
                            </a>
                            <a href={member.github} target="_blank" className="my-auto" rel="noreferrer">
                                <img src="assets/images/icons/github.svg" alt="github" className="mx-auto w-8" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

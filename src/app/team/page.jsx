import TeamBuilt from "./_components/TeamBuilt";
import TeamCollab from "./_components/TeamCollab";
import TeamHero from "./_components/TeamHero";
import TeamHow from "./_components/TeamHow";
import TeamOur from "./_components/TeamOur";
import TeamProcess from "./_components/TeamProcess";
import TeamValues from "./_components/TeamValues";
import TeamWhat from "./_components/TeamWhat";
import TeamWho from "./_components/TeamWho";
import TeamWork from "./_components/TeamWork";


export const metadata = {
    title: "Meet the Bizorax Team | Expertise Driving Success",
    description:
        "Get to know the skilled professionals behind Bizorax, who are dedicated to crafting innovative solutions for business success.",
    openGraph: {
        title: "Meet the Bizorax Team | Expertise Driving Success",
        description:
            "Get to know the skilled professionals behind Bizorax, who are dedicated to crafting innovative solutions for business success.",
        images: "/images/meta-banner.jpg",
    },
};

export default function Team() {
    return (
        <>
            <TeamHero />
            <TeamWho />
            <TeamWhat />
            <TeamBuilt />
            <TeamOur />
            <TeamValues />
            <TeamCollab />
            <TeamHow />
            <TeamProcess />
            <TeamWork />
        </>
    );
}

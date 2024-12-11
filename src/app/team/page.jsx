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
    title: "",
    description:
        "",
    openGraph: {
        title: "",
        description:
            "",
        images: "",
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

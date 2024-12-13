import ArticleHero from "./_components/ArticleHero";
import ArticleMain from "./_components/ArticleMain";


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

export default function Article01() {
    return (
        <>
            <ArticleHero />
            <ArticleMain />
        </>
    );
}

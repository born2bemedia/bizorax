import ArticleHero from "./_components/ArticleHero";
import ArticleMain from "./_components/ArticleMain";


export const metadata = {
    title: "Top 5 Digital Tools to Streamline Business Operations",
    description:
        "Learn about the top digital tools to enhance productivity, improve workflows, and streamline business operations.",
    openGraph: {
        title: "Top 5 Digital Tools to Streamline Business Operations",
        description:
            "Learn about the top digital tools to enhance productivity, improve workflows, and streamline business operations.",
            images: "/images/meta-banner.jpg",А
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

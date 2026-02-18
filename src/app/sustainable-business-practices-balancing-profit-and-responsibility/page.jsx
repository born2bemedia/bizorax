import ArticleHero from "./_components/ArticleHero";
import ArticleMain from "./_components/ArticleMain";


export const metadata = {
    title: "Sustainable Business Practices: Balancing Profit and Responsibility",
    description:
        "Learn how to integrate sustainable practices into your business strategy, balancing profitability with responsibility.",
    openGraph: {
        title: "Sustainable Business Practices: Balancing Profit and Responsibility",
        description:
            "Learn how to integrate sustainable practices into your business strategy, balancing profitability with responsibility.",
        images: "/images/meta-banner.jpg",
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

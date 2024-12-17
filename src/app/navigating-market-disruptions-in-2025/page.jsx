import ArticleHero from "./_components/ArticleHero";
import ArticleMain from "./_components/ArticleMain";


export const metadata = {
    title: "Navigating Market Disruptions in 2025",
    description:
        "Discover strategies to adapt to market disruptions in 2025 and prepare your business for future challenges.",
    openGraph: {
        title: "Navigating Market Disruptions in 2025",
        description:
            "Discover strategies to adapt to market disruptions in 2025 and prepare your business for future challenges.",
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

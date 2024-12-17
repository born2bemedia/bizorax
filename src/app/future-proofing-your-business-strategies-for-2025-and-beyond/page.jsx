import ArticleHero from "./_components/ArticleHero";
import ArticleMain from "./_components/ArticleMain";


export const metadata = {
    title: "Future-Proofing Your Business: Strategies for 2025 and Beyond",
    description:
        "Explore actionable strategies to prepare your business for emerging trends and challenges in 2025 and beyond.",
    openGraph: {
        title: "Future-Proofing Your Business: Strategies for 2025 and Beyond",
        description:
            "Explore actionable strategies to prepare your business for emerging trends and challenges in 2025 and beyond.",
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

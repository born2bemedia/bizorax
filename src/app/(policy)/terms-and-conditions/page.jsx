import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("terms-and-conditions", locale);

  return {
    title: page.title,
    openGraph: {
      title: page.title,
      images: "",
    },
  };
}

const TermsAndConditions = async () => {
  const page = await getPage("terms-and-conditions");
  return (
    <>
      <section className="policy">
        <div className="policy__body">
          <div className="policy__top">
            <div className="policy__wrapper _container">
              <h1 className="policy__title">{page.title}</h1>
            </div>
          </div>
          <article dangerouslySetInnerHTML={{ __html: page.body }} className="policy__content _container" />
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
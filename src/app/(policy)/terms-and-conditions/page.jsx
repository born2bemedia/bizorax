import { getPage } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";

export async function generateMetadata() {
  const page = await getPage("terms-and-conditions");

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


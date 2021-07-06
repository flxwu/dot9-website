import React from "react";
import Testimonial from "../components/Testimonial";
import { useTranslation } from "react-i18next";

function Testimonials() {

    const { t } = useTranslation();

    const TESTIMONIALS = [
        {
            text: t('jack-moxon-testimonial-text1'),
            textMore: t('jack-moxon-testimonial-text2'),
            authorName: "Jack Moxon",
            authorDescription: t('jack-moxon-testimonial-description'),
            authorImageUrl: require("../images/jack_moxon.jpg").default,
            companyName: "Blue Canvas",
            companyUrl: "https://bluecanvas.io",
        },
        {
            text: t('owen-smith-testimonial-text1'),
            textMore: null,
            authorName: "Owen Smith",
            authorDescription: t('owen-smith-testimonial-description'),
            authorImageUrl: require("../images/owen_smith.jpeg").default,
            companyName: "Ovrnite App ",
            companyUrl: "https://www.ovrnite.app/",
        },
        {
            text: t('alexander-korus-testimonial-text1'),
            textMore: t('alexander-korus-testimonial-text2'),
            authorName: "Alexander Koruš",
            authorDescription: t('alexander-korus-testimonial-description'),
            authorImageUrl: require("../images/alexander_korus.jpeg").default,
            companyName: "visito.me App",
            companyUrl: "https://visito.me/",
        }
    ];

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="h2">
                            {t('testimonials-title')}
                        </h2>
                    </div>

                    {/* Testimonials */}
                    <div
                        className="max-w-3xl mx-auto mt-10"
                        data-aos="zoom-y-out"
                    >
                        {TESTIMONIALS.map((testimonial, index) => {
                            return (
                                <Testimonial
                                    key={index}
                                    text={testimonial.text}
                                    textMore={testimonial.textMore}
                                    authorName={testimonial.authorName}
                                    authorImageUrl={testimonial.authorImageUrl}
                                    authorDescription={
                                        testimonial.authorDescription
                                    }
                                    companyName={testimonial.companyName}
                                    companyUrl={testimonial.companyUrl}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

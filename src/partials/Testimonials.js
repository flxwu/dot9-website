import React from "react";
import Testimonial from "../components/Testimonial";
import { useTranslation } from "react-i18next";

const TESTIMONIALS = [
    {
        text: `Working with dot9 has been great for our business. We have
    been able to land some significant contracts with dot9's help,
    and we’ll definitely expand our cooperation with them. We have
    been really impressed by the quality of services we received. Blue Canvas can definitely
    recommend dot9 to everyone looking for high-quality,
    highly-flexible engineering solutions.`,
        textMore: `They worked on integrating Blue Canvas with
    external services, and what was particularly delightful was
    the quality and independence with which they designed and
    implemented those integrations across dozens of technologies
    (Java, React, Express.js etc...) and hard-to-understand APIs
    (Jira, Azure). They charge reasonable prices, are professional
    and courteous in dealings, and deliver our items, even ones
    outside the original scope.`,
        authorName: "Jack Moxon",
        authorDescription: "CEO and Co-Founder",
        authorImageUrl: require("../images/jack_moxon.jpg").default,
        companyName: "Blue Canvas",
        companyUrl: "https://bluecanvas.io",
    },
    {
        text: `dot9 has been our full product development team from Prototype to MVP to now Release, and working with them has been a great pleasure.
      Their expertise and work quality across Engineering, Product and Design has repeatedly impressed us and we have a great relationship. We'll definitely keep them as our dev team, and can recommend them as a full end-to-end partner for efficiently and thoroughly building your product.`,
        textMore: null,
        authorName: "Owen Smith",
        authorDescription: "CEO and Co-Founder",
        authorImageUrl: require("../images/owen_smith.jpeg").default,
        companyName: "Ovrnite App ",
        companyUrl: "https://www.ovrnite.app/",
    },
    {
        text: `Unsere kürzlich veröffentlichte Visito App kommt bei den Usern richtig gut an. Leider hatten wir erstmal nur Kapazitäten um eine iOS Version der App zu bauen. Natürlich wollten wir auch ASAP den Android Markt bedienen. Hier kam dot9 für uns in Spiel: In Rekordtempo konnte dot9 die iOS App auf Android portieren und hat uns somit einen erfolgreichen Produktlaunch ermöglicht.`,
        textMore: `Die Qualität der gelieferten Software und auch die Beratung war in höchstem Maße zufriedenstellend. Besonders hervorheben möchte ich wie reibunglos die Zusammenarbeit war: Kein Verwaltungsaufwand, extrem hohes Maß an Selbständigkeit, frühes Eskalieren potentieller Probleme. Während des gesamten Projekts konnten wir uns auf unsere eigene Arbeit konzentrieren und dot9 einfach machen lassen. Wie man es sich von einem Technologiepartner wünscht.`,
        authorName: "Alexander Koruš",
        authorDescription: "CEO",
        authorImageUrl: require("../images/alexander_korus.jpeg").default,
        companyName: "visito.me App",
        companyUrl: "https://visito.me/",
    }
];

function Testimonials() {

    const { t } = useTranslation();

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

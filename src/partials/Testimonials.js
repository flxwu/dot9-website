import React, { useEffect, useState } from "react";
import Testimonial from "../components/Testimonial";
import { useTranslation } from "react-i18next";

function Testimonials() {

    const { t } = useTranslation();
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        async function fetchTestimonials() {
            const url = "https://dot9-website-strapi.herokuapp.com/testimonials?_sort=sortPriority:ASC"
            const testimonialsResponse = await fetch(url)
            const data = await testimonialsResponse.json() 
            setTestimonials(data)
        }
        fetchTestimonials()
    }, [])

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
                        {testimonials.map((testimonial, index) => {
                            return (
                                <Testimonial
                                    key={testimonial.id}
                                    text={testimonial.textPreview}
                                    textMore={testimonial.textExtended}
                                    authorName={testimonial.authorName}
                                    authorImageUrl={testimonial.authorImage?.url || ""}
                                    authorDescription={testimonial.authorRole}
                                    companyName={testimonial.authorCompany}
                                    companyUrl={testimonial.authorCompanyUrl}
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

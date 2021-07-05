import ReadMoreQuote from "../partials/ReadMoreQuote";

export default function Testimonial({
    text,
    textMore,
    authorName,
    authorDescription,
    authorImageUrl,
    companyName,
    companyUrl,
}) {
    return (
        <div className="max-w-3xl mx-auto mb-24" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                {/* Testimonial */}
                <div className="text-center px-4 py-8 pt-20">
                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                        <svg
                            className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                            viewBox="0 0 64 64"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                        </svg>
                        <img
                            className="relative rounded-full"
                            src={authorImageUrl}
                            width="96"
                            height="96"
                            alt="Testimonial Jack Moxon"
                        />
                    </div>
                    <ReadMoreQuote
                        text={text}
                        secondaryText={textMore}
                        min={150}
                        ideal={999}
                        max={999}
                        readMoreText={"Read more"}
                    />
                    <cite className="block font-bold text-lg not-italic mb-1">
                        {authorName}
                    </cite>
                    <div className="text-gray-600">
                        <span>{authorDescription}</span>{" "}
                        <a
                            className="text-blue-600 hover:underline"
                            href={companyUrl}
                        >
                            @{companyName}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

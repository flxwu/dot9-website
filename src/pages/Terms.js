import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

function Terms() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}

      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="text-left pb-12 md:pb-16">
                <p className="text-left text-4xl font-extrabold leading-tighter tracking-tighter">Impressum</p>
                <p className="text-2xl mt-4 ">Angaben gem&auml;&szlig; &sect; 5 TMG</p>
                <p>
                  dot9 GmbH
                  <br />
                  In der Gartenstadt 6<br />
                  40470 D&uuml;sseldorf
                </p>

                <p>
                  Handelsregister: HRB 92754
                  <br />
                  Registergericht: Amtsgericht D&uuml;sseldorf
                </p>

                <p className="pt-2">
                  Vertreten durch:
                  <br />
                  Felix Wu
                  <br />
                  Christof Zirkler
                </p>

                <p className="text-2xl mt-8">Kontakt</p>
                <p>
                Telefon: +49 176 43877633
                  <br />
                  E-Mail: contact@dot9.co
                </p>

                <p className="text-2xl mt-8">Umsatzsteuer-ID</p>
                <p>
                  Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27
                  a Umsatzsteuergesetz:
                  <br />
                  DE342177025
                </p>

                <p className="text-2xl mt-8">EU-Streitschlichtung</p>
                <p>
                  Die Europ&auml;ische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p className="text-2xl mt-8">
                  Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <p>
                  Quelle:{" "}
                  <a href="https://www.e-recht24.de">
                    https://www.e-recht24.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Terms;

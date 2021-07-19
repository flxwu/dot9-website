import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo from "./Logo";

function Footer() {

  const { t } = useTranslation();

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="flex md:py-12 border-t border-gray-200 justify-between pt-8 pb-8">
          {/* 1st block */}
          <div className="flex flex-col">
            <div className="mb-2">
              <Logo width="80" height="40" />
            </div>
            <div className="text-sm text-gray-600">
              <Link
                to="/terms"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                {t('footer-imprint-link')}
              </Link>{" "}
              ·{" "}
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                {t('footer-privacy-policy-link')}
              </Link>
            </div>
          </div>

          {/* Schedule Video Call Button */}
          <div className="flex flex-col">
            <a
              className="btn text-white bg-d9Blue-900 hover:bg-d9Blue-800 shadow"
              href="https://dot9.appointlet.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              {t('schedule-video-call-button')}
            </a>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            <p>{t('footer-copyright-notice')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

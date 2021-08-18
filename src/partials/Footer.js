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
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          
          {/* Logo Block */}
          <div className="sm:col-span-12 lg:col-span-3">
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

          {/* Company Block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">{t('footer-company-block-title')}</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">{t('nav-home')}</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">{t('nav-about')}</Link>
              </li>
              <li className="mb-2">
                <Link to="/careers" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">{t('nav-careers')}</Link>
              </li>
            </ul>
          </div>

          {/* Schedule Video Call Button */}
          <div className="sm:col-span-12 md:col-span-12 lg:col-span-7 lg:justify-self-end">
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

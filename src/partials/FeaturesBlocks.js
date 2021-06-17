import React from "react";

function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">How Simple works</h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <div className="mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-2 items-start mb-12">
            {/* 0 - 100 Bulding */}
            <div className="relative flex flex-col items-center p-12 bg-gray-50 rounded border-gray-100 shadow-md mb-8">
              <div className="rounded-full h-14 w-14 flex items-center justify-center bg-blue-500 -mt-1 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    className="stroke-current text-white"
                    d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                0-100% BUILDING
              </h4>
              <p className="text-gray-600 text-center">
                Turn your ideas into high-tech solutions with a user-centered
                approach. We help you plan and define, then build, launch and
                scale your digital product.
              </p>
            </div>

            {/* Web Development */}
            <div className="relative flex flex-col items-center p-12 bg-gray-50 rounded border-gray-100 shadow-md mb-8">
              <div className="rounded-full h-14 w-14 flex items-center justify-center bg-blue-500 -mt-1 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    className="stroke-current text-white"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Web development
              </h4>
              <p className="text-gray-600 text-center">
                Turn your ideas into high-tech solutions with a user-centered
                approach. We help you plan and define, then build, launch and
                scale your digital product.
              </p>
            </div>

            {/* App Development */}
            <div className="relative flex flex-col items-center p-12 bg-gray-50 rounded border-gray-100 shadow-md mb-8">
              <div className="rounded-full h-14 w-14 flex items-center justify-center bg-blue-500 -mt-1 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                    className="stroke-current text-white"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Mobile App Development
              </h4>
              <p className="text-gray-600 text-center">
                Turn your ideas into high-tech solutions with a user-centered
                approach. We help you plan and define, then build, launch and
                scale your digital product.
              </p>
            </div>

            {/* Operations and Monitoring */}
            <div className="relative flex flex-col items-center p-12 bg-gray-50 rounded border-gray-100 shadow-md mb-8">
              <div className="rounded-full h-14 w-14 flex items-center justify-center bg-blue-500 -mt-1 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    className="stroke-current text-white"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Operations and Monitoring
              </h4>
              <p className="text-gray-600 text-center">
                Turn your ideas into high-tech solutions with a user-centered
                approach. We help you plan and define, then build, launch and
                scale your digital product.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div
            className="grid mb-1 m1t-24"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            <div className="flex justify-self-center object-scale-down h-full w-full max-w-2xl">
              <svg
                id="e6d15d18-a685-4480-ac2b-bd578043a679"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1041.32 554.17"
              >
                <title>programmer</title>
                <path
                  d="M1040.82,611.12q-1.74,3.75-3.47,7.4-2.7,5.67-5.33,11.12c-.78,1.61-1.56,3.19-2.32,4.77-8.6,17.57-16.63,33.11-23.45,45.89A73.21,73.21,0,0,1,942.44,719l-151.65,1.65h-1.6l-13,.14-11.12.12-34.1.37-1.38,0-17.36.19h-.53l-107,1.16-95.51,1-11.11.12-69,.75H429l-44.75.48h-.48l-141.5,1.53-42.33.46a88,88,0,0,1-10.79-.54h0c-1.22-.14-2.44-.3-3.65-.49a87.38,87.38,0,0,1-51.29-27.54C116,678.37,102.75,655,93.85,629.64q-1.93-5.49-3.6-11.12C59.44,514.37,97,380,164.6,290.08q4.25-5.64,8.64-11l.07-.08c20.79-25.52,44.1-46.84,68.93-62,44-26.91,92.75-34.49,140.7-11.9,40.57,19.12,78.45,28.11,115.17,30.55,3.71.24,7.42.42,11.11.53,84.23,2.65,163.17-27.7,255.87-47.29,3.69-.78,7.39-1.55,11.12-2.28,66.13-13.16,139.49-20.1,226.73-5.51a189.09,189.09,0,0,1,26.76,6.4q5.77,1.86,11.12,4c41.64,16.94,64.35,48.24,74,87.46q1.37,5.46,2.37,11.11C1134.3,384.41,1084.19,518.23,1040.82,611.12Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#f2f2f2"
                />
                <path
                  d="M576.36,618.52a95.22,95.22,0,0,1-1.87,11.12h93.7V618.52Zm-78.25,62.81,11.11-.09V653.77c-3.81-.17-7.52-.34-11.11-.52ZM265.19,618.52v11.12h198.5V618.52ZM1114.87,279h-74V191.51q-5.35-2.17-11.12-4V279H776.21V186.58c-3.73.73-7.43,1.5-11.12,2.28V279H509.22V236.15c-3.69-.11-7.4-.29-11.11-.53V279H242.24V217c-24.83,15.16-48.14,36.48-68.93,62h-.07v.08q-4.4,5.4-8.64,11h8.64V618.52h-83q1.66,5.63,3.6,11.12h79.39v93.62a87,87,0,0,0,12.2,2.79c1.21.19,2.43.35,3.65.49h0a88,88,0,0,0,10.79.54l42.33-.46v-97H498.11v94.21l11.11-.12V629.64H765.09V721l11.12-.12V629.64H1029.7v4.77c.76-1.58,1.54-3.16,2.32-4.77q2.63-5.45,5.33-11.12,1.73-3.64,3.47-7.4v-321h76.42Q1116.23,284.43,1114.87,279ZM242.24,618.52V290.08H498.11V618.52Zm267,0V290.08H765.09V618.52Zm520.48,0H776.21V290.08H1029.7Z"
                  transform="translate(-79.34 -172.91)"
                  opacity="0.1"
                />
                <polygon
                  points="863.09 533.65 863.09 546.65 711.17 548.05 709.55 548.08 651.81 548.61 650.43 548.63 632.88 548.78 632.36 548.78 525.38 549.77 349.77 551.4 349.62 551.4 304.97 551.82 304.49 551.83 106.09 553.65 106.09 538.65 152.74 510.65 246.34 509.87 248.34 509.86 249 509.85 251 509.82 295.94 509.45 297.95 509.44 298.59 509.43 300.59 509.42 315 509.3 315.38 509.29 350.93 508.99 351.22 508.99 628.62 506.65 635.41 506.6 636.09 506.6 641.27 506.55 678.92 506.24 680.92 506.21 682.77 506.19 683.73 506.19 695.44 506.1 697.76 506.07 700.87 506.05 710.62 505.96 726.09 505.83 728.09 505.81 731.57 505.79 732.22 505.79 806.93 505.15 863.09 533.65"
                  fill="#65617d"
                />
                <polygon
                  points="863.09 533.65 863.09 546.65 711.17 548.05 709.55 548.08 651.81 548.61 650.43 548.63 632.88 548.78 632.36 548.78 525.38 549.77 349.77 551.4 349.62 551.4 304.97 551.82 304.49 551.83 106.09 553.65 106.09 538.65 152.74 510.65 246.34 509.87 248.34 509.86 249 509.85 251 509.82 295.94 509.45 297.95 509.44 298.59 509.43 300.59 509.42 315 509.3 315.38 509.29 350.93 508.99 351.22 508.99 628.62 506.65 635.41 506.6 636.09 506.6 641.27 506.55 678.92 506.24 680.92 506.21 682.77 506.19 683.73 506.19 695.44 506.1 697.76 506.07 700.87 506.05 710.62 505.96 726.09 505.83 728.09 505.81 731.57 505.79 732.22 505.79 806.93 505.15 863.09 533.65"
                  opacity="0.2"
                />
                <path
                  d="M375.44,656.57v24.49a6.13,6.13,0,0,1-3.5,5.54,6,6,0,0,1-2.5.6l-34.9.74a6,6,0,0,1-2.7-.57,6.12,6.12,0,0,1-3.57-5.57V656.57Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#3f3d56"
                />
                <path
                  d="M375.44,656.57v24.49a6.13,6.13,0,0,1-3.5,5.54,6,6,0,0,1-2.5.6l-34.9.74a6,6,0,0,1-2.7-.57,6.12,6.12,0,0,1-3.57-5.57V656.57Z"
                  transform="translate(-79.34 -172.91)"
                  opacity="0.1"
                />
                <path
                  d="M377.44,656.57v24.49a6.13,6.13,0,0,1-3.5,5.54,6,6,0,0,1-2.5.6l-34.9.74a6,6,0,0,1-2.7-.57,6.12,6.12,0,0,1-3.57-5.57V656.57Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#3f3d56"
                />
                <rect
                  x="680.92"
                  y="483.65"
                  width="47.17"
                  height="31.5"
                  fill="#3f3d56"
                />
                <rect
                  x="680.92"
                  y="483.65"
                  width="47.17"
                  height="31.5"
                  opacity="0.1"
                />
                <rect
                  x="678.92"
                  y="483.65"
                  width="47.17"
                  height="31.5"
                  fill="#3f3d56"
                />
                <polygon
                  points="298.09 483.65 298.09 488.62 250.92 489.88 250.92 483.65 298.09 483.65"
                  opacity="0.1"
                />
                <path
                  d="M460.69,485.27v168.2a4,4,0,0,1-3.85,3.95l-191.65,5.1h-.05a4,4,0,0,1-3.95-3.95V485.27a4,4,0,0,1,3.95-3.95h191.6A4,4,0,0,1,460.69,485.27Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#65617d"
                />
                <path
                  d="M265.19,481.32v181.2h-.05a4,4,0,0,1-3.95-3.95V485.27a4,4,0,0,1,3.95-3.95Z"
                  transform="translate(-79.34 -172.91)"
                  opacity="0.1"
                />
                <polygon
                  points="194.59 319.15 372.09 319.15 372.09 467.4 194.59 471.4 194.59 319.15"
                  fill="#66a9f7"
                />
                <polygon
                  points="726.09 483.65 726.09 490.06 678.92 488.8 678.92 483.65 726.09 483.65"
                  opacity="0.1"
                />
                <path
                  d="M867.69,485.27v173.3a4,4,0,0,1-4,3.95h0L672,657.42a4,4,0,0,1-3.85-3.95V485.27a4,4,0,0,1,3.95-3.95h191.6A4,4,0,0,1,867.69,485.27Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#65617d"
                />
                <path
                  d="M867.69,485.27v173.3a4,4,0,0,1-4,3.95h0V481.32h0A4,4,0,0,1,867.69,485.27Z"
                  transform="translate(-79.34 -172.91)"
                  opacity="0.1"
                />
                <polygon
                  points="775.59 319.15 598.09 319.15 598.09 467.4 775.59 471.4 775.59 319.15"
                  fill="#66a9f7"
                />
                <path
                  d="M663.19,485.27v168.2a4,4,0,0,1-3.85,3.95l-191.65,5.1h0a4,4,0,0,1-4-3.95V485.27a4,4,0,0,1,3.95-3.95h191.6A4,4,0,0,1,663.19,485.27Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#65617d"
                />
                <polygon
                  points="397.09 319.15 574.59 319.15 574.59 467.4 397.09 471.4 397.09 319.15"
                  fill="#66a9f7"
                />
                <polygon
                  points="863.09 533.65 863.09 546.65 711.17 548.05 709.55 548.08 651.81 548.61 650.43 548.63 632.88 548.78 632.36 548.78 525.38 549.77 349.77 551.4 349.62 551.4 304.97 551.82 304.49 551.83 106.09 553.65 106.09 538.65 308.6 537.32 309.08 537.32 350.07 537.04 350.26 537.04 633.34 535.17 633.63 535.17 633.8 535.16 634.27 535.16 639.06 535.13 640.52 535.13 715.01 534.63 719.41 534.61 720.39 534.6 863.09 533.65"
                  opacity="0.1"
                />
                <circle cx="487.26" cy="298.15" r="51.33" fill="#fbbebe" />
                <path
                  d="M617.94,550.07s-99.5,12-90,0c3.44-4.34,4.39-17.2,4.2-31.85-.06-4.45-.22-9.06-.45-13.65-1.1-22-3.75-43.5-3.75-43.5s87-41,77-8.5c-4,13.13-2.69,31.57.35,48.88.89,5.05,1.92,10,3,14.7A344.67,344.67,0,0,0,617.94,550.07Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#fbbebe"
                />
                <path
                  d="M585.47,546c11.51-2.13,23.7-6,34.53-1.54,2.85,1.17,5.47,2.88,8.39,3.86s6.12,1.22,9.16,1.91c10.68,2.42,19.34,10.55,24.9,20s8.44,20.14,11.26,30.72l6.9,25.83c6,22.45,12,45.09,13.39,68.3a2437.62,2437.62,0,0,1-250.84,1.43c5.44-10.34,11-21.31,10.54-33s-7.19-23.22-4.76-34.74c1.55-7.34,6.57-13.39,9.64-20.22,8.75-19.52,1.94-45.79,17.32-60.65,6.92-6.68,17-9.21,26.63-8.89,12.28.41,24.85,4.24,37,6.11C555.09,547.48,569.79,548.88,585.47,546Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#ff6584"
                />
                <path
                  d="M716.37,657.17l-.1,1.43v.1l-.17,2.3-1.33,18.51-1.61,22.3-.46,6.28-1,13.44v.17l-107,1L429.11,724.6l0,.84h-.14l0-.84v-.28l.45-14.36.86-28.06.74-23.79.07-2.37a10.53,10.53,0,0,1,11.42-10.17c4.72.4,10.85.89,18.18,1.41l3,.22c42.33,2.94,120.56,6.74,199.5,2,1.66-.09,3.33-.19,5-.31,12.24-.77,24.47-1.76,36.58-3a10.53,10.53,0,0,1,11.6,11.23Z"
                  transform="translate(-79.34 -172.91)"
                  opacity="0.1"
                />
                <path
                  d="M429.08,725.44l0-.84,175.62-1.91,107-1H712v-.17l1-13.44.43-6,1.64-22.61,1.29-17.9,0-.44a10.62,10.62,0,0,0-.11-2.47.3.3,0,0,0,0-.1,10.39,10.39,0,0,0-2-4.64,10.54,10.54,0,0,0-9.42-4c-12.11,1.24-24.34,2.23-36.58,3-1.67.12-3.34.22-5,.31-78.94,4.69-157.17.89-199.5-2l-3-.22c-7.33-.52-13.46-1-18.18-1.41a10.54,10.54,0,0,0-11.24,8.53,11,11,0,0,0-.18,1.64l-.68,22.16L429.54,710l-.44,14.36v.28l0,.84Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#3f3d56"
                />
                <path
                  d="M716.67,664.18l-1.23,15.33-1.83,22.85-.46,5.72-1,12.81-.06.64v.17h0l-.15,1.48.11-1.48h-.29l-107,1L429.11,724.6v-.28l.49-14.36,1-28.06.64-18.65A6.36,6.36,0,0,1,434.3,658a6.25,6.25,0,0,1,3.78-.9c2.1.17,4.68.37,7.69.59,4.89.36,10.92.78,17.94,1.22,13,.82,29.31,1.7,48,2.42,52,2,122.2,2.67,188.88-3.17,3-.26,6.1-.55,9.13-.84a6.26,6.26,0,0,1,3.48.66,5.16,5.16,0,0,1,.86.54,6.14,6.14,0,0,1,2,2.46,3.56,3.56,0,0,1,.25.61A6.28,6.28,0,0,1,716.67,664.18Z"
                  transform="translate(-79.34 -172.91)"
                  opacity="0.1"
                />
                <path
                  d="M377.44,677.87v3.19a6.13,6.13,0,0,1-3.5,5.54l-40.1.77a6.12,6.12,0,0,1-3.57-5.57v-3Z"
                  transform="translate(-79.34 -172.91)"
                  opacity="0.1"
                />
                <polygon
                  points="298.59 515.57 246.34 516.57 246.34 507.9 298.59 506.9 298.59 515.57"
                  fill="#3f3d56"
                />
                <polygon
                  points="298.59 515.57 246.34 516.57 246.34 507.9 298.59 506.9 298.59 515.57"
                  opacity="0.1"
                />
                <polygon
                  points="300.59 515.57 248.34 516.57 248.34 507.9 300.59 506.9 300.59 515.57"
                  fill="#3f3d56"
                />
                <path
                  d="M758.56,679.87v3.19a6.13,6.13,0,0,0,3.5,5.54l40.1.77a6.12,6.12,0,0,0,3.57-5.57v-3Z"
                  transform="translate(-79.34 -172.91)"
                  opacity="0.1"
                />
                <polygon
                  points="678.72 517.57 730.97 518.57 730.97 509.9 678.72 508.9 678.72 517.57"
                  opacity="0.1"
                />
                <polygon
                  points="676.72 517.57 728.97 518.57 728.97 509.9 676.72 508.9 676.72 517.57"
                  fill="#3f3d56"
                />
                <path
                  d="M534.13,486.79c.08,7-3.16,13.6-5.91,20.07a163.49,163.49,0,0,0-12.66,74.71c.73,11,2.58,22,.73,32.9s-8.43,21.77-19,24.9c17.53,10.45,41.26,9.35,57.76-2.66,8.79-6.4,15.34-15.33,21.75-24.11a97.86,97.86,0,0,1-13.31,44.75A103.43,103.43,0,0,0,637,616.53c4.31-5.81,8.06-12.19,9.72-19.23,3.09-13-1.22-26.51-4.51-39.5a266.06,266.06,0,0,1-6.17-33c-.43-3.56-.78-7.22.1-10.7,1-4.07,3.67-7.51,5.64-11.22,5.6-10.54,5.73-23.3,2.86-34.88s-8.49-22.26-14.06-32.81c-4.46-8.46-9.3-17.31-17.46-22.28-5.1-3.1-11-4.39-16.88-5.64l-25.37-5.43c-5.55-1.19-11.26-2.38-16.87-1.51-9.47,1.48-16.14,8.32-22,15.34-4.59,5.46-15.81,15.71-16.6,22.86-.72,6.59,5.1,17.63,6.09,24.58,1.3,9,2.22,6,7.3,11.52C532,478.05,534.07,482,534.13,486.79Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#3f3d56"
                />
                <path
                  d="M379.6,506.5H280a.5.5,0,0,1,0-1h99.6a.5.5,0,0,1,0,1Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#f2f2f2"
                />
                <path
                  d="M379.6,515.5H280a.5.5,0,0,1,0-1h99.6a.5.5,0,0,1,0,1Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#f2f2f2"
                />
                <path
                  d="M379.6,524.5H280a.5.5,0,0,1,0-1h99.6a.5.5,0,0,1,0,1Z"
                  transform="translate(-79.34 -172.91)"
                  fill="#f2f2f2"
                />
              </svg>
            </div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Initial Contact
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Discovery Session
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Contracting
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M12.571 4.571V0H0v25.143h12.571V20.57"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M16 12.571h8"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M19.429 8L24 12.571l-4.571 4.572"
                    />
                    <circle
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Fast Prototyping
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M20.571 20.571h13.714v17.143H20.571z"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Design Phase
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Develop & Launch
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;

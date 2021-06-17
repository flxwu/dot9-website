import {
  FaAndroid,
  FaAngular,
  FaApple,
  FaAws,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { RiFlutterLine } from "react-icons/ri";
import React from "react";

const techlist = [
  [<FaReact />, "React"],
  [<FaApple />, "Native iOS"],
  [<FaAndroid />, "Native Android"],
  [<FaAws />, "Amazon Web Services"],
  [<RiFlutterLine />, "Flutter"],
  [<FaNode />, "Node"],
  [<FaAngular />, "Angular"],
];

export default function Technologies() {
  return (
    <section className="relative">
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">Technologies</h2>
        <p className="text-xl text-gray-600">
          We work with the world's cutting-edge technologies and excel at
          writing and running software on the cloud.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-6 gap-4">
        {techlist.map((t) => (
          <div className="relative flex flex-col items-center p-12 bg-gray-50 rounded border-gray-100 ">
            {React.cloneElement(t[0], { size: 42 })}
            <h4 className="text-xl leading-snug tracking-tight mt-4 text-center">
              {t[1]}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

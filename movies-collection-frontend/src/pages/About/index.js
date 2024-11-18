import React from "react";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import Card1 from "../../component/Card1";

const About = () => {
  const data = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      position: "Founder",
      name: "Adam Cuppy",
      links: [
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      position: "Sr. Designer",
      name: "Charlotte Hale",
      links: [
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      position: "Jr. Designer",
      name: "Silvester Wize",
      links: [
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ];
  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div>
          <h5 className="font-bold text-teal-800 text-center mb-3">
            {"Our Team"}
          </h5>
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center">
            {"Meet the Team Behind the Magic"}
          </h2>
          <p className="`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl mx-auto text-center">
            {
              "Our mission is to create a platform that not only organizes and showcases your movie collection but also enhances the joy of discovering and sharing cinematic gems. From ideation to deployment,every feature is crafted with attention to detail and a commitment to excellence."
            }
          </p>
        </div>
        <div className="flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto">
          {data?.map((item, index) => (
            <Card1 items={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

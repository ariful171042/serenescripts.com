import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const data = [
  {
    id: "1",
    name: "Md Ariful Islam",
    Blog: 500,
    image:
      "https://images.pexels.com/photos/20089404/pexels-photo-20089404/free-photo-of-a-man-is-skateboarding-on-a-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    name: "Md Ariful Islam",
    Blog: 500,
    image:
      "https://images.pexels.com/photos/20089404/pexels-photo-20089404/free-photo-of-a-man-is-skateboarding-on-a-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    name: "Md Ariful Islam",
    Blog: 500,
    image:
      "https://images.pexels.com/photos/20089404/pexels-photo-20089404/free-photo-of-a-man-is-skateboarding-on-a-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const RightSide = () => {
  return (
    <div className="mt-[7rem] h-full pr-10 flex flex-col gap-10">
      <div className="bg-gray-100 rounded-xl">
        <div className="p-5 flex flex-col gap-1.5">
          <h3 className="text-xl font-bold">Recent Post</h3>
          {data?.map((item) => (
            <Link
              href={item.id}
              key={item.id}
              className="border-2 hover:border-gray-500 border-transparent z-10 hover:border-2 p-3 rounded-xl flex gap-2.5 ">
              <div className="w-14 h-14 overflow-hidden rounded-full border-[3px] border-green-600">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  priority
                  className=" object-cover overflow-hidden"
                />
              </div>
              <div className="text-xl">
                <h5>{item.name}</h5>
                <h3>{item.Blog}+</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative rounded-xl h-[80px] w-full border">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] py-5">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
          <h1 className="text-center text-5xl font-bold">50% Off</h1>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl">
        <div className="p-5 flex flex-col gap-3">
          <div className="w-20 h-20">
            <span className="">
              <svg
                fill="#438bea"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#438bea">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path d="M42,57H22A15,15,0,0,1,7,42V22A15,15,0,0,1,22,7H35A15,15,0,0,1,50,22v.5A2.5,2.5,0,0,0,52.5,25,4.5,4.5,0,0,1,57,29.5V42A15,15,0,0,1,42,57ZM22,9A13,13,0,0,0,9,22V42A13,13,0,0,0,22,55H42A13,13,0,0,0,55,42V29.5A2.5,2.5,0,0,0,52.5,27,4.5,4.5,0,0,1,48,22.5V22A13,13,0,0,0,35,9Z"></path>
                  <path d="M35.5,27h-11a4.5,4.5,0,0,1,0-9h11a4.5,4.5,0,0,1,0,9Zm-11-7a2.5,2.5,0,0,0,0,5h11a2.5,2.5,0,0,0,0-5Z"></path>
                  <path d="M41.5,45h-17a4.5,4.5,0,0,1,0-9h17a4.5,4.5,0,0,1,0,9Zm-17-7a2.5,2.5,0,0,0,0,5h17a2.5,2.5,0,0,0,0-5Z"></path>
                </g>
              </svg>
            </span>
          </div>
          <p className="text-xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            fugiat!
          </p>
          <div className="flex text-4xl gap-5">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

import React from "react";
import { BiMessage } from "react-icons/bi";
import { FiCreditCard, FiMail, FiMessageCircle, FiUser, FiUsers } from "react-icons/fi";

const CustomerReview = () => {
  return (
    <div className="min-h-screen flex flex-col gap-7 items-center justify-center pb-12 lg:pb-0">
      <p className="max-w-7xl mx-auto text-4xl font-bold md:text-5xl  ">
        Happy Customers
      </p>
      <p className="-mt-[1rem] mb-[1rem] text-slate-400 px-6 text-center tracking-wide">
        What people say about us. Here are comments from individuals who have
        visited us.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Alicia Sanchez"
          subtitle=" ' My husband and I got some amazing post EBC tattoos here! We spent the whole day with Ajay and his lovely wife and our tattoos came out amazingly. Perfectly unique for each of us and a great souvenir from an amazing artist! ' "
          href="#"
          Icon={FiUser}
          BottomIcon={BiMessage}
        />
        
        <Card
          title="Anna Beckett"
          subtitle="' I came here for my first tattoo and got a great friendly service. Ajay helped design the tattoo, and it came out so well! I definitely recommend Ajay to anyone wanting to get a tattoo in Kathmandu '"
          href="#"
          Icon={FiUser}
          BottomIcon={FiMessageCircle}
        />
        <Card
          title="Liddy Dorian"
          subtitle=" ' Very professional and clean. Great job 🙏🏼
We came to Kathmandu a year ago and my friends got tattooed. It wouldn’t allow me to review twice so here is an edited review with my new tattoo from 2024 '"
          href="#"
          Icon={FiUser}
          BottomIcon={BiMessage}
        />
      </div>
    </div>
  );
};

const Card = ({
  title,
  subtitle,
  Icon,
  BottomIcon,
  href,
}: {
  title: string;
  subtitle: string;
  Icon: any;
  href: any;
  BottomIcon:any
}) => {
  return (
    <div className="h-80 p-4 w-72 rounded border-[1px] border-gray-700 relative overflow-hidden group bg-zinc-900 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <BottomIcon className="absolute z-10 -top-2 -right-4 text-7xl text-gray-700 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
   
      <div className="flex gap-4 items-center ">
        <div>
        <Icon className=" text-3xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
        </div>
        <div className="flex">
        {[1, 2, 3, 4, 5].map((starIndex,i) => (
          <div key={i} className="flex gap-[-1rem]">
            <svg
              key={starIndex}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="yellow"
              className="cursor-pointer"
            >
              <path d="M12 2l2.4 7.2h7.6l-6.4 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6.4-4.8h7.6z" />
            </svg>
          </div>
        ))}
        </div>
        
      </div>

      
      <h3 className="font-medium mt-4 text-xl mb-1 text-gray-200 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default CustomerReview;

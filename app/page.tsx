"use client";
import { H1 } from "@/components/Typography";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollFixed from "@/components/ScrollFixed";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <main>
      <section className=" flex flex-col gap-3 items-center text-center justify-start py-36 h-[200vh]">
        <span className="tracking-tight text-sm font-medium border border-zinc-100 px-2 py-1 rounded-full">
          Join +1000 scaling business
        </span>

        <H1 className="text-5xl font-medium tracking-tight">
          The Smartest Way to Bring Best ROI for Sales
        </H1>
        <p className="text-light tracking-tight text-balance">
          The smarter way to manage sales starts with using tools that
          streamline every step of the process
        </p>
        <button className="bg-black text-white tracking-tight font-medium text-sm py-3 px-4 rounded-full">
          Get 14 Date Free Trial
        </button>
        <p className="text-light text-sm">No Credit Card Required</p>
        <motion.div style={{ scale }} className="py-32 max-w-3xl ">
          <Image
            alt="dashboard-image"
            src={"/dashboard.png"}
            width={700}
            height={700}
          />
        </motion.div>
      </section>
      <section className="w-full">
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="text-center px-4 py-2 rounded-full shadow-2xl border border-zinc-200">
            Power Pack
          </p>
          <H1 className="text-4xl font-medium tracking-tight text-center">
            Why businesses choose Salix
          </H1>
          <p className="font-medium tracking-tight text-light text-center">
            Businesses choose Salix because it simplifies the complexity of
            sales management.
          </p>
        </div>
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-3">
          <ShowcaseCard
            title="Task & Activity Tracking"
            description="Assign tasks, schedule meetings and track team activities"
            imgSrc="/main/image.png"
          />
          <ShowcaseCard
            title="Real-Time Visits"
            description="Generate detailed reports on sales performance, team productivity"
            imgSrc="/main/image1.png"
          />
          <ShowcaseCard
            title="Reporting & Analytics"
            description="Enable seamless communication and file sharing among sales reps"
            imgSrc="/main/image2.png"
          />
        </div>
      </section>
      <section>
        <ScrollFixed />
      </section>
    </main>
  );
}

function ShowcaseCard({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  return (
    <div className="flex flex-col gap-2 py-5">
      <Image
        className="border border-zinc-200 rounded-2xl size-full"
        src={imgSrc}
        width={300}
        height={400}
        alt={title}
      />
      <H1 className="font-medium text-2xl tracking-tight text-left">{title}</H1>
      <p className="tracking-tight text-light text-left">{description}</p>
    </div>
  );
}

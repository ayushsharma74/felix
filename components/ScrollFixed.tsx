import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Tabs = "Sales Automation" | "Deal Tracking" | "CRM Integration";

export default function ScrollFixed() {
  const [Tab, setTab] = useState<Tabs>("Sales Automation");

  const salesRef = useRef(null);
  const dealRef = useRef(null);
  const crmRef = useRef(null);

  const salesInView = useInView(salesRef, { margin: "-50% 0px -50% 0px" });
  const dealInView = useInView(dealRef, { margin: "-50% 0px -50% 0px" });
  const crmInView = useInView(crmRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (salesInView) setTab("Sales Automation");
    else if (dealInView) setTab("Deal Tracking");
    else if (crmInView) setTab("CRM Integration");
  }, [salesInView, crmInView, dealInView]);

  return (
    <div className="flex ">
      <div className="sticky top-32 h-fit">
        {["Sales Automation", "Deal Tracking", "CRM Integration"].map(
          (tab, idx) => (
            <motion.p
              className="text-xl tracking-tight px-2 py-3 "
              key={idx}
              animate={{
                color: Tab === tab ? "#4A6FF3" : "#000000",
                borderLeft: Tab === tab ? "2px solid" : "",
              }}
              onClick={() => {
                document
                  .getElementById(tab.replace(/\s/g, ""))
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {tab}
            </motion.p>
          )
        )}
      </div>
      <div className="flex flex-col gap-48">
        <div ref={salesRef} id="SalesAutomation" className="h-1/2">
          <h2 className="text-3xl font-bold mb-4">Sales Automation</h2>
          <Image
            alt="dashimage"
            src="/scroll/image.png"
            width={400}
            height={400}
            className="size-full"
          />
        </div>

        <div ref={dealRef} id="DealTracking" className="h-1/2">
          <h2 className="text-3xl font-bold mb-4">Deal Tracking</h2>
          <Image
            alt="dashimage"
            src="/scroll/image1.png"
            width={400}
            height={400}
            className="size-full"
          />
        </div>

        <div ref={crmRef} id="CRMIntegration" className="h-1/2">
          <h2 className="text-3xl font-bold mb-4">CRM Integration</h2>
          <Image
            alt="dashimage"
            src="/scroll/image2.png"
            width={400}
            height={400}
            className="size-full"
          />
        </div>
      </div>
    </div>
  );
}

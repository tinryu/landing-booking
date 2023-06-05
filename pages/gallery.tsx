import * as React from "react";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import { TabSelector } from "../components/tabs/tabSelector";
import { TabPanel } from "../components/tabs/tabPanel";
import { useTabs } from "../components/tabs/useTabs";
import Image from "next/image";

export default function Gallery() {
    const [selectedTab, setSelectedTab] = useTabs([
        "food",
        "room",
        "meeting",
        "wedding",
      ]);
  return (
    <>
        <Breadcrumb name="gallery" />
        <div className="services-wrapper">
        <div className="menu-bar">
          <div className="container d-flex justify-content-between">
            <TabSelector
              isActive={selectedTab === "food"}
              onClick={() => setSelectedTab("food")}
              className={"foods"}
            >
              Food & Beverage
            </TabSelector>
            <TabSelector
              isActive={selectedTab === "room"}
              onClick={() => setSelectedTab("room")}
              className={"rooms"}
            >
              Room & Suites
            </TabSelector>
            <TabSelector
              isActive={selectedTab === "meeting"}
              onClick={() => setSelectedTab("meeting")}
              className={"meetings"}
            >
              Meetings
            </TabSelector>
            <TabSelector
              isActive={selectedTab === "wedding"}
              onClick={() => setSelectedTab("wedding")}
              className={"weddings"}
            >
              Weddings
            </TabSelector>
          </div>
        </div>
        <div className="content-bar container">
          <TabPanel hidden={selectedTab !== "food"}><ViewFood/></TabPanel>
          <TabPanel hidden={selectedTab !== "room"}>room</TabPanel>
          <TabPanel hidden={selectedTab !== "meeting"}>Meetings</TabPanel>
          <TabPanel hidden={selectedTab !== "wedding"}>Weddings</TabPanel>
        </div>
      </div>
    </>
  )
}

function ViewFood() {
    return (
        <div className="gallery-food">
            <div className="pic pic-1"><Image src={'/assets/images/1.png'} priority={true} width={312} height={270} alt="picture" /></div>
            <div className="pic pic-2"><Image src={'/assets/images/2.png'} priority={true} width={312} height={270} alt="picture" /></div>
            <div className="pic pic-3"><Image src={'/assets/images/3.png'} priority={true} width={648} height={270} alt="picture" /></div>
            <div className="pic pic-4"><Image src={'/assets/images/4.png'} priority={true} width={648} height={564} alt="picture" /></div>
            <div className="pic pic-5"><Image src={'/assets/images/5.png'} priority={true} width={648} height={270} alt="picture" /></div>
            <div className="pic pic-6"><Image src={'/assets/images/6.png'} priority={true} width={312} height={270} alt="picture" /></div>
            <div className="pic pic-7"><Image src={'/assets/images/7.png'} priority={true} width={312} height={270} alt="picture" /></div>
        </div>
    )
}
Gallery.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
  };
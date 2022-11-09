import type { ReactElement } from "react";
import React, { useState } from "react";
import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import { TabSelector } from "../components/tabs/tabSelector";
import { TabPanel } from "../components/tabs/tabPanel";
import { useTabs } from "../components/tabs/useTabs";
import Foods from "../components/service/foods";
import Rooms from "../components/service/rooms";

export default function Services() {
  const [selectedTab, setSelectedTab] = useTabs([
    "food",
    "room",
    "meeting",
    "wedding",
  ]);
  return (
    <>
      <Breadcrumb name="services" />
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
          <TabPanel hidden={selectedTab !== "food"}><Foods/></TabPanel>
          <TabPanel hidden={selectedTab !== "room"}><Rooms/></TabPanel>
          <TabPanel hidden={selectedTab !== "meeting"}>Meetings</TabPanel>
          <TabPanel hidden={selectedTab !== "wedding"}>Weddings</TabPanel>
        </div>
      </div>
    </>
  );
}
Services.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

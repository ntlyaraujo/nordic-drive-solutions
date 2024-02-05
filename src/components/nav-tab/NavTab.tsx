import React from "react";
import { NavTabItem } from "./NavTabItem";

type TabLabel = {
  label: string;
  load: number;
};

type NavTabModelsProps = {
  tabLabels: TabLabel[] | [];
  activeTabId: string;
  allItems: number;
  onClick: (model: string, tabId: string) => void;
};

const NavTab: React.FC<NavTabModelsProps> = ({
  tabLabels,
  activeTabId,
  allItems,
  onClick,
}) => {
  return (
    <div
      role="tablist"
      aria-labelledby="tablist-body-type"
      aria-label="Page navigation"
      className="flex flex-row p-6 gap-8 flex-wrap justify-center transition-colors transition-transform"
      id=":r0:"
      onClick={function noRefCheck() {}}
      onKeyDown={function noRefCheck() {}}
    >
      <NavTabItem
        key={0}
        index={0}
        label="All"
        load={allItems}
        activeTab={activeTabId}
        onClick={() => onClick("all", `tab-0`)}
      />
      {tabLabels.map((tab, index) => (
        <NavTabItem
          key={index + 1}
          index={index + 1}
          label={tab.label}
          load={tab.load}
          activeTab={activeTabId}
          onClick={() => onClick(tab.label, `tab-${index + 1}`)}
        />
      ))}
    </div>
  );
};
export default NavTab;

import React, { useEffect, useState } from "react";
import { NavTab } from "../../components";

import { Item } from "../../models";
import { ItemsReel } from "../../containers";

type HomepageProps = {
  data: Item[] | [];
};

const HomePage: React.FC<HomepageProps> = ({ data }) => {
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [activeTabId, setActiveTabId] = useState<string>("tab-0");

  useEffect(() => {
    setFilteredItems(data);
  }, [data]);

  const handleFilter = (bodyType: string, tabId: string) => {
    if (!data) return;
    setActiveTabId(tabId);

    const filtered = data.filter((item) => item.bodyType === bodyType);

    if (bodyType === "all") {
      setFilteredItems(data);
      return;
    }
    setFilteredItems(filtered);
  };

  const getModels = () => {
    if (!data) return;
    return data.map((item) => item.bodyType);
  };

  const createNavTabsFilter = () => {
    const uniqueValues = [...new Set(getModels())];
    const tabs = uniqueValues.map((bodyType: string) => {
      return {
        label: bodyType,
        load: data.filter((item) => item.bodyType === bodyType).length,
      };
    });
    return tabs;
  };

  return (
    <>
      <h1 className="font-medium heading-1">Our Models</h1>
      <NavTab
        tabLabels={createNavTabsFilter()}
        onClick={handleFilter}
        activeTabId={activeTabId}
        allItems={data.length}
      />
      <ItemsReel items={filteredItems} />
    </>
  );
};

export default HomePage;

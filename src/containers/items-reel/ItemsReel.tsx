"use client";

import React, { useState, useRef } from "react";
import { IconButton } from "@volvo-cars/react-icons";
import { ItemCard } from "../../components";
import { Item } from "../../models";

type ItemsReelProps = {
  items: Item[] | [];
};
const ItemsReel: React.FC<ItemsReelProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reelRef = useRef<HTMLDivElement>(null);

  const isEmpty = items.length === 0;

  const scrollToItem = (index: number) => {
    const reelElement = reelRef.current;
    if (reelElement) {
      const child = reelElement.children[index] as HTMLElement;
      reelElement.scrollLeft = child.offsetLeft - reelElement.offsetLeft;
    }
  };

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollToItem(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(items.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollToItem(newIndex);
  };

  return (
    <>
      <div
        ref={reelRef}
        className="reel gap-x-16 overflow-x-auto w-full scrollbar-none"
        style={{ scrollBehavior: "smooth" }}
        tabIndex={0}
      >
        {!isEmpty ? (
          items.map((item) => <ItemCard item={item} key={item.id} />)
        ) : (
          <p className="body-16">No Data</p>
        )}
      </div>
      {/* Hidden on mobile, visible on desktop */}
      {!isEmpty && (
        <div
          className="flex flex-row justify-start w-full gap-16 p-16 until-md:hidden"
          aria-hidden
        >
          <IconButton
            aria-hidden
            aria-label=""
            disabled={currentIndex === 0}
            iconName="navigation-chevronback"
            onClick={handlePrevious}
            tabIndex={-1}
          />
          <IconButton
            aria-hidden
            aria-label=""
            disabled={currentIndex === items.length - 1}
            iconName="navigation-chevronforward"
            onClick={handleNext}
            tabIndex={-1}
          />
        </div>
      )}
    </>
  );
};
export default ItemsReel;

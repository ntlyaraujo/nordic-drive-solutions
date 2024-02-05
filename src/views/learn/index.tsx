import React from "react";
import { ItemDetails, ItemNotFound } from "../../components";
import { Item } from "../../models";
import Link from "next/link";

type LearnPageProps = {
  item: Item;
};

const LearnPage: React.FC<LearnPageProps> = ({ item }) => {
  if (!item) {
    return <ItemNotFound />;
  }
  return (
    <div className="flex flex-col items-center gap-y-64 w-full">
      <div className="flex justify-start w-full justify-start">
        <button className="button-text" data-color="accent" data-arrow="back">
          <Link
            id="card-action-home"
            aria-labelledby="card-action-home"
            className="uppercase font-medium  link-plain flex items-center gap-8"
            href="/"
          >
            Back
          </Link>
        </button>
      </div>
      <div>
        <ItemDetails item={item} showBuyButton />
      </div>
    </div>
  );
};
export default LearnPage;

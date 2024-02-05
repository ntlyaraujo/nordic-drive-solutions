import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@volvo-cars/react-icons";
import { Item } from "../../models";

type ItemCardProps = {
  item: Item;
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { id, modelName, bodyType, modelType, imageUrl } = item;
  return (
    <div className="stack-8 ">
      <button
        type="button"
        aria-labelledby={`card-heading-${id}`}
        className="block px-16 pt-16 stack-24 "
        style={{
          width: "18rem",
        }}
      >
        <div className="stack ">
          <p className="font-medium text-secondary uppercase">{bodyType}</p>
          <h3 className="font-medium" id={`card-heading-${id}`}>
            {modelName}
            <span className="text-14 text-secondary"> {modelType}</span>
          </h3>
        </div>
        <div
          style={{
            aspectRatio: "4/3",
            overflow: "hidden",
          }}
        >
          <Image
            src={imageUrl}
            alt={`${modelName}-picture`}
            width={400}
            height={300}
            className="hover:scale-zoomed h-full transition-transform"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </button>

      <div className="flex flex-row justify-center gap-16">
        <Link
          id={`card-action-${id}-learn`}
          aria-labelledby={`card-heading-${id} card-action-${id}-learn`}
          className="uppercase font-medium text-accent-blue link-plain flex items-center gap-8"
          href={`/learn/${id}`}
        >
          Learn <Icon type="navigation-chevronforward-12" color="accent-blue" />
        </Link>

        <Link
          id={`card-action-${id}-shop`}
          aria-labelledby={`card-heading-${id} card-action-${id}-shop`}
          className="uppercase font-medium text-accent-blue link-plain flex items-center gap-8"
          href={`/shop/${id}`}
        >
          Shop <Icon type="navigation-chevronforward-12" color="accent-blue" />
        </Link>
      </div>
    </div>
  );
};
export default ItemCard;

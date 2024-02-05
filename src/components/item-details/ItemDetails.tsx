import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Item } from "../../models";

type ItemDetailsProps = {
  item: Item;
  showBuyButton?: boolean;
};

const ItemDetails: React.FC<ItemDetailsProps> = ({ item, showBuyButton }) => {
  return (
    <div className="flex-col lg:flex-row gap-64 items-center bg-secondary p-16">
      <div className="w-full">
        <Image
          alt={`${item.modelName}-picture`}
          src={item.imageUrl}
          className="img aspect-16/9 object-cover w-full h-full lg:aspect-4/3"
          height="690"
          loading="eager"
          width="920"
        />
      </div>
      <div className="w-full stack-text">
        <h2>{item.modelName}</h2>
        <p className="font-medium">
          {"Type: "}
          <span className="font-light text-secondary">{item.modelType}</span>
        </p>
        <p className="font-medium">
          {"Body type: "}
          <span className="font-light uppercase text-secondary">
            {item.bodyType}
          </span>
        </p>
        {showBuyButton && (
          <button className="button-outlined" data-color="accent">
            <Link
              id="card-action-home"
              aria-labelledby="card-action-home"
              className="font-medium  link-plain flex items-center gap-8"
              href={`/shop/${item.id}`}
            >
              {`Buy ${item.modelName}`}
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};
export default ItemDetails;

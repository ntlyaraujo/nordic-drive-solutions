import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ItemDetails, ItemNotFound } from "../../components";
import { Item } from "../../models";
import Link from "next/link";

type ShopPageProps = {
  item: Item;
};

const ShopPage: React.FC<ShopPageProps> = ({ item }) => {
  const [shopStatus, setShopSatus] = useState<boolean>(false);

  if (!item) {
    return <ItemNotFound />;
  }
  const handleBuy = () => {
    setShopSatus(true);
    confetti();
  };
  return (
    <div className="flex flex-col items-center gap-y-64 w-full">
      <div className="flex justify-start items-start flex-col md:flex-row w-full justify-between">
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
        <div className="flex flex-row gap-x-16 items-center ">
          <div className="flex flex-col stack-8 md:items-end justify-end ">
            <h6 className="font-medium">429 000 kr</h6>
            <small className="micro ">
              0 g/km • Beräknad leveranstid: 4-5 månader
            </small>
          </div>
          <button
            className="button-filled"
            data-color="accent"
            onClick={handleBuy}
          >
            Buy
          </button>
        </div>
      </div>
      <div>
        {shopStatus && (
          <div className="px-24 py-16 flex-row flex-wrap gap-8 border-l-2 border-feedback-green bg-feedback-green text-feedback-green">
            <h3 className="font-medium">Congratulations!!</h3>
            <p>
              {`You have just bought a ${item.modelName} You will be contacted by our
            customer service soon. Thank you for choosing Volvo.`}
            </p>
          </div>
        )}

        <ItemDetails item={item} />
      </div>
    </div>
  );
};
export default ShopPage;

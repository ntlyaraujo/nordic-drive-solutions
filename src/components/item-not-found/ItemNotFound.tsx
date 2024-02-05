import Link from "next/link";

const ItemNotFound = () => {
  return (
    <div className="px-24 py-16 flex-col flex-wrap gap-8 border-l-2 border-secondary bg-secondary w-full">
      <h3 className="font-medium">Item Not Found</h3>
      <p>
        Sorry, we couldn't find the item you were looking for. Please try again
        or go back to the home page.
      </p>
      <Link href="/" className="link-plain">
        Home page
      </Link>
    </div>
  );
};
export default ItemNotFound;

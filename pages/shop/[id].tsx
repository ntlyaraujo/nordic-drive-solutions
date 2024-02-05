import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getItemById } from "../../src/services";
import ShopPage from "../../src/views/shop";
import RootLayout from "../layout";
import { Item } from "../../src/models";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const item = await getItemById(context?.params?.id);
  return { props: { item } };
};

export default function App({
  item,
  notFound,
}: {
  item: Item;
  notFound: boolean;
}) {
  return (
    <RootLayout>
      <ShopPage item={item} />
    </RootLayout>
  );
}

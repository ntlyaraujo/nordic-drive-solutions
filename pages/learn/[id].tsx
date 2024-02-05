import LearnPage from "../../src/views/learn";
import RootLayout from "../layout";
import { getItemById } from "../../src/services";
import { Item } from "../../src/models";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const item = await getItemById(context?.params?.id);
  return { props: { item } };
};

export default function App({ item }: { item: Item; notFound: boolean }) {
  return (
    <RootLayout>
      <LearnPage item={item} />
    </RootLayout>
  );
}

import React from "react";
import { GetStaticProps } from "next";
import HomePage from "../src/views/homepage";
import RootLayout from "./layout";
import { getAllItems } from "../src/services";
import { Item } from "../src/models";

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllItems();
  return {
    props: {
      data: data ?? [],
    },
  };
};
export default function App({ data }: { data: Item[] }) {
  return (
    <RootLayout>
      <HomePage data={data} />
    </RootLayout>
  );
}

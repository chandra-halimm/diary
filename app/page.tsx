import Wrapper from "@/components/global/Wrapper";
import React from "react";
import CardDiaries from "../components/global/(diary)/CardDiaries";

export const revalidate = 0;

export default function Home(): React.ReactElement {
  return (
    <Wrapper title="Home">
      <CardDiaries />
    </Wrapper>
  );
}

import { Footer, FooterTab } from "native-base";
import React from "react";
import RefreshButtonContainer from "../container/RefreshButtonContainer";

export const RefreshFooter: React.SFC = () => {
  return (
    <Footer>
      <FooterTab>
        <RefreshButtonContainer />
      </FooterTab>
    </Footer>
  );
};

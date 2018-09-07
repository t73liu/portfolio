import { AdMobRewarded } from "expo";
import { ActionSheet, Button, Icon } from "native-base";
import React, { SFC } from "react";
import { openUrl } from "../../util/ajax";

export const InfoButton: SFC = () => {
  const handlePress = async () => {
    ActionSheet.show({
        options: ["Support Us With Ads", "Source Code"]
      },
      async (index: number) => {
        switch (index) {
          case 0:
            await AdMobRewarded.requestAdAsync();
            await AdMobRewarded.showAdAsync();
            break;
          case 1:
            openUrl("https://github.com/t73liu/portfolio");
            break;
        }
      });
  };

  return (
    <Button transparent={true} onPress={handlePress}>
      <Icon name="md-information-circle"/>
    </Button>
  );
};

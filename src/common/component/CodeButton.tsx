import { Button, Icon } from "native-base";
import React, { SFC } from "react";
import { openUrl } from "../../util/ajax";

export const CodeButton: SFC = () => {
  const handlePress = () => {
    openUrl("https://github.com/t73liu/portfolio");
  };

  return (
    <Button transparent={true} onPress={handlePress}>
      <Icon name="logo-github" />
    </Button>
  );
};

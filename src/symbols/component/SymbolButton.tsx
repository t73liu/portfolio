import { Button, Icon } from "native-base";
import React, { SFC } from "react";

interface ISymbolButtonProps {
  nestedIcon: string;
  isActive: boolean;
  handlePress: () => any;
}

export const SymbolButton: SFC<ISymbolButtonProps> = props => {
  if (props.isActive) {
    return (
      <Button info={true} transparent={true} onPress={props.handlePress}>
        <Icon name={props.nestedIcon} />
      </Button>
    );
  }
  return (
    <Button dark={true} transparent={true} onPress={props.handlePress}>
      <Icon name={props.nestedIcon} />
    </Button>
  );
};

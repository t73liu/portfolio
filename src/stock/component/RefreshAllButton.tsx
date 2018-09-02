import React, { SFC } from "react";
import DownloadButton from "../../common/component/DownloadButton";

export interface IRefreshAllButtonStateProps {
  isLoading: boolean;
  errorMsg: string | null;
}

export interface IRefreshAllButtonDispatchProps {
  handleRefresh: () => void;
  dismissError: () => void;
}

type IRefreshAllButtonProps = IRefreshAllButtonStateProps &
  IRefreshAllButtonDispatchProps;

export const RefreshAllButton: SFC<IRefreshAllButtonProps> = props => {
  return (
    <DownloadButton
      iconType={"refresh"}
      isLoading={props.isLoading}
      errorMsg={props.errorMsg}
      handlePress={props.handleRefresh}
      handleToast={props.dismissError}
      explanation={"Downloads all watchlist and portfolio ticker info"}
    />
  );
};

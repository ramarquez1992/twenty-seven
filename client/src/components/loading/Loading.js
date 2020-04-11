import React from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoading} from "./loadingSlice";
import Loader from "semantic-ui-react/dist/commonjs/elements/Loader";

export function Loading() {
  const isLoading = useSelector(selectIsLoading);

  return (
      <Loader active={isLoading} inline/>
  );
}

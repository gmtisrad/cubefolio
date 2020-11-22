import React from 'react';
import { ColumnHandler } from './ColumnHandler';

interface props {
  columns: Array<JSX.Element>;
};

export const GridSystem = (props: props) => {
  const {
    columns
  } = props;

  return (
    <>
      <ColumnHandler slides={columns} />
    </>
  )
}

export default GridSystem;
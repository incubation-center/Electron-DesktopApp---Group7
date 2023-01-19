import React, { HTMLAttributes, TdHTMLAttributes } from "react";
import { DefaultRecordType } from "rc-table/lib/interface";
import Table from "rc-table";
import "../Components/tablestyle.css"

import {
  ColumnsType,
  ColumnGroupType,
  ColumnType,
} from "rc-table/lib/interface";
const bgRowColor = (record: any, index: number, indent: number): string => {
  if (index % 2 === 0) {
    return "bg-gray-100";
  }
  return "bg-gray-0"
};

const onHeaderRow = (record: any, index: number | undefined) => {
  const props: HTMLAttributes<any> | TdHTMLAttributes<any> = {
    // className: "bg-sky-300",
    className: "bg-blue-300"
  };
  return props;
};


const TableCustom = ({
  data,
  columns,
}: {
  data: readonly DefaultRecordType[] | undefined;
  columns: ColumnsType<ColumnGroupType<any> | ColumnType<any>> | undefined;
  
}) => {
  return (
    <Table
      onHeaderRow={onHeaderRow}
      columns={columns}
      data={data}
      rowKey=""
      rowClassName={bgRowColor}
    />
  );
};

export default TableCustom;

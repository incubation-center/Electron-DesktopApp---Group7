import React, { HTMLAttributes, TdHTMLAttributes } from "react";
import Table from "rc-table";
import {
  ColumnsType,
  ColumnGroupType,
  ColumnType,
} from "rc-table/lib/interface";
const bgRowColor = (record: any, index: number, indent: number): string => {
  if (index % 2 === 0) {
    return "bg-gray-500";
  }
  return "bg-gray-400";
};

const onHeaderRow = (record: any, index: number | undefined) => {
  const props: HTMLAttributes<any> | TdHTMLAttributes<any> = {
    className: "bg-sky-500",
  };
  return props;
};

const TableCustom = ({
  data,
  columns,
}: {
  data: ColumnsType<any> | undefined;
  columns: ColumnsType<ColumnGroupType<any> | ColumnType<any>> | undefined;
}) => {
  return (
    <Table
      onHeaderRow={onHeaderRow}
      className=""
      columns={columns}
      data={data}
      rowClassName={bgRowColor}
    />
  );
};

export default TableCustom;
// files types

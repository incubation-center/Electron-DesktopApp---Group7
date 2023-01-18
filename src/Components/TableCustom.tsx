import React, { HTMLAttributes, TdHTMLAttributes } from "react";
import { DefaultRecordType, GetRowKey } from "rc-table/lib/interface";
import Table from "rc-table";
import {
  ColumnsType,
  ColumnGroupType,
  ColumnType,
} from "rc-table/lib/interface";
const bgRowColor = (record: any, index: number, indent: number): string => {
  if (index % 2 === 0) {
    return "bg-gray-200";
  }
  return "bg-gray-100";
};

const onHeaderRow = (record: any, index: number | undefined) => {
  const props: HTMLAttributes<any> | TdHTMLAttributes<any> = {
    className: "bg-sky-300",
  };
  return props;
};

const TableCustom = ({
  data,
  columns,
  rowKey,
}: {
  data: readonly DefaultRecordType[] | undefined;
  columns: ColumnsType<ColumnGroupType<any> | ColumnType<any>> | undefined;
  rowKey?: string | GetRowKey<DefaultRecordType> | undefined;
}) => {
  return (
    <Table
      rowKey={rowKey}
      onHeaderRow={onHeaderRow}
      columns={columns}
      data={data}
      rowClassName={bgRowColor}
    />
  );
};

export default TableCustom;

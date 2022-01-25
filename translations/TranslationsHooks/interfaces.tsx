import React from "react";
import { FormatDateOptions, FormatNumberOptions } from "react-intl";

type MessageFormatPrimitiveValue = string | number | boolean | null | undefined;

type MessageFormatValues = Record<
  string,
  MessageFormatPrimitiveValue | React.ReactElement
>;

type DateFormatPrimitiveValue = string | number | Date | undefined;
type TimeFormatPrimitiveValue = string | number | Date | undefined;

export interface formatDateProps {
  value: DateFormatPrimitiveValue;
  options?: FormatDateOptions;
}

export interface formatTimeProps {
  value: TimeFormatPrimitiveValue;
  options?: FormatDateOptions;
}

export interface formatNumberProps {
  value: number | bigint;
  options?: FormatNumberOptions;
}

export interface formatMessageProps {
  id?: string;
  description?: string;
  defaultMessage?: string;
  values?: MessageFormatValues;
}

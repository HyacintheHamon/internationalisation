import { useIntl, FormatNumberOptions } from "react-intl";

import {
  formatNumberProps,
  formatDateProps,
  formatMessageProps,
  formatTimeProps,
} from "./interfaces";

export const useTranslation = () => {
  const intl = useIntl();

  const formatMessage = ({
    id,
    description = "",
    defaultMessage = "...",
    values,
  }: formatMessageProps): string => {
    let translatedMessage =
      intl
        .formatMessage({ id, description, defaultMessage }, values)
        ?.toString() || defaultMessage;
    return translatedMessage;
  };

  const formatNumber = ({ value, options }: formatNumberProps) => {
    return intl.formatNumber(value, options);
  };

  const formatCurrencyNumber = ({ value, options }: formatNumberProps) => {
    let currencyOptions: FormatNumberOptions = {
      maximumFractionDigits: 2,
      style: "currency",
      currency: "EUR",
      ...options,
    };
    return intl.formatNumber(value, currencyOptions);
  };

  const formatPercentNumber = ({ value, options = {} }: formatNumberProps) => {
    let percentageOptions: FormatNumberOptions = {
      maximumFractionDigits: 2,
      style: "percent",
      ...options,
    };
    return intl.formatNumber(value, percentageOptions);
  };

  const formatDate = ({ value, options }: formatDateProps) => {
    return intl.formatDate(value, options);
  };

  const formatTime = ({ value, options }: formatTimeProps) => {
    return intl.formatTime(value, options);
  };

  return {
    formatMessage,
    formatNumber,
    formatPercentNumber,
    formatCurrencyNumber,
    formatDate,
    formatTime,
  };
};

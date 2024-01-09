import moment from 'moment';
import { useEffect, useRef } from 'react';

export { useBroadcast } from './hooks/useBroadcast';

export const isEmpty = (obj) => {
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export const unsecuredCopyToClipboard = (text) => {
  const textArea = document.createElement('textarea');

  textArea.value = text;
  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  document.execCommand('copy');
  document.body.removeChild(textArea);
};

export const copyToClipboard = (content) => {
  if (window.isSecureContext && navigator.clipboard) {
    navigator.clipboard.writeText(content);
  } else {
    unsecuredCopyToClipboard(content);
  }
};

export const useDebouncedEffect = (effect, deps, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ...(deps || []), delay ]);
};

export const capitalizeFirstLowercaseRest = (str) => str.trim().charAt(0).toUpperCase() + str.trim().slice(1).toLowerCase();

export const formatDate = (date) => moment(date).format('LL');

export const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};

export const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // We can set non-numbers to 0 here
  const isTooHigh = percentage > 100;

  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

export const colorPercentage = (percentage) => {
  const pct = cleanPercentage(percentage);

  if (pct > 66) {
    return 'green';
  }
  if (pct > 33) {
    return 'orange';
  }

  return 'red';
};

export const renderTime = (time) => {
  if (time < 60) {
    // Add leading zero
    if (time < 10) {
      return `00:0${time}`;
    }

    return `00:${time}`;
  } else {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    // Add leading zero
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }
};

import { usePage } from '@inertiajs/react';

export const trans = function (key, replace = {}) {
  const keys = key.split('.');

  let translation: any = usePage().props.language;

  keys.forEach(function (keyTmp) {
    translation = translation[keyTmp] ? translation[keyTmp] : keyTmp;
  });

  Object.keys(replace).forEach(function (key) {
    translation = translation.replace(':' + key, replace[key]);
  });

  return translation;
};

export const trans_n = function (key, number, replace = {}) {
  const options = key.split('|');

  key = options[0];

  if (number > 1) {
    key = options[1];
  }

  return trans(key, replace);
};

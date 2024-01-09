interface AbreviateNumberProps {
  value: number | undefined;
}

export const AbreviateNumber = (props: AbreviateNumberProps) => {
  const { value } = props;

  const digits = 2;
  let result = 0;
  let symbol = '';

  if (value && value > 0) {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'B' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return value >= item.value;
      });

    // @ts-ignore
    result = (value / item.value).toFixed(digits).replace(rx, '$1');
    // @ts-ignore
    symbol = item.symbol;
  }

  return (
    <>
      {result}
      {symbol ?? ''}
    </>
  );
};

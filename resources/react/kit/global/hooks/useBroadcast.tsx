import { useEffect } from 'react';

export const useBroadcast = (channel: string, event: string, callback: (response) => void, deps: any[] = []) => {
  useEffect(() => {
    /* @ts-ignore */
    Echo.private(channel)
      .listen(event, (response) => {
        callback(response);
      });

    return () => {
      /* @ts-ignore */
      Echo.leave(channel);
    };
  }, [ deps ]);
};

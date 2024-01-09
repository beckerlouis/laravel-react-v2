import { useEffect } from 'react';

export const useBroadcast = (channel: string, event: string, callback: (response) => void, deps: any[] = []) => {
  useEffect(() => {
    Echo.private(channel)
      .listen(event, (response) => {
        callback(response);
      });

    return () => {
      Echo.leave(channel);
    };
  }, [ deps ]);
};

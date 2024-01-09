import { Meta } from '@kit/global';
import { AppStateProvider } from '@kit/global/contexts';
import { CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import { PropsWithChildren } from 'react';

const customTheme: CustomFlowbiteTheme = {};

export const Web = ({ children }: PropsWithChildren) => (
  <Flowbite theme={{ theme: customTheme }}>
    <Meta />
    <AppStateProvider>
      <header>
      </header>
      <main>{children}</main>
    </AppStateProvider>
  </Flowbite>
);

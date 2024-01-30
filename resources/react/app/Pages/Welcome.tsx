import { App } from '@app/Layouts/App';
import { ReactNode } from 'react';

export const Welcome = () => (
  <div>
    <div>App: Welcome</div>
  </div>
);

Welcome.layout = (page: ReactNode) => <App>{page}</App>;

export default Welcome;

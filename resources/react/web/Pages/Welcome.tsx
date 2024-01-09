import { Web } from '@web/Layouts/Web';
import { ReactNode } from 'react';

export const Welcome = () => (
  <div>
    <div>Welcome</div>
  </div>
);

Welcome.layout = (page: ReactNode) => <Web>{page}</Web>;

export default Welcome;

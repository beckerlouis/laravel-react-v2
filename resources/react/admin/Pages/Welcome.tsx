import { Admin } from '@admin/Layouts/Admin';
import { ReactNode } from 'react';

export const Welcome = () => (
  <div>
    <div>Admin: Welcome</div>
  </div>
);

Welcome.layout = (page: ReactNode) => <Admin>{page}</Admin>;

export default Welcome;

import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import route from '@vendor/tightenco/ziggy/dist/index.m';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { RouteName } from 'ziggy-js';

createServer((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  title: (title) => `${title} - ${import.meta.env.VITE_APP_NAME || 'Laravel'}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup: ({ App, props }) => {
            // @ts-ignore
            global.route<RouteName> = (name, params, absolute) => route(name, params, absolute, {
              // @ts-expect-error
              ...page.props.ziggy,
              // @ts-expect-error
              location: new URL(page.props.ziggy.location),
            });

            return <App {...props} />;
  },
}));

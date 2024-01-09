import { createInertiaApp } from '@inertiajs/react';
import ReactDOMServer from 'react-dom/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import createServer from '@inertiajs/react/server';
import { RouteName } from 'ziggy-js';
import route from '../../../vendor/tightenco/ziggy/dist/index.m';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${import.meta.env.VITE_APP_NAME || 'Laravel'}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
        setup: ({ App, props }) => {
            global.route<RouteName> = (name, params, absolute) =>
                route(name, params, absolute, {
                    // @ts-expect-error
                    ...page.props.ziggy,
                    // @ts-expect-error
                    location: new URL(page.props.ziggy.location),
                });

            return <App {...props} />;
        },
    })
);

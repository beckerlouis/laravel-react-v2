import { UserData } from './generated';
import { Config } from 'ziggy-js';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: UserData;
    };
    ziggy: Config & { location: string };
};

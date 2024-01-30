import { AppData } from '@gen/models';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & AppData;

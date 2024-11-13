declare global {
    namespace NodeJS {
        interface ProcessEnv {
            AWS_ACCESS_KEY: string;
            AWS_SECRET_KEY: string;
            AWS_REGION: string;
            NEXT_PUBLIC_MAPBOX_KEY: string;
        }
    }
}

export {};

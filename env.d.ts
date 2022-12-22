export {};

declare global {
    interface Datas {
        fields: {
            [key: string]: any
        }
    }
    interface ProcessEnv {
        readonly AIRTABLE_API_KEY? : string;
        readonly AIRTABLE_BASE_ID? : string;
        readonly REACT_APP_AIRTABLE_API_KEY? : string;
        readonly REACT_APP_AIRTABLE_BASE_ID? : string;
    }
    interface ImportMetaEnv {
        readonly VITE_AIRTABLE_API_KEY? : string;
        readonly VITE_AIRTABLE_BASE_ID? : string;
    }
    interface ImportMeta {
        readonly env : ImportMetaEnv;
    }
}
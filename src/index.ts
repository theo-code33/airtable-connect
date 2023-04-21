import { AirtableConnect } from './airtable/airtableConnect.js';
export { AirtableConnect };



declare global {
    namespace NodeJS {
        interface ProcessEnv {
            AIRTABLE_PERSONNAL_TOKEN: string;
            AIRTABLE_BASE_ID: string;
        }
    }
    interface ImportMetaEnv {
        readonly VITE_AIRTABLE_PERSONNAL_TOKEN: string
        readonly VITE_AIRTABLE_BASE_ID: string
    }
    interface ImportMeta {
        readonly env: ImportMetaEnv
    }

    /**
     * @name Datas
     * @description
     * This interface is used to define datas for create and update method
     * @param fields object
     * @example
     * {
     *  fields: {
     *      'Name': 'John Doe',
     *      'Age': 25
     *  }
     * }
     */
    interface Datas {
        fields: {
            [key: string]: any
        }
    }

    /**
     * @name ArgumentsRead
     * @description
     * This interface is used to define arguments for read method
     * @param base any
     * @param table string
     * @param view string
     * @param action Function
     * @param completedOnly boolean
     */
    interface ArgumentsRead {
        base: any;
        table: string;
        view: string;
        action?: Function;
        completedOnly?: boolean;
    }

    interface ArgumentsReadByID {
        base: any;
        table: string;
        id: string;
        action?: Function;
    }

    /**
     * @name ArgumentsCreateUpdate
     * @description
     * This interface is used to define arguments for create and update method
     * @param base any
     * @param datas Array<Datas>
     * @param table string
     * @param action Function
     */
    interface ArgumentsCreateUpdate {
        base: any;
        datas: Array<Datas>;
        table: string;
        action?: Function;
    }

    /**
     * @name ArgumentsDelete
     * @description
     * This interface is used to define arguments for delete method
     * @param base any
     * @param id string
     * @param table string
     * @param action Function
     */
    interface ArgumentsDelete {
        base: any;
        id: string;
        table: string;
        action?: Function;
    }

    /**
     * @name ArgumentsClientCreateUpdate
     * @description
     * This interface is used to define arguments for create and update method in client method
     * @param datas Array<Datas>
     * @param action Function
     */
    interface ArgumentsClientCreateUpdate{
        datas: Array<Datas>;
        action?: Function;
    }

    /**
     * @name ArgumentsClientRead
     * @description
     * This interface is used to define arguments for read method in client method
     * @param action Function
     * @param completedOnly boolean
     */
    interface ArgumentsClientRead {
        action?: Function;
        completedOnly?: boolean;
    }

    /**
     * @name ArgumentsClientDeleteReadByID
     * @description
     * This interface is used to define arguments for delete method in client method
     * @param id string
     * @param action Function
     */
    interface ArgumentsClientDeleteReadByID {
        id: string;
        action?: Function;
    }
}
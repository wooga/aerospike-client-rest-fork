/*
 * WARNING: DO NOT EDIT THIS FILE. This file is generated by yarn gen. Any changes will be overwritten.
 */

import ExtenderFunctions, {
    ApiActionCreatorExtender,
    CallType,
} from '../helpers/ApiActionExtender';
import { RouterAction } from 'connected-react-router';
import { ThunkDispatch } from 'redux-thunk';
import * as gapi from '../api';
import { Record, RestClientError } from '../api';
import { StoreState } from '../../../core/types/StoreState';
import {
    GetRecordNamespaceKeyAction,
    getRecordNamespaceKeyFailed,
    getRecordNamespaceKeyInProgress,
    getRecordNamespaceKeySuccessful,
    RecordExistsNamespaceKeyAction,
    recordExistsNamespaceKeyFailed,
    recordExistsNamespaceKeyInProgress,
    recordExistsNamespaceKeySuccessful,
    CreateRecordNamespaceKeyAction,
    createRecordNamespaceKeyFailed,
    createRecordNamespaceKeyInProgress,
    createRecordNamespaceKeySuccessful,
    ReplaceRecordNamespaceKeyAction,
    replaceRecordNamespaceKeyFailed,
    replaceRecordNamespaceKeyInProgress,
    replaceRecordNamespaceKeySuccessful,
    DeleteRecordNamespaceKeyAction,
    deleteRecordNamespaceKeyFailed,
    deleteRecordNamespaceKeyInProgress,
    deleteRecordNamespaceKeySuccessful,
    UpdateRecordNamespaceKeyAction,
    updateRecordNamespaceKeyFailed,
    updateRecordNamespaceKeyInProgress,
    updateRecordNamespaceKeySuccessful,
    GetRecordNamespaceSetKeyAction,
    getRecordNamespaceSetKeyFailed,
    getRecordNamespaceSetKeyInProgress,
    getRecordNamespaceSetKeySuccessful,
    RecordExistsNamespaceSetKeyAction,
    recordExistsNamespaceSetKeyFailed,
    recordExistsNamespaceSetKeyInProgress,
    recordExistsNamespaceSetKeySuccessful,
    CreateRecordNamespaceSetKeyAction,
    createRecordNamespaceSetKeyFailed,
    createRecordNamespaceSetKeyInProgress,
    createRecordNamespaceSetKeySuccessful,
    ReplaceRecordNamespaceSetKeyAction,
    replaceRecordNamespaceSetKeyFailed,
    replaceRecordNamespaceSetKeyInProgress,
    replaceRecordNamespaceSetKeySuccessful,
    DeleteRecordNamespaceSetKeyAction,
    deleteRecordNamespaceSetKeyFailed,
    deleteRecordNamespaceSetKeyInProgress,
    deleteRecordNamespaceSetKeySuccessful,
    UpdateRecordNamespaceSetKeyAction,
    updateRecordNamespaceSetKeyFailed,
    updateRecordNamespaceSetKeyInProgress,
    updateRecordNamespaceSetKeySuccessful,
} from './keyValueOperationsActions';
import { xformApiResponse } from '../helpers/apiTransformers';
import { getConfiguration } from '../helpers/apiConfiguration';
import SimpleResponse from '../types/SimpleResponse';
const conf = getConfiguration();
const api = new gapi.KeyValueOperationsApi(conf, process.env.REACT_APP_API_BASE || '');

interface DoGetRecordNamespaceKeyArgs {
    key: string;
    namespace: string;
    bins?: string[];
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: Record) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<Record, RestClientError>;
}
export const doGetRecordNamespaceKey = ({
    key,
    namespace,
    bins,
    consistencyLevel,
    keytype,
    linearizeRead,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoGetRecordNamespaceKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, GetRecordNamespaceKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<Record, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.getRecordNamespaceKey(
                        key,
                        namespace,
                        bins,
                        consistencyLevel,
                        keytype,
                        linearizeRead,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(getRecordNamespaceKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([getRecordNamespaceKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([getRecordNamespaceKeyFailed(xformedError)], xformedError);
    }
};

export const doRecordExistsNamespaceKey = (
    key: string,
    namespace: string,
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST',
    onSuccess?: (successArg?: SimpleResponse) => any | void,
    onError?: (errorArg?: RestClientError) => any | void,
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>
) => async (
    dispatch: ThunkDispatch<StoreState, void, RecordExistsNamespaceKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.recordExistsNamespaceKey(key, namespace, keytype, {
                        headers: { accept: 'application/json, application/msgpack' },
                    })
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(recordExistsNamespaceKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([recordExistsNamespaceKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([recordExistsNamespaceKeyFailed(xformedError)], xformedError);
    }
};

interface DoCreateRecordNamespaceKeyArgs {
    bins: object;
    key: string;
    namespace: string;
    commitLevel?: 'COMMIT_ALL' | 'COMMIT_MASTER';
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    durableDelete?: boolean;
    expiration?: number;
    generation?: number;
    generationPolicy?: 'NONE' | 'EXPECT_GEN_EQUAL' | 'EXPECT_GEN_GT';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    recordExistsAction?: 'UPDATE' | 'UPDATE_ONLY' | 'REPLACE' | 'REPLACE_ONLY' | 'CREATE_ONLY';
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: SimpleResponse) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>;
}
export const doCreateRecordNamespaceKey = ({
    bins,
    key,
    namespace,
    commitLevel,
    consistencyLevel,
    durableDelete,
    expiration,
    generation,
    generationPolicy,
    keytype,
    linearizeRead,
    recordExistsAction,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoCreateRecordNamespaceKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, CreateRecordNamespaceKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.createRecordNamespaceKey(
                        bins,
                        key,
                        namespace,
                        commitLevel,
                        consistencyLevel,
                        durableDelete,
                        expiration,
                        generation,
                        generationPolicy,
                        keytype,
                        linearizeRead,
                        recordExistsAction,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(createRecordNamespaceKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([createRecordNamespaceKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([createRecordNamespaceKeyFailed(xformedError)], xformedError);
    }
};

interface DoReplaceRecordNamespaceKeyArgs {
    bins: object;
    key: string;
    namespace: string;
    commitLevel?: 'COMMIT_ALL' | 'COMMIT_MASTER';
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    durableDelete?: boolean;
    expiration?: number;
    generation?: number;
    generationPolicy?: 'NONE' | 'EXPECT_GEN_EQUAL' | 'EXPECT_GEN_GT';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    recordExistsAction?: 'UPDATE' | 'UPDATE_ONLY' | 'REPLACE' | 'REPLACE_ONLY' | 'CREATE_ONLY';
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: SimpleResponse) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>;
}
export const doReplaceRecordNamespaceKey = ({
    bins,
    key,
    namespace,
    commitLevel,
    consistencyLevel,
    durableDelete,
    expiration,
    generation,
    generationPolicy,
    keytype,
    linearizeRead,
    recordExistsAction,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoReplaceRecordNamespaceKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, ReplaceRecordNamespaceKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.replaceRecordNamespaceKey(
                        bins,
                        key,
                        namespace,
                        commitLevel,
                        consistencyLevel,
                        durableDelete,
                        expiration,
                        generation,
                        generationPolicy,
                        keytype,
                        linearizeRead,
                        recordExistsAction,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(replaceRecordNamespaceKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([replaceRecordNamespaceKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([replaceRecordNamespaceKeyFailed(xformedError)], xformedError);
    }
};

interface DoDeleteRecordNamespaceKeyArgs {
    key: string;
    namespace: string;
    commitLevel?: 'COMMIT_ALL' | 'COMMIT_MASTER';
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    durableDelete?: boolean;
    expiration?: number;
    generation?: number;
    generationPolicy?: 'NONE' | 'EXPECT_GEN_EQUAL' | 'EXPECT_GEN_GT';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    recordExistsAction?: 'UPDATE' | 'UPDATE_ONLY' | 'REPLACE' | 'REPLACE_ONLY' | 'CREATE_ONLY';
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: SimpleResponse) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>;
}
export const doDeleteRecordNamespaceKey = ({
    key,
    namespace,
    commitLevel,
    consistencyLevel,
    durableDelete,
    expiration,
    generation,
    generationPolicy,
    keytype,
    linearizeRead,
    recordExistsAction,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoDeleteRecordNamespaceKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, DeleteRecordNamespaceKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.deleteRecordNamespaceKey(
                        key,
                        namespace,
                        commitLevel,
                        consistencyLevel,
                        durableDelete,
                        expiration,
                        generation,
                        generationPolicy,
                        keytype,
                        linearizeRead,
                        recordExistsAction,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(deleteRecordNamespaceKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([deleteRecordNamespaceKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([deleteRecordNamespaceKeyFailed(xformedError)], xformedError);
    }
};

interface DoUpdateRecordNamespaceKeyArgs {
    bins: object;
    key: string;
    namespace: string;
    commitLevel?: 'COMMIT_ALL' | 'COMMIT_MASTER';
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    durableDelete?: boolean;
    expiration?: number;
    generation?: number;
    generationPolicy?: 'NONE' | 'EXPECT_GEN_EQUAL' | 'EXPECT_GEN_GT';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    recordExistsAction?: 'UPDATE' | 'UPDATE_ONLY' | 'REPLACE' | 'REPLACE_ONLY' | 'CREATE_ONLY';
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: SimpleResponse) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>;
}
export const doUpdateRecordNamespaceKey = ({
    bins,
    key,
    namespace,
    commitLevel,
    consistencyLevel,
    durableDelete,
    expiration,
    generation,
    generationPolicy,
    keytype,
    linearizeRead,
    recordExistsAction,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoUpdateRecordNamespaceKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, UpdateRecordNamespaceKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.updateRecordNamespaceKey(
                        bins,
                        key,
                        namespace,
                        commitLevel,
                        consistencyLevel,
                        durableDelete,
                        expiration,
                        generation,
                        generationPolicy,
                        keytype,
                        linearizeRead,
                        recordExistsAction,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(updateRecordNamespaceKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([updateRecordNamespaceKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([updateRecordNamespaceKeyFailed(xformedError)], xformedError);
    }
};

interface DoGetRecordNamespaceSetKeyArgs {
    key: string;
    namespace: string;
    set: string;
    bins?: string[];
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: Record) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<Record, RestClientError>;
}
export const doGetRecordNamespaceSetKey = ({
    key,
    namespace,
    set,
    bins,
    consistencyLevel,
    keytype,
    linearizeRead,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoGetRecordNamespaceSetKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, GetRecordNamespaceSetKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<Record, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.getRecordNamespaceSetKey(
                        key,
                        namespace,
                        set,
                        bins,
                        consistencyLevel,
                        keytype,
                        linearizeRead,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(getRecordNamespaceSetKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([getRecordNamespaceSetKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([getRecordNamespaceSetKeyFailed(xformedError)], xformedError);
    }
};

export const doRecordExistsNamespaceSetKey = (
    key: string,
    namespace: string,
    set: string,
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST',
    onSuccess?: (successArg?: SimpleResponse) => any | void,
    onError?: (errorArg?: RestClientError) => any | void,
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>
) => async (
    dispatch: ThunkDispatch<StoreState, void, RecordExistsNamespaceSetKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.recordExistsNamespaceSetKey(key, namespace, set, keytype, {
                        headers: { accept: 'application/json, application/msgpack' },
                    })
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(recordExistsNamespaceSetKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([recordExistsNamespaceSetKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([recordExistsNamespaceSetKeyFailed(xformedError)], xformedError);
    }
};

interface DoCreateRecordNamespaceSetKeyArgs {
    bins: object;
    key: string;
    namespace: string;
    set: string;
    commitLevel?: 'COMMIT_ALL' | 'COMMIT_MASTER';
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    durableDelete?: boolean;
    expiration?: number;
    generation?: number;
    generationPolicy?: 'NONE' | 'EXPECT_GEN_EQUAL' | 'EXPECT_GEN_GT';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    recordExistsAction?: 'UPDATE' | 'UPDATE_ONLY' | 'REPLACE' | 'REPLACE_ONLY' | 'CREATE_ONLY';
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: SimpleResponse) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>;
}
export const doCreateRecordNamespaceSetKey = ({
    bins,
    key,
    namespace,
    set,
    commitLevel,
    consistencyLevel,
    durableDelete,
    expiration,
    generation,
    generationPolicy,
    keytype,
    linearizeRead,
    recordExistsAction,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoCreateRecordNamespaceSetKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, CreateRecordNamespaceSetKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.createRecordNamespaceSetKey(
                        bins,
                        key,
                        namespace,
                        set,
                        commitLevel,
                        consistencyLevel,
                        durableDelete,
                        expiration,
                        generation,
                        generationPolicy,
                        keytype,
                        linearizeRead,
                        recordExistsAction,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(createRecordNamespaceSetKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([createRecordNamespaceSetKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([createRecordNamespaceSetKeyFailed(xformedError)], xformedError);
    }
};

interface DoReplaceRecordNamespaceSetKeyArgs {
    bins: object;
    key: string;
    namespace: string;
    set: string;
    commitLevel?: 'COMMIT_ALL' | 'COMMIT_MASTER';
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    durableDelete?: boolean;
    expiration?: number;
    generation?: number;
    generationPolicy?: 'NONE' | 'EXPECT_GEN_EQUAL' | 'EXPECT_GEN_GT';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    recordExistsAction?: 'UPDATE' | 'UPDATE_ONLY' | 'REPLACE' | 'REPLACE_ONLY' | 'CREATE_ONLY';
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: SimpleResponse) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>;
}
export const doReplaceRecordNamespaceSetKey = ({
    bins,
    key,
    namespace,
    set,
    commitLevel,
    consistencyLevel,
    durableDelete,
    expiration,
    generation,
    generationPolicy,
    keytype,
    linearizeRead,
    recordExistsAction,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoReplaceRecordNamespaceSetKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, ReplaceRecordNamespaceSetKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.replaceRecordNamespaceSetKey(
                        bins,
                        key,
                        namespace,
                        set,
                        commitLevel,
                        consistencyLevel,
                        durableDelete,
                        expiration,
                        generation,
                        generationPolicy,
                        keytype,
                        linearizeRead,
                        recordExistsAction,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(replaceRecordNamespaceSetKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([replaceRecordNamespaceSetKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([replaceRecordNamespaceSetKeyFailed(xformedError)], xformedError);
    }
};

interface DoDeleteRecordNamespaceSetKeyArgs {
    key: string;
    namespace: string;
    set: string;
    commitLevel?: 'COMMIT_ALL' | 'COMMIT_MASTER';
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    durableDelete?: boolean;
    expiration?: number;
    generation?: number;
    generationPolicy?: 'NONE' | 'EXPECT_GEN_EQUAL' | 'EXPECT_GEN_GT';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    recordExistsAction?: 'UPDATE' | 'UPDATE_ONLY' | 'REPLACE' | 'REPLACE_ONLY' | 'CREATE_ONLY';
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: SimpleResponse) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>;
}
export const doDeleteRecordNamespaceSetKey = ({
    key,
    namespace,
    set,
    commitLevel,
    consistencyLevel,
    durableDelete,
    expiration,
    generation,
    generationPolicy,
    keytype,
    linearizeRead,
    recordExistsAction,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoDeleteRecordNamespaceSetKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, DeleteRecordNamespaceSetKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.deleteRecordNamespaceSetKey(
                        key,
                        namespace,
                        set,
                        commitLevel,
                        consistencyLevel,
                        durableDelete,
                        expiration,
                        generation,
                        generationPolicy,
                        keytype,
                        linearizeRead,
                        recordExistsAction,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(deleteRecordNamespaceSetKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([deleteRecordNamespaceSetKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([deleteRecordNamespaceSetKeyFailed(xformedError)], xformedError);
    }
};

interface DoUpdateRecordNamespaceSetKeyArgs {
    bins: object;
    key: string;
    namespace: string;
    set: string;
    commitLevel?: 'COMMIT_ALL' | 'COMMIT_MASTER';
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    durableDelete?: boolean;
    expiration?: number;
    generation?: number;
    generationPolicy?: 'NONE' | 'EXPECT_GEN_EQUAL' | 'EXPECT_GEN_GT';
    keytype?: 'STRING' | 'INTEGER' | 'BYTES' | 'DIGEST';
    linearizeRead?: boolean;
    recordExistsAction?: 'UPDATE' | 'UPDATE_ONLY' | 'REPLACE' | 'REPLACE_ONLY' | 'CREATE_ONLY';
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: SimpleResponse) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>;
}
export const doUpdateRecordNamespaceSetKey = ({
    bins,
    key,
    namespace,
    set,
    commitLevel,
    consistencyLevel,
    durableDelete,
    expiration,
    generation,
    generationPolicy,
    keytype,
    linearizeRead,
    recordExistsAction,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoUpdateRecordNamespaceSetKeyArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, UpdateRecordNamespaceSetKeyAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.updateRecordNamespaceSetKey(
                        bins,
                        key,
                        namespace,
                        set,
                        commitLevel,
                        consistencyLevel,
                        durableDelete,
                        expiration,
                        generation,
                        generationPolicy,
                        keytype,
                        linearizeRead,
                        recordExistsAction,
                        replica,
                        sendKey,
                        { headers: { accept: 'application/json, application/msgpack' } }
                    )
                ),
            [CallType.success]: dispatch,
            [CallType.error]: dispatch,
        },
        onSuccess,
        onError,
        extender
    );

    dispatch(updateRecordNamespaceSetKeyInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([updateRecordNamespaceSetKeySuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([updateRecordNamespaceSetKeyFailed(xformedError)], xformedError);
    }
};
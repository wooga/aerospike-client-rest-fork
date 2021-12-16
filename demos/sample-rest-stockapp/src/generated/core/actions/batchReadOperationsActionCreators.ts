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
import { BatchReadRequest, RestClientError } from '../api';
import { StoreState } from '../../../core/types/StoreState';
import {
    PerformBatchGetAction,
    performBatchGetFailed,
    performBatchGetInProgress,
    performBatchGetSuccessful,
} from './batchReadOperationsActions';
import { xformApiResponse } from '../helpers/apiTransformers';
import { getConfiguration } from '../helpers/apiConfiguration';
import SimpleResponse from '../types/SimpleResponse';
const conf = getConfiguration();
const api = new gapi.BatchReadOperationsApi(conf, process.env.REACT_APP_API_BASE || '');

interface DoPerformBatchGetArgs {
    batchKeys: BatchReadRequest[];
    consistencyLevel?: 'CONSISTENCY_ONE' | 'CONSISTENCY_ALL';
    linearizeRead?: boolean;
    replica?: 'MASTER' | 'MASTER_PROLES' | 'SEQUENCE' | 'RANDOM';
    sendKey?: boolean;
    onSuccess?: (successArg?: SimpleResponse) => any | void;
    onError?: (errorArg?: RestClientError) => any | void;
    extender?: ExtenderFunctions<SimpleResponse, RestClientError>;
}
export const doPerformBatchGet = ({
    batchKeys,
    consistencyLevel,
    linearizeRead,
    replica,
    sendKey,
    onSuccess,
    onError,
    extender,
}: DoPerformBatchGetArgs) => async (
    dispatch: ThunkDispatch<StoreState, void, PerformBatchGetAction | RouterAction>
) => {
    const calls = new ApiActionCreatorExtender<SimpleResponse, RestClientError>(
        {
            [CallType.apiCall]: async () =>
                await xformApiResponse(
                    await api.performBatchGet(
                        batchKeys,
                        consistencyLevel,
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

    dispatch(performBatchGetInProgress());

    try {
        const ret = await calls.apiCall();
        await calls.success([performBatchGetSuccessful(ret)], ret);
        return ret;
    } catch (error) {
        const xformedError = await xformApiResponse(error);
        return calls.error([performBatchGetFailed(xformedError)], xformedError);
    }
};
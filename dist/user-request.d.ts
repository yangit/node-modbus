/// <reference types="node" />
import ModbusAbstractRequest from './abstract-request';
import { RequestToResponse } from './request-response-map';
import ModbusRTURequest from './rtu-request';
import ModbusTCPRequest from './tcp-request';
import { UserRequestError } from './user-request-error';
import { UserRequestMetrics } from './user-request-metrics';
export declare type ModbusRequest = ModbusTCPRequest | ModbusRTURequest;
export interface IUserRequestResolve<Req extends ModbusAbstractRequest> {
    metrics: UserRequestMetrics;
    request: Req;
    response: RequestToResponse<Req>;
}
export declare type PromiseUserRequest<Req extends ModbusAbstractRequest> = Promise<IUserRequestResolve<Req>>;
export default class UserRequest<Req extends ModbusAbstractRequest = any> {
    protected readonly _request: Req;
    protected readonly _timeout: number;
    protected readonly _promise: PromiseUserRequest<Req>;
    protected _resolve: (value: IUserRequestResolve<Req>) => void;
    protected _reject: (err: UserRequestError<RequestToResponse<Req>, Req>) => void;
    protected _timer: NodeJS.Timeout;
    protected _metrics: UserRequestMetrics;
    constructor(request: Req, timeout?: number);
    createPayload(): Buffer;
    start(cb: () => void): void;
    readonly metrics: UserRequestMetrics;
    done(): void;
    readonly request: Req;
    readonly timeout: number;
    readonly promise: Promise<IUserRequestResolve<Req>>;
    resolve(response: RequestToResponse<Req>): void;
    readonly reject: (err: UserRequestError<RequestToResponse<Req>, Req>) => void;
}
//# sourceMappingURL=user-request.d.ts.map
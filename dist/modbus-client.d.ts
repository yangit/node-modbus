/// <reference types="node" />
import * as Stream from 'stream';
import { ReadCoilsRequestBody, ReadDiscreteInputsRequestBody, ReadHoldingRegistersRequestBody, ReadInputRegistersRequestBody, WriteMultipleCoilsRequestBody, WriteMultipleRegistersRequestBody, WriteSingleCoilRequestBody, WriteSingleRegisterRequestBody } from './request';
import ModbusAbstractRequest from './abstract-request.js';
import MBClientRequestHandler from './client-request-handler.js';
import MBClientResponseHandler from './client-response-handler.js';
import { UserRequestError } from './errors';
import { CastRequestBody } from './request-response-map';
import { PromiseUserRequest } from './user-request.js';
export default abstract class MBClient<S extends Stream.Duplex, Req extends ModbusAbstractRequest> {
    abstract readonly slaveId: number;
    abstract readonly unitId: number;
    readonly connectionState: "offline" | "online";
    readonly socket: S;
    readonly requestCount: number;
    protected _socket: S;
    protected abstract readonly _requestHandler: MBClientRequestHandler<S, Req>;
    protected abstract readonly _responseHandler: MBClientResponseHandler;
    constructor(socket: S);
    readCoils(start: number, count: number): Promise<import("./user-request").IUserRequestResolve<CastRequestBody<Req, ReadCoilsRequestBody>>>;
    readDiscreteInputs(start: number, count: number): Promise<import("./user-request").IUserRequestResolve<CastRequestBody<Req, ReadDiscreteInputsRequestBody>>>;
    readHoldingRegisters(start: number, count: number): Promise<import("./user-request").IUserRequestResolve<CastRequestBody<Req, ReadHoldingRegistersRequestBody>>>;
    readInputRegisters(start: number, count: number): Promise<import("./user-request").IUserRequestResolve<CastRequestBody<Req, ReadInputRegistersRequestBody>>>;
    writeSingleCoil(address: number, value: boolean | 0 | 1): Promise<import("./user-request").IUserRequestResolve<CastRequestBody<Req, WriteSingleCoilRequestBody>>>;
    writeSingleRegister(address: number, value: number): Promise<import("./user-request").IUserRequestResolve<CastRequestBody<Req, WriteSingleRegisterRequestBody>>>;
    writeMultipleCoils(start: number, values: boolean[]): PromiseUserRequest<CastRequestBody<Req, WriteMultipleCoilsRequestBody>>;
    writeMultipleCoils(start: number, values: Buffer, quantity: number): PromiseUserRequest<CastRequestBody<Req, WriteMultipleCoilsRequestBody>>;
    writeMultipleRegisters(start: number, values: number[] | Buffer): Promise<import("./user-request").IUserRequestResolve<CastRequestBody<Req, WriteMultipleRegistersRequestBody>>>;
    manuallyClearRequests(numRequests: number): void;
    manuallyRejectCurrentRequest(): void;
    customErrorRequest(err: UserRequestError<any, any>): void;
    private _onData;
}
//# sourceMappingURL=modbus-client.d.ts.map
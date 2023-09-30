/* tslint:disable */
/* eslint-disable */
/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AcceptedResponseDto,
  BadRequestResponseDto,
  ConfirmForgotPasswordRequestDto,
  ConfirmRequestDto,
  ForgotPasswordRequestDto,
  LoginRequestDto,
  LoginResponseDto,
  RefreshTokenRequestDto,
  RefreshTokenResponseDto,
  RegisterRequestDto,
  UnauthorizedResponseDto,
} from '../models/index';
import {
    AcceptedResponseDtoFromJSON,
    AcceptedResponseDtoToJSON,
    BadRequestResponseDtoFromJSON,
    BadRequestResponseDtoToJSON,
    ConfirmForgotPasswordRequestDtoFromJSON,
    ConfirmForgotPasswordRequestDtoToJSON,
    ConfirmRequestDtoFromJSON,
    ConfirmRequestDtoToJSON,
    ForgotPasswordRequestDtoFromJSON,
    ForgotPasswordRequestDtoToJSON,
    LoginRequestDtoFromJSON,
    LoginRequestDtoToJSON,
    LoginResponseDtoFromJSON,
    LoginResponseDtoToJSON,
    RefreshTokenRequestDtoFromJSON,
    RefreshTokenRequestDtoToJSON,
    RefreshTokenResponseDtoFromJSON,
    RefreshTokenResponseDtoToJSON,
    RegisterRequestDtoFromJSON,
    RegisterRequestDtoToJSON,
    UnauthorizedResponseDtoFromJSON,
    UnauthorizedResponseDtoToJSON,
} from '../models/index';

export interface ConfirmRequest {
    confirmRequestDto: ConfirmRequestDto;
}

export interface ConfirmForgotPasswordRequest {
    confirmForgotPasswordRequestDto: ConfirmForgotPasswordRequestDto;
}

export interface ForgotPasswordRequest {
    forgotPasswordRequestDto: ForgotPasswordRequestDto;
}

export interface LoginRequest {
    loginRequestDto: LoginRequestDto;
}

export interface RefreshTokenRequest {
    refreshTokenRequestDto: RefreshTokenRequestDto;
}

export interface RegisterRequest {
    registerRequestDto: RegisterRequestDto;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Confirm user account
     */
    async confirmRaw(requestParameters: ConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.confirmRequestDto === null || requestParameters.confirmRequestDto === undefined) {
            throw new runtime.RequiredError('confirmRequestDto','Required parameter requestParameters.confirmRequestDto was null or undefined when calling confirm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/users/confirm`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConfirmRequestDtoToJSON(requestParameters.confirmRequestDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Confirm user account
     */
    async confirm(requestParameters: ConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.confirmRaw(requestParameters, initOverrides);
    }

    /**
     * Confirm and reset forgotten password
     */
    async confirmForgotPasswordRaw(requestParameters: ConfirmForgotPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResponseDto>> {
        if (requestParameters.confirmForgotPasswordRequestDto === null || requestParameters.confirmForgotPasswordRequestDto === undefined) {
            throw new runtime.RequiredError('confirmForgotPasswordRequestDto','Required parameter requestParameters.confirmForgotPasswordRequestDto was null or undefined when calling confirmForgotPassword.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/users/confirm-forgot-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConfirmForgotPasswordRequestDtoToJSON(requestParameters.confirmForgotPasswordRequestDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResponseDtoFromJSON(jsonValue));
    }

    /**
     * Confirm and reset forgotten password
     */
    async confirmForgotPassword(requestParameters: ConfirmForgotPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResponseDto> {
        const response = await this.confirmForgotPasswordRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Initiate forgot password
     */
    async forgotPasswordRaw(requestParameters: ForgotPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.forgotPasswordRequestDto === null || requestParameters.forgotPasswordRequestDto === undefined) {
            throw new runtime.RequiredError('forgotPasswordRequestDto','Required parameter requestParameters.forgotPasswordRequestDto was null or undefined when calling forgotPassword.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/users/forgot-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ForgotPasswordRequestDtoToJSON(requestParameters.forgotPasswordRequestDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Initiate forgot password
     */
    async forgotPassword(requestParameters: ForgotPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.forgotPasswordRaw(requestParameters, initOverrides);
    }

    /**
     * Log in a user
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResponseDto>> {
        if (requestParameters.loginRequestDto === null || requestParameters.loginRequestDto === undefined) {
            throw new runtime.RequiredError('loginRequestDto','Required parameter requestParameters.loginRequestDto was null or undefined when calling login.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/users/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestDtoToJSON(requestParameters.loginRequestDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResponseDtoFromJSON(jsonValue));
    }

    /**
     * Log in a user
     */
    async login(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResponseDto> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Refresh user tokens
     */
    async refreshTokenRaw(requestParameters: RefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefreshTokenResponseDto>> {
        if (requestParameters.refreshTokenRequestDto === null || requestParameters.refreshTokenRequestDto === undefined) {
            throw new runtime.RequiredError('refreshTokenRequestDto','Required parameter requestParameters.refreshTokenRequestDto was null or undefined when calling refreshToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/users/refresh-token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RefreshTokenRequestDtoToJSON(requestParameters.refreshTokenRequestDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefreshTokenResponseDtoFromJSON(jsonValue));
    }

    /**
     * Refresh user tokens
     */
    async refreshToken(requestParameters: RefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefreshTokenResponseDto> {
        const response = await this.refreshTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Register a user
     */
    async registerRaw(requestParameters: RegisterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResponseDto>> {
        if (requestParameters.registerRequestDto === null || requestParameters.registerRequestDto === undefined) {
            throw new runtime.RequiredError('registerRequestDto','Required parameter requestParameters.registerRequestDto was null or undefined when calling register.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/users/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterRequestDtoToJSON(requestParameters.registerRequestDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResponseDtoFromJSON(jsonValue));
    }

    /**
     * Register a user
     */
    async register(requestParameters: RegisterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResponseDto> {
        const response = await this.registerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

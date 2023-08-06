/* tslint:disable */
/* eslint-disable */
/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BadRequestResponseDto,
  LoginUserRequestDto,
  LoginUserResponseDto,
  UnauthorizedResponseDto,
} from '../models';
import {
    BadRequestResponseDtoFromJSON,
    BadRequestResponseDtoToJSON,
    LoginUserRequestDtoFromJSON,
    LoginUserRequestDtoToJSON,
    LoginUserResponseDtoFromJSON,
    LoginUserResponseDtoToJSON,
    UnauthorizedResponseDtoFromJSON,
    UnauthorizedResponseDtoToJSON,
} from '../models';

export interface AuthLoginControllerLoginRequest {
    loginUserRequestDto: LoginUserRequestDto;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Log in a user
     */
    async authLoginControllerLoginRaw(requestParameters: AuthLoginControllerLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginUserResponseDto>> {
        if (requestParameters.loginUserRequestDto === null || requestParameters.loginUserRequestDto === undefined) {
            throw new runtime.RequiredError('loginUserRequestDto','Required parameter requestParameters.loginUserRequestDto was null or undefined when calling authLoginControllerLogin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/users/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginUserRequestDtoToJSON(requestParameters.loginUserRequestDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginUserResponseDtoFromJSON(jsonValue));
    }

    /**
     * Log in a user
     */
    async authLoginControllerLogin(requestParameters: AuthLoginControllerLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginUserResponseDto> {
        const response = await this.authLoginControllerLoginRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

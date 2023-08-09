/* tslint:disable */
/* eslint-disable */
/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LoginResponseDto
 */
export interface LoginResponseDto {
    /**
     * The ID token for the user
     * @type {string}
     * @memberof LoginResponseDto
     */
    idToken: string;
    /**
     * The access token for the user
     * @type {string}
     * @memberof LoginResponseDto
     */
    accessToken: string;
    /**
     * The refresh token for the user
     * @type {string}
     * @memberof LoginResponseDto
     */
    refreshToken: string;
}

/**
 * Check if a given object implements the LoginResponseDto interface.
 */
export function instanceOfLoginResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "idToken" in value;
    isInstance = isInstance && "accessToken" in value;
    isInstance = isInstance && "refreshToken" in value;

    return isInstance;
}

export function LoginResponseDtoFromJSON(json: any): LoginResponseDto {
    return LoginResponseDtoFromJSONTyped(json, false);
}

export function LoginResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'idToken': json['idToken'],
        'accessToken': json['accessToken'],
        'refreshToken': json['refreshToken'],
    };
}

export function LoginResponseDtoToJSON(value?: LoginResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'idToken': value.idToken,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}


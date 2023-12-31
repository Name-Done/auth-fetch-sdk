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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ConfirmRequestDto
 */
export interface ConfirmRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof ConfirmRequestDto
     */
    email: string;
    /**
     * The confirmation code sent to the user's email
     * @type {string}
     * @memberof ConfirmRequestDto
     */
    code: string;
}

/**
 * Check if a given object implements the ConfirmRequestDto interface.
 */
export function instanceOfConfirmRequestDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ConfirmRequestDtoFromJSON(json: any): ConfirmRequestDto {
    return ConfirmRequestDtoFromJSONTyped(json, false);
}

export function ConfirmRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfirmRequestDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'code': json['code'],
    };
}

export function ConfirmRequestDtoToJSON(value?: ConfirmRequestDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'code': value.code,
    };
}


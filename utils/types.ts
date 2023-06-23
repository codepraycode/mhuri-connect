import { IMember } from '@models/member';

export type Payload = null | object | string;
export type PayloadError = null | {
    message: string,
    code: string
}


// Components

export interface MemberCardProps {
    members: readonly IMember[],
    isAdmin?: boolean
}

export interface LoaderProps {
    isAdmin?: boolean
}

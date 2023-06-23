import { IMember } from '@models/member';
import { Types } from 'mongoose';

export type Payload = null | object | string;
export type PayloadError = null | {
    message: string,
    code: string
}

export type ObjectString = Types.ObjectId;

// Components

export interface MemberCardProps {
    members: readonly IMember[],
    isAdmin?: boolean,
    selections: ObjectString[],
    onSelect:(id:ObjectString)=>void
}

export interface LoaderProps {
    isAdmin?: boolean
}

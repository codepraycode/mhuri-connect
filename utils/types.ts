import { IMember } from '@models/member';
import { Types } from 'mongoose';
import { ChangeEventHandler, FormEventHandler } from 'react';

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

export interface ModalProps {
    open: boolean,
    userCanClose?: boolean,
    disableCloseOnBackgroundClick?: boolean,
    onClose: ()=>void,
    children: React.ReactNode
}

export interface AuthTemplateProps<T = string|number> {
    authError: PayloadError | null,
    authEmail: string,
    handleChange: (val: T)=>void
    handleAuth: FormEventHandler
}

export interface InputProps<T = string|number> {
    type?: string,
    name: string,
    autoComplete?: boolean,
    placeholder?: string,
    label: string,
    error?: string | null,
    value: T,
    handleChange: (val: T)=>void
}

export interface FormProps {
    children: React.ReactNode,
    error: string | null | undefined,
    handleSubmit?: FormEventHandler,
    csrfToken?: any
}

export interface ProviderProps {
    children: React.ReactNode,
    session?: any
}

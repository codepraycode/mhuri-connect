import { Payload, PayloadError } from '@utils/types'
import { NextResponse } from 'next/server'


export interface RequestResponse {
    status: number,
    statusText: string,
    data?: Payload,
    error?: PayloadError,
}


export const ReqResponse = (data: Payload = {}, error: PayloadError = null, status:number = 200, statusText:string = "Ok"): NextResponse => {

    const resData: RequestResponse = {
        status,
        statusText,
        data,
        error
    }

    return new NextResponse(JSON.stringify(resData), { status })
}
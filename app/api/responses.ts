import { NextResponse } from 'next/server'

type Payload = null | object | string;

export interface RequestResponse {
    status: number,
    statusText: string,
    data?: Payload,
    error?: Payload,
}


export const ReqResponse = (data: Payload = {}, error: Payload = null, status:number = 200, statusText:string = "Ok"): NextResponse => {

    const resData: RequestResponse = {
        status,
        statusText,
        data,
        error
    }

    return new NextResponse(JSON.stringify(resData), { status })
}
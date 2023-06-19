type Payload = null | object | string;

export interface RequestResponse {
    status: number,
    statusText: string,
    data?: Payload,
    error?: Payload,
}


export const ReqResponse = (data: Payload = {}, error: Payload = null, status:number = 200, statusText:string = "Ok"): Response => {

    const resData: RequestResponse = {
        status,
        statusText,
        data,
        error
    }

    return new Response(JSON.stringify(resData), { status })
}
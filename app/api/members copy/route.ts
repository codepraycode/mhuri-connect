import { connectToDb } from '@utils/database';
import Member from '@models/member';
import {ReqResponse} from '../responses';


export const GET = async() => {

    // Connect to database

    // load all members, excluding current authenticated user.
    //  along side their connections.

    // Return all the members

    return ReqResponse([], null);
}

export const POST = async(req: Request) => {

    // Get userId, and array of id of other users from claim
    const { id, claims } = await req.json();

    // Connect to database.

    // load all members, excluding current authenticated user.
    //  along side their connections.

    // Update user knows

    // Return all the members

    return ReqResponse({id, claims}, null);
}
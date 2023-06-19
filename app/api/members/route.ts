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
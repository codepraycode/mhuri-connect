import { connectToDb } from '@utils/database';
import Member from '@models/member';
import {ReqResponse} from '../responses';


interface Stats {
    user: object,
    knows: object,
    known: object,
    connects: number
}

export const GET = async() => {

    // It's expected that the user using the resource is an admin

    // Connect to database
    // Check if requesting user is an admin.

    // load all members, excluding current authenticated user.
    //  along side their connections.

    // Calcualate stats:
    //  real_claim = | total known - total claim |
    //  connects = total_members - real_claims

    // Return stats

    return ReqResponse([], null);
}
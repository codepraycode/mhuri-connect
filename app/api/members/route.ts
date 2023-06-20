import { connectToDb } from '@utils/database';
import Member from '@models/member';
import {ReqResponse} from '../responses';


export const GET = async() => {

    // Connect to database
    try {
        await connectToDb();
    } catch(err) {
        const message = "Storage error";
        console.log("MOGODB ERROR:> could not connect to DB", err);
        return ReqResponse(null, { message }, 500, message)
    }

    let members = null; // expected to become an array.

    try {
        // load all members, excluding current authenticated user.
        //  along side their connections.
        members = await Member.find({});
    } catch(err) {
        const message = "Could not load members";
        return ReqResponse(null, { message }, 500, message)
    }

    // Return all the members

    return ReqResponse(members, null);
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
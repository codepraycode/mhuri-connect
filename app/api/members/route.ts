import { NextRequest, NextResponse } from 'next/server'
import { connectToDb } from '@utils/database';
import Member, { IMember } from '@models/member';
import {ReqResponse} from '../responses';
import { Types } from 'mongoose';



type ClaimsSubmit = {
    id: string,
    claims: readonly [ string ]
}

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

export const POST = async(req: NextRequest) => {

    // Get userId, and array of id of other users from claim
    const { id, claims }:ClaimsSubmit = await req.json();

    // Connect to database
    try {
        await connectToDb();
    } catch(err) {
        const message = "Storage error";
        console.log("MOGODB ERROR:> could not connect to DB", err);
        return ReqResponse(null, { message }, 500, message)
    }

    // Load user
    let user: IMember | null;
    try {
        user = await Member.findById(id).exec();
    } catch(err) {
        const message = "Could not load member";
        return ReqResponse(null, { message }, 500, message)
    }
    
    if (!user) {
        const message = "Member not found"
        return ReqResponse(null, { message }, 400, message)
    }

    // Check if the user's id is not included in the claims, remove if there
    const filteredClaims = claims.filter((e)=>e != user?._id).map((e)=> e as unknown as Types.ObjectId);

    // Update user knows
    user.knows = filteredClaims;

    // Save
    await user.save();

    // Return all the members
    return ReqResponse(user, null);
}
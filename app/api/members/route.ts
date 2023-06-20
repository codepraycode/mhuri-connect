import { NextRequest } from 'next/server';
import { connectToDb } from '@utils/database';
import Member from '@models/member';
import {ReqResponse} from '../responses';
import { Types } from 'mongoose';
import { ClaimsSubmit, LoadUser, User } from '@helpers/server';


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
    let user: User;

    try {
        user = await LoadUser(id);
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
    user.claims = filteredClaims;

    let members = await Member.find()
        // .where("claims")
        .exec();
    
    const total = members.length;
    const members_who_knows_user = members.filter((e)=>e.claims.includes(user?._id));

    // calculate stats
    user.stats = {
        knows: filteredClaims.length,
        known: members_who_knows_user.length,
        connections: total - Math.min(filteredClaims.length, members_who_knows_user.length)
    };

    // Save
    await user.save();

    // Return all the members
    return ReqResponse(user, null);
}
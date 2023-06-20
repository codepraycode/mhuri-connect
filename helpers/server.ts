import Member, { IMember } from "@models/member";



export type ClaimsSubmit = {
    id: string,
    claims: readonly [ string ]
}

export type User = IMember | null;


export const LoadUser = async (id: string): Promise<User> => {
    let user: User;
    
    user = await Member.findById(id).exec();

    return user;
}
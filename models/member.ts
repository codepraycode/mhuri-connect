import { InferSchemaType, Schema, model, models } from 'mongoose';


// interface IMember {
//     firstname: string,
//     lastname: string,
//     username: string,
//     email: string,
//     contact: string,
//     password: string,
//     dateOfBirth: Date,
//     isAdmin: boolean,
//     knows: [Types.ObjectId]
// }


const MemberSchema = new Schema({
    firstname: {
        type: Schema.Types.String,
        required: [true, "First name is required"],
    },
    lastname: {
        type: Schema.Types.String,
        required: [true, "Last name is required"],
    },
    username: {
        type: Schema.Types.String,
        required: [true, "Username is required"],
        unique: true,
    },
    email: {
        type: Schema.Types.String,
        required: [true, "Email is required"],
        unique: true,
        validate:{
            validator: function(v: string) {
                return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(v);
            },
            message: (props: { value: string}) => `${props.value} is not a valid email address!`
        }
    },
    contact: {
        type: String,
        validate:{
            validator: function(v: string) {
                return /\d{11}/.test(v);
            },
            message: (props: { value: string}) => `${props.value} is not a valid phone number!`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],  
    },
    dateOfBirth: {
        type: Schema.Types.Date,
    },
    isAdmin: {
        type: Schema.Types.Boolean,
        default: false,
    },
    knows: { // Ids of people a user knows
        type: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
    },
});

type IMemberSchema = InferSchemaType<typeof MemberSchema>;

export interface IMember extends IMemberSchema {
    _id?: string,
    save: ()=> Promise<void>
}

const Member = models.Member || model('Member', MemberSchema);
export default Member;
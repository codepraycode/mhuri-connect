import { FormProps } from "@utils/types";
import { TextInput, EmailInput, PasswordInput } from "./TextInput";


const Form = ({children, error}: FormProps) =>{

    return (
        <form>
            <span className="err">{error}</span>
            {children}
        </form>
    )
}


export default Form;
export {
    TextInput, EmailInput, PasswordInput
}
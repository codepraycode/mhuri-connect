import { FormProps } from "@utils/types";
import { TextInput, EmailInput, PasswordInput } from "./TextInput";
import { getCsrfToken } from "next-auth/react"


const Form = ({children, error, csrfToken}: FormProps) =>{

    return (
        <form 
            // onSubmit={handleSubmit}
            method={"post"}
            action="/api/auth/signin/email"
        >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <span className="err">{error}</span>
            {children}
        </form>
    )
}


export default Form;
export {
    TextInput, EmailInput, PasswordInput
}


export async function getServerSideProps(context:any) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}
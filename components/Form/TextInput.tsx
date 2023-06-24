import { InputProps } from "@utils/types"

export const TextInput = (props: InputProps) =>{
    return (
        <div className="form_group">

            <input
                type={props.type || "text"}
                name={props.name}
                autoComplete={props.autoComplete ? "on" : "off"}
                placeholder={props.placeholder || " "}
            />

            <label
                htmlFor={props.name}
            >
                {props.label}
            </label>
        </div>
    )
}


export const EmailInput = (props: InputProps) =>{
    return (
        <TextInput {...props} type="email"/>
    )
}

export const PasswordInput = (props: InputProps) =>{
    return (
        <TextInput {...props} type="password"/>
    )
}
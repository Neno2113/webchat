import { ChangeEvent, useState } from "react";



export const useForm = <T>( initState: T ) => {

    const [ formValues, setFormValues ] = useState( initState );


    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormValues( prev => ({
            ...prev,
            [name]: value
        }))
    }

    const resetForm = () => {
        setFormValues({ ...initState })
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return {
        ...formValues,
        formValues,

        handleChange,
        resetForm,
        isValidEmail

    }
}
import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback, validator) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues])

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const validationErrors = validator(values);
        if (!validationErrors || validationErrors.length === 0) {
            await submitCallback(values);
            setValues(initialValues);
        } else {
            setErrors(validationErrors);
        }
    }

    return {
        values,
        changeHandler,
        submitHandler,
        errors
    }
}
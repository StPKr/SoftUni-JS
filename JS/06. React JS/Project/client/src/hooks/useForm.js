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
        setErrors([]);
        const validationErrors = validator(values);
        if (!validationErrors || validationErrors.length === 0) {
            try {
                await submitCallback(values);
                setValues(initialValues);
            } catch (err) {
                setErrors(errors => [...errors, err.message]);
            }
        } else {
            setErrors(validationErrors);
        }
    }

    return {
        values,
        changeHandler,
        submitHandler,
        errors,
        setErrors
    }
}
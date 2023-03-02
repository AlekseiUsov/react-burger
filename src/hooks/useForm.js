import { useState } from "react";

export const useForm = (inputValues) => {
    const [formValues, setFormValues] = useState(inputValues);

    const handleInputsChange = event => {
        const { value, name } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return { formValues, handleInputsChange, setFormValues };
}
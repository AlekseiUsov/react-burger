import { useState } from "react";

interface IAnswer {
    [name: string]: string;
}

export const useForm = (inputValues: IAnswer) => {
    const [formValues, setFormValues] = useState(inputValues);

    const handleInputsChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return { formValues, handleInputsChange, setFormValues };
}


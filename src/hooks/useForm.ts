import { useState } from "react";

interface IAnswer {
    [name: string]: string;
}

export function useForm<T extends IAnswer>(inputValues: T) {
    const [formValues, setFormValues] = useState(inputValues);

    const handleInputsChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return { formValues, handleInputsChange, setFormValues };
}


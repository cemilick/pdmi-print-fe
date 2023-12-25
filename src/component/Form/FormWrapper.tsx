import React, { Children } from "react";
import { Control, Form } from "react-hook-form"

interface IFormWrapper {
    control: Control;
}

export const FormWrapper: React.FC<IFormWrapper> = (props) => {
    return (
        <Form control={props.control}>
            Children
        </Form>
    )
}
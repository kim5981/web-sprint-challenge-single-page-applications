import * as yup from "yup";

const pizzaFormSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("please provide a name for your order")
        .min(2, "name must be at least 2 characters")
    ,
    size: yup
        .string()
        .oneOf(["s", "m", "l", "xl"], "pick a size for your pizza")
    ,
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    sausage: yup.boolean(),
    greenpepper: yup.boolean(),
    pineapple: yup.boolean(),
    ham: yup.boolean(),
    instructions: yup
        .string()
})

export default pizzaFormSchema;
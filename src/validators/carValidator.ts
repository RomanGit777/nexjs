import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().required().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/),
    price: Joi.number().required().max(1000000).min(0),
    year: Joi.number().required().max(2025).min(1990)
})
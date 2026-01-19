import {createCarAction} from "@/app/create/actions";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";

interface IFormProps {
    brand: string;
    price: number;
    year: number;
}

export const CreateCarComponent = () => {

    const {handleSubmit, register, formState: {errors}} = useForm<IFormProps>({mode: "all", resolver: joiResolver(carValidator)});

    const customHandler = (formDataProps: IFormProps) => {
        createCarAction(formDataProps)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                <input type="text" {...register('brand')} placeholder={'Enter brand'}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label>
                <input type="number" {...register('price')} placeholder={'Enter price'}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                <input type="number" {...register('year')} placeholder={'Enter year'}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>

                <button type={'submit'}>submit</button>
            </form>
        </div>
    );
};
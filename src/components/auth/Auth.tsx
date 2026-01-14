import { useForm } from "react-hook-form";

type IFormProps = {
    login: string;
    password: string;
};

export const Auth = () => {
    const {handleSubmit, register} = useForm<IFormProps>();

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <input type="text" {...register('login')} placeholder={'Enter your login'}/>
            <input type="password" {...register('password')} placeholder={'Enter your password'}/>
            <button name={'submit'}>sumbit</button>
        </form>
    );
};
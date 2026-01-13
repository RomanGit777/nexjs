import Form from "next/form";
import {createCar} from "@/app/create/serverActions";

export const CreateCarComponent = () => {
    return (
        <Form action={createCar}>
            <input type="text" name={"brand"} placeholder={'Enter brand'}/>
            <input type="number" name={"price"} placeholder={'Enter price'}/>
            <input type="number" name={"year"} placeholder={'Enter year'}/>
            <button type={'submit'}>submit</button>
        </Form>
    );
};
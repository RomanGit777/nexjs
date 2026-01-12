 'use server';

import sql from 'better-sqlite3'
import {revalidatePath} from "next/cache";

const db = sql('meals.db')

export const saveMeal = async (FormData: FormData) => {
    // console.log("save action")
    // console.log(FormData);

    const titleValue = FormData.get('title');
    db.prepare(`insert into meals(title) values (?)`)
        .run(titleValue)

    revalidatePath('/')
};
type Meal = { title: string, id: number };
export const getMeals = async (): Promise<Meal[]> => {
    return db.prepare<Meal[]>(`select * from meals`).all() as Meal[];
}
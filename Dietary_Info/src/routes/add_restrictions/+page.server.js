import Database from 'better-sqlite3';

const database = new Database('src/routes/users_db/users.db');

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const email = data.get("email");
        const food_name = data.get("food_name");
        const allergy_name = data.get("allergy_name");

        database.prepare("INSERT INTO Users u WHERE u.email = email").run(email, food_name, allergy_name);
    }
}
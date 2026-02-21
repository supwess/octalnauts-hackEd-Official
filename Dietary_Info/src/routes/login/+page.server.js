import Database from 'better-sqlite3';
import {fail, redirect} from '@sveltejs/kit';

const db = new Database('src/routes/users_db/users.db');

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get("email");
        const password = data.get("password");

        const user = db.prepare("SELECT * FROM Users WHERE email = ? AND password = ?").get(email, password);

        if(user){
            redirect(302, "/home");
        }else{
            return fail(400, {error: "Invalid email or password"});
        }
    }
}
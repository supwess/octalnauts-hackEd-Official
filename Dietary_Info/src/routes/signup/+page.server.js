import Database from 'better-sqlite3';
import {fail, redirect} from '@sveltejs/kit';

const database = new Database('src/routes/users_db/users.db');

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");

        const email_exists = database.prepare("SELECT * FROM Users WHERE email = ?").get(email);
        if(email_exists){
            return fail(400, {error: "Email already in use"});
        }
        const username_exists = database.prepare("SELECT * FROM Users WHERE username = ?").get(username);
        if(username_exists){
            return fail(400, {error: "Username already in use"});
        }

        database.prepare("INSERT INTO Users (username, email, password) VALUES (?, ?, ? )").run(username, email, password);

        redirect(302, "/dashboard");
    }
}
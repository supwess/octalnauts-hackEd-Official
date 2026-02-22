import Database from 'better-sqlite3';
import {fail, redirect} from '@sveltejs/kit';

const database = new Database('src/routes/users_db/users.db');

export const actions = {
    default: async ({request, cookies}) => {
        const data = await request.formData();
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");

        const user = database.prepare("SELECT * FROM Users WHERE (email = ? OR username = ?) AND password = ?").get(email, username, password);

        if(user){
            cookies.set('user_id', user.user_id, { path: '/' });
            redirect(302, "/dashboard");
        }else{
            return fail(400, {error: "Invalid email or password"});
        }
    }
}
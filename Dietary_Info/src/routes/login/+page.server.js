import Database from 'better-sqlite3';
import { verify } from '@node-rs/argon2';
import { fail, redirect } from '@sveltejs/kit';

const database = new Database('src/routes/users_db/users.db');

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const identifier = data.get("username"); // this field can be email OR username
		const password = data.get("password");

		// Determine whether identifier is email or username
		const isEmail = identifier.includes('@');

		const user = isEmail
			? database.prepare("SELECT * FROM Users WHERE email = ?").get(identifier)
			: database.prepare("SELECT * FROM Users WHERE username = ?").get(identifier);

		if (!user) {
			return fail(400, { error: "Invalid email or password" });
		}

		// Verify Argon2id hash
		const ok = await verify(user.password, password);

		if (!ok) {
			return fail(400, { error: "Invalid email or password" });
		}

		// Set session cookie
		cookies.set('user_id', user.user_id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false // set to true in production
		});

		throw redirect(302, "/dashboard");
	}
};

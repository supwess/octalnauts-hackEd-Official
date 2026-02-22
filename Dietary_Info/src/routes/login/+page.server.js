import Database from 'better-sqlite3';
import { verify } from '@node-rs/argon2';
import { fail, redirect } from '@sveltejs/kit';

const database = new Database('Database/identifier.sqlite');

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const identifier = data.get("username")?.trim();
		const password = data.get("password");

		// Basic validation
		if (!identifier || !password) {
			return fail(400, { error: "Please enter both username/email and password" });
		}

		// Determine whether identifier is email or username
		const isEmail = identifier.includes('@');

		const user = isEmail
			? database.prepare("SELECT * FROM users WHERE email = ?").get(identifier)
			: database.prepare("SELECT * FROM users WHERE username = ?").get(identifier);

		if (!user) {
			return fail(400, { error: "Invalid email or password" });
		}

		// IMPORTANT: use the correct column name
		const storedHash = user.password_hash ?? user.password;

		if (!storedHash) {
			console.error("User record missing password hash:", user);
			return fail(500, { error: "Server error: missing password hash" });
		}

		// Verify Argon2id hash
		let ok = false;
		try {
			ok = await verify(storedHash, password);
		} catch (err) {
			console.error("Argon2 verify error:", err);
			return fail(400, { error: "Invalid email or password" });
		}

		if (!ok) {
			return fail(400, { error: "Invalid email or password" });
		}

		// Set session cookie
		cookies.set('user_id', user.public_id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false
		});

		throw redirect(302, "/dashboard");
	}
};

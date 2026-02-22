import Database from 'better-sqlite3';
import { hash } from '@node-rs/argon2';
import { fail, redirect } from '@sveltejs/kit';
import { randomUUID } from 'crypto';

const database = new Database('Database/identifier.sqlite');

export const actions = {
	default: async ({ request }) => {
		const public_id = randomUUID();
		const data = await request.formData();
		const username = data.get("username");
		let email = data.get("email");
		const password = data.get("password");

		email = email.toLowerCase();

		// Check duplicates
		const email_exists = database.prepare("SELECT * FROM users WHERE email = ?").get(email);
		if (email_exists) return fail(400, { error: "Email already in use" });

		const username_exists = database.prepare("SELECT * FROM users WHERE username = ?").get(username);
		if (username_exists) return fail(400, { error: "Username already in use" });

		// Hash password with Argon2id
		const hashed = await hash(password, {
			memoryCost: 19456,
			timeCost: 2,
			parallelism: 1,
			hashLength: 32,
			type: 2
		});

		database
			.prepare("INSERT INTO users (username, email, password_hash, public_id) VALUES (?, ?, ?, ?)")
			.run(username, email, hashed, public_id);

		throw redirect(302, "/login");
	}
};

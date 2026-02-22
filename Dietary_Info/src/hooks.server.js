// src/hooks.server.js
import Database from 'better-sqlite3';
import { redirect } from '@sveltejs/kit';

const database = new Database('Database/identifier.sqlite');

export const handle = async ({ event, resolve }) => {
	const session = event.cookies.get("user_id");

	// If no cookie → user not logged in
	if (!session) {
		if (event.url.pathname.startsWith("/dashboard")) {
			return redirect(302, "/home")  // redirect to HOME
		}
		return resolve(event);
	}

	// Validate cookie against DB
	const user = database
		.prepare("SELECT * FROM users WHERE public_id = ?")
		.get(session);

	// If cookie invalid → delete it + redirect
	if (!user) {
		event.cookies.delete("user_id", { path: "/" });

		if (event.url.pathname.startsWith("/dashboard")) {
			return redirect(302, "/home")  // redirect to HOME
		}

		return resolve(event);
	}

	// Attach user to locals for use in load functions
	event.locals.user = user;

	return resolve(event);
};

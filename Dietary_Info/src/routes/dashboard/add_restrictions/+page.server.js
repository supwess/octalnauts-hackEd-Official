import Database from 'better-sqlite3';

const database = new Database('Database/identifier.sqlite');

export const actions = {
	save_allergy: async ({ request, cookies }) => {
		const data = await request.formData();
		const user_id = cookies.get("user_id");
		const allergy_name = String(data.get("allergy_name") ?? "").trim().toLowerCase();

		// Validate login
		if (!user_id) {
			return { status: 401, body: { error: "Not logged in" } };
		}

		// Validate input
		if (!allergy_name || allergy_name.length < 2) {
			return { status: 400, body: { error: "Invalid allergy name" } };
		}

		// Add allergy if not exists
		database.prepare(`
            INSERT OR IGNORE INTO Allergens (allergy_name)
            VALUES (?)
        `).run(allergy_name);

		// Get allergy ID
		const allergy = database
			.prepare("SELECT allergy_id FROM Allergens WHERE allergy_name = ?")
			.get(allergy_name);

		if (!allergy) {
			return { status: 500, body: { error: "Failed to save allergy" } };
		}

		// Link user to allergy (prevent duplicates)
		database.prepare(`
            INSERT OR IGNORE INTO User_Allergies (user_id, allergy_id)
            VALUES (?, ?)
        `).run(user_id, allergy.allergy_id);

		return { success: true };
	},

	save_calorie_goal: async ({ request, cookies }) => {
		const data = await request.formData();
		const user_id = cookies.get("user_id");
		const daily_calorie_goal = Number(data.get("daily_calorie_goal"));

		// Validate login
		if (!user_id) {
			return { status: 401, body: { error: "Not logged in" } };
		}

		// Validate input
		if (!daily_calorie_goal || daily_calorie_goal < 500 || daily_calorie_goal > 10000) {
			return { status: 400, body: { error: "Calorie goal must be between 500 and 10,000" } };
		}

		// Save or update goal
		database.prepare(`
            INSERT INTO NutritionGoals (user_id, daily_calorie_goal)
            VALUES (?, ?)
            ON CONFLICT(user_id) DO UPDATE SET daily_calorie_goal = excluded.daily_calorie_goal
        `).run(user_id, daily_calorie_goal);

		return { success: true };
	}
};

import Database from 'better-sqlite3';

const database = new Database('src/routes/users_db/users.db');

export const actions = {
    /*save_food: async ({request, cookies}) => {
        const data = await request.formData();
        const user_id = cookies.get("user_id");
        const food_name = data.get("food_name");

        database.prepare("INSERT INTO Products (food_name, serving_size_g, calories) VALUES (?, 0, 0)").run(food_name);
        database.prepare("INSERT INTO Users u WHERE u.email = email").run(food_name);
    },*/

    save_allergy: async ({request, cookies}) => {
        const data = await request.formData();
        const user_id = cookies.get("user_id");
        const allergy_name = data.get("allergy_name");

        //add a new food
        database.prepare("INSERT OR IGNORE INTO Allergens (allergy_name) VALUES (?)").run(allergy_name);
        
        //link to user
        const allergy = database.prepare("SELECT allergy_id FROM Allergens WHERE allergy_name = ?").get(allergy_name);
        database.prepare("INSERT INTO User_Allergies (user_id, allergy_id) VALUES (?, ?)").run(user_id, allergy.allergy_id);
    },

    save_calorie_goal: async ({request, cookies}) => {
        const data = await request.formData();
        const user_id = cookies.get("user_id");
        const daily_calorie_goal = data.get("daily_calorie_goal");;

        database.prepare("INSERT OR REPLACE INTO NutritionGoals (user_id, daily_calorie_goal) VALUES (?, ?)").run(user_id, daily_calorie_goal);
    }
}
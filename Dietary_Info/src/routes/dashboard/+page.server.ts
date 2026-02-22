import Database from 'better-sqlite3';
import path from 'path';

export async function load() {
  const db = new Database(path.resolve(process.cwd(), 'src/routes/users_db/users.db'));

  const today = new Date().toISOString().split('T')[0];
  const userId = 1;

  const calories = db.prepare(`
    SELECT COALESCE(SUM(p.calories * (dl.servings_consumed / p.serving_size_g)), 0) as total_calories
    FROM DailyLog dl
    JOIN Products p ON dl.food_id = p.food_id
    WHERE dl.user_id = ? AND dl.date = ?
  `).get(userId, today) as { total_calories: number };

  const goal = db.prepare(`
    SELECT daily_calorie_goal
    FROM NutritionGoals
    WHERE user_id = ?
  `).get(userId) as { daily_calorie_goal: number };

  db.close();

  const consumed = Math.round(calories.total_calories);
  const target = goal?.daily_calorie_goal ?? 2000;
  const progress = Math.min(Math.round((consumed / target) * 100), 100);

  return { consumed, target, progress };
}
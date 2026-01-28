"use server";

import { settingsSchema } from "./settingSchema";

export async function saveSettings(data: unknown) {
  const parsed = settingsSchema.safeParse(data);

  if (!parsed.success) {
    console.log("❌ Validation Error:", parsed.error.format());
    return;
  }

  console.log("✅ SETTINGS DATA (SERVER):", parsed.data);
}

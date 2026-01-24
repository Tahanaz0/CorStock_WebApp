import { z } from "zod";

export const settingsSchema = z.object({
  // Theme
  theme: z.string(),

  // Interface
  interfaceDensity: z.string(),
  tableRowHeight: z.string(),
  sidebarBehaviour: z.string(),

  // Localization
  language: z.string(),
  numberFormat: z.string(),
  dateFormat: z.string(),

  // Notifications
  emailNotifications: z.array(z.string()),
  pushNotifications: z.array(z.string()),
  inAppAlerts: z.array(z.string()),
});

export type SettingsSchemaType = z.infer<typeof settingsSchema>;

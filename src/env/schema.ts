import {z} from "zod";

export const serverSchema = z.object({
    AUTH_SECRET: z.string(),
    AZURE_AD_CLIENT_SECRET: z.string(),
    AZURE_AD_CLIENT_ID: z.string(),
    AZURE_AD_TENANT_ID: z.string(),
})
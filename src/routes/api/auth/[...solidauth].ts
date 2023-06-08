// import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start";
// import AzureADProvider from "@auth/core/providers/azure-ad";
// import { Provider } from "@auth/core/providers";
// import { serverEnv } from "~/env/server";
//
// export const authOpts: SolidAuthConfig = {
//   providers: [
//     AzureADProvider({
//       clientId: serverEnv.AZURE_AD_CLIENT_ID,
//       clientSecret: serverEnv.AZURE_AD_CLIENT_SECRET,
//       tenantId: serverEnv.AZURE_AD_TENANT_ID,
//     }),
//   ] as Provider[],
//   secret: serverEnv.AUTH_SECRET,
//   debug: false,
// };
//
// export const { GET, POST } = SolidAuth(authOpts);

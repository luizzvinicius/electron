/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_DEV_SERVER_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
isCorsOriginAllowed = ["http://localhost:3000"];
CORS_ALLOWED_ORIGINS = ["http://localhost:3000"];
crossOriginIsolated = false
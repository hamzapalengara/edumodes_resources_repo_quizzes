/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORKSHEET_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

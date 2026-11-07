interface ImportMetaEnv {
  /** Server-only (build time). GitHub fine-grained token for the contribution graph. */
  readonly GITHUB_TOKEN?: string;
  /** Public. Your GoatCounter site code, e.g. "romyr" for romyr.goatcounter.com */
  readonly PUBLIC_GOATCOUNTER_CODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

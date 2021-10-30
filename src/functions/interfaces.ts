export interface Route {
  path: string;
  cb: () => void;
}
export interface RouterOptions {
  root?: string;
}

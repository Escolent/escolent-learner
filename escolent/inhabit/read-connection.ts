export interface ReadConnection {
  read(): Promise<{ bodyText: string }>;
}

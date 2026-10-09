export interface SmsProvider {
  send(phoneE164: string, code: string): Promise<void>;
}

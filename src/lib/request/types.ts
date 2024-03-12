export interface RequestOptions extends Omit<RequestInit, 'method' | 'body'> {
  body: any;
}

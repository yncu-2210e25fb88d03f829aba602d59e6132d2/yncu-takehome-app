export interface DefaultResponse {
  status: number; // HTTP status code
  json: {
    data?: any;
    message?: string; // Associated support message
  };
}

export type Click<REQ = unknown, RES = any> = (prop?: REQ) => RES;
export type OnClick<Request = unknown, Response = unknown> = (
  prop?: Request
) => Response | ((prop?: Request) => Promise<Response>);

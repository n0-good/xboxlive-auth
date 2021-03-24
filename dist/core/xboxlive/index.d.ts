import { XBLDummyDeviceTokenResponse, XBLExchangeRpsTicketResponse, XBLExchangeTokensOptions, XBLExchangeTokensResponse, XBLTokens, Proxy } from '../..';
export declare const exchangeRpsTicketForUserToken: (rpsTicket: string, preamble?: 'd' | 't', additionalHeaders?: Record<string, string>, proxy?: Proxy | undefined) => Promise<XBLExchangeRpsTicketResponse>;
export declare const exchangeTokensForXSTSToken: (tokens: XBLTokens, options?: XBLExchangeTokensOptions, additionalHeaders?: Record<string, string>, proxy?: Proxy | undefined) => Promise<XBLExchangeTokensResponse>;
export declare const exchangeTokenForXSTSToken: (userToken: string, options?: XBLExchangeTokensOptions, additionalHeaders?: Record<string, string>) => Promise<XBLExchangeTokensResponse>;
export declare const EXPERIMENTAL_createDummyWin32DeviceToken: () => Promise<XBLDummyDeviceTokenResponse>;

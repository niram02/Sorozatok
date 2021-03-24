/// <reference types="node" />
import http from "http";
export default class Content {
    static content(req: http.IncomingMessage, res: http.ServerResponse): void;
}

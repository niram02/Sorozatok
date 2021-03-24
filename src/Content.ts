import fs from "fs";
import http from "http";
import url from "url";
import Megoldas from "./Megoldas";

export default class Content {
  public static content(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): void {
    // favicon.ico kérés kiszolgálása:
    if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      fs.createReadStream("favicon.ico").pipe(res);
      return;
    }
    // Weboldal inicializálása + head rész:
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<!DOCTYPE html>");
    res.write("<html lang='hu'>");
    res.write("<head>");
    res.write(
      "<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>"
    );
    res.write(
      "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    );
    res.write("<title>Jedlik Ts Template</title>");
    res.write("</head>");
    res.write("<body><form><pre>");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const params = new url.URL(req.url as string, `http://${req.headers.host}/`)
      .searchParams;

    // Kezd a kódolást innen -->

    let m: Megoldas;
    try {
      m = new Megoldas("musor.txt");
    } catch (error) {
      res.write("Hiba a fájl beolvasásakor!\n");
      res.write(`Hibaüzenet: ${(error as Error).message}\n`);
      res.write("</pre></form>");
      res.write("</body></html>");
      res.end();
      return;
    }

    res.write(`Kiiratás${m.Musorokszama}`);

    // <---- Fejezd be a kódolást

    res.write("</pre></form>");
    res.write("</body></html>");
    res.end();
  }
}

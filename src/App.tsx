import { Card } from "./Card";
import { Footer } from "./Footer";
import "./App.css";

type Props = {
  ip: string;
  city: string | null;
  isCold: boolean;
};
export function App({ ip, city, isCold }: Props) {
  return (
    <div>
      <div style={{ height: "100%" }}>
        <Card />

        <main>
          <h1>
            <span>Hello from the edge!</span>
          </h1>

          <div class="info">
            <div class="block">
              <div class="contents">
                <span>Your city</span>
                <strong
                  title={
                    city === null
                      ? "GeoIP information could not be derived from your IP"
                      : undefined
                  }
                  class={city === null ? "na" : undefined}
                >
                  {city === null ? "N/A" : city}
                </strong>
              </div>
            </div>

            <div class="block">
              <div class="contents">
                <span>Your IP address</span>
                <strong>{ip}</strong>
              </div>
            </div>
          </div>
        </main>
        <div class="debug">
          Generated at {new Date().toISOString()} ({isCold ? "cold" : "hot"})
        </div>
      </div>

      <Footer />
    </div>
  );
}

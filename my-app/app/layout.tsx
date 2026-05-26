import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "NexusAuth",
  description: "Google SSO Authentication App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
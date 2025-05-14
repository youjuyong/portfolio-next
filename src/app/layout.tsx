import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "YJY 포토폴리오",
  description: "YOU JUYONG 유주용의 포토폴리오 입니다.",
};

export const viewport : Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children, }: any) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

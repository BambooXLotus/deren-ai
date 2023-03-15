import Sidebar from "~/components/Sidebar";
import "~/styles/globals.css";

export const metadata = {
  title: "Deren - ChatGPT",
  description: "Deren ChatGPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="h-screen max-w-xs overflow-y-auto bg-gray-900 md:min-w-[20rem]">
            <Sidebar />
          </div>
          <div className="flex-1 bg-gray-700">{children}</div>
        </div>
      </body>
    </html>
  );
}

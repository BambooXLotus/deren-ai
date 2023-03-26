// "use client";

// import "~/styles/globals.css";

// import { getServerSession } from "next-auth";
// import SessionWrapper from "~/components/SessionWrapper";
// import Sidebar from "~/components/Sidebar";
// import { authOptions } from "~/server/auth";
// import TrpcWrapper from "~/components/TrpcWrapper";

// export const metadata = {
//   title: "Deren - ChatGPT",
//   description: "Deren ChatGPT",
// };

// export async function RootLayout({ children }: { children: React.ReactNode }) {
//   const session = await getServerSession(authOptions);

//   return (
//     <html lang="en">
//       <body>
//         <TrpcWrapper>
//           <SessionWrapper session={session}>
//             <div className="flex">
//               <div className="h-screen max-w-xs overflow-y-auto bg-gray-900 md:min-w-[20rem]">
//                 <Sidebar />
//               </div>
//               <div className="flex-1 bg-gray-800">{children}</div>
//             </div>
//           </SessionWrapper>
//         </TrpcWrapper>
//       </body>
//     </html>
//   );
// }

// export default RootLayout;


'use client';

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;

// 'use client';

// import { SessionProvider } from "next-auth/react";

// const Provider = ({children}) => {
//   return (
//     <SessionProvider >
//       {children}
//     </SessionProvider>
//   )
// }

// export default 
import { createContext, useEffect, useState } from "react";

const PageContext = createContext()



function PageContextProvider({ children }) {
  // You can add state and functions here to manage page context if needed
  const [state, setState] = useState({});
  useEffect(() => {

    // This effect can be used to initialize or fetch data when the context is mounted
    // For example, you could fetch user data or settings here
  }), []
  return (
    <PageContext.Provider value={{}}>
      {children}
    </PageContext.Provider>
  )
}

export { PageContext, PageContextProvider };
import React, { useState } from "react";

const PageContext = React.createContext({});

export const PageContextProvider = (props) => {
  const [page, setPage] = useState("");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContext;

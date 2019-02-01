import * as React from "react";

const useSetTitle = (title: string) => {
  React.useEffect(() => {
    document.title = `₿ - ${title}`;
  }, []);
};

export default useSetTitle;

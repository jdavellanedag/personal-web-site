import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useScroll = () => {
  const { state } = useContext(AppContext);

  const scrollToDiv = (divName: string) => {
    const div = state.refs.find((ref) => ref.name === divName);
    if (div?.ref.current) {
      div.ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    scrollToDiv,
  };
};

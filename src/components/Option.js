import useResponsiveFontSize from "./useResponsiveFontSize";
import { useMemo } from "react";
export const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize,
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        },
        hidePostalCode: true
      }),
  
      [fontSize]
    );
  
    return options;
  };
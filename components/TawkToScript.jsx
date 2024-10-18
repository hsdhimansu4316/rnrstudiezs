// components/TawkToScript.js
"use client";
import { useEffect } from "react";

const TawkToScript = () => {
  useEffect(() => {
    // Make sure the Tawk_API variable is initialized in the global scope
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/66139f711ec1082f04dfe8b2/1hquadlaq';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Optional cleanup in case you need to remove the script
    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // The component does not render any UI
};

export default TawkToScript;

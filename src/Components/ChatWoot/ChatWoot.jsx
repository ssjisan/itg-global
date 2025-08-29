import { useEffect } from "react";

const ChatwootWidget = () => {
  useEffect(() => {
    const BASE_URL = "https://app.chatwoot.com";

    // Check if the script is already loaded
    if (!document.getElementById("chatwoot-script")) {
      const script = document.createElement("script");
      script.id = "chatwoot-script";
      script.src = `${BASE_URL}/packs/js/sdk.js`;
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          if (window.chatwootSDK) {
            window.chatwootSDK.run({
              websiteToken: "iXf4W5dEm6YQErqc6UdDXEtT",
              baseUrl: BASE_URL,
            });
          }
        }, 100); // 100ms delay
      };

      document.body.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ChatwootWidget;
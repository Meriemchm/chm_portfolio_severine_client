import React, { useEffect } from "react";
import axios from "axios";

const RedirectPage = () => {

    const VOTRE_CLIENT_ID =  "SYsNVnCZQvabtqQXTzZjQ"
    const VOTRE_CLIENT_SECRET = "Jm62tugRngiYsBxQn9qK59nZ1f33AS53"
    const VOTRE_URL_DE_REDIRECT = "http://localhost:5173/Rendez-vous"
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    axios
      .post(
        `https://zoom.us/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=${VOTRE_URL_DE_REDIRECT}`,
        {},
        {
          headers: {
            Authorization:
            `Basic Base64( ${VOTRE_CLIENT_ID}:${VOTRE_CLIENT_SECRET })`,
          },
        }
      )
      .then((response) => {
        const accessToken = response.data.access_token;
        // Utilisez l'accessToken pour les futures requêtes à l'API Zoom
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>Redirection en cours...</div>;
};

export default RedirectPage;

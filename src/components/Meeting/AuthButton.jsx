import React from 'react';

const AuthButton = () => {
    const VOTRE_CLIENT_ID =  "SYsNVnCZQvabtqQXTzZjQ"
    const VOTRE_URL_DE_REDIRECT = "http://localhost:5173/Rendez-vous"
  const handleClick = () => {
    window.location.href = `https://zoom.us/oauth/authorize?response_type=code&client_id=${VOTRE_CLIENT_ID}&redirect_uri=${VOTRE_URL_DE_REDIRECT}`;
  };

  return <button onClick={handleClick}>Se Connecter avec Zoom</button>;
};

export default AuthButton;

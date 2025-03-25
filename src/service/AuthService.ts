import axios from "axios";

// Set the base API URL
const API_URL = "http://localhost:8000"; // Update if backend runs on a different port

// Define user data types for login and register
interface UserCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials extends UserCredentials {
  name: string;
  password_confirmation: string;
}

// Get CSRF Token from cookies (if it's set)
const getCsrfToken = (): string | null => {
  const tokenMatch = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
  return tokenMatch ? tokenMatch[1] : null;
};

// Register user
export const register = async (userData: RegisterCredentials) => {
  const csrfToken = getCsrfToken(); // Retrieve the CSRF token

  // Make the request with CSRF token in the headers
  return axios.post(`${API_URL}/register`, userData, {
    headers: {
      'X-XSRF-TOKEN': csrfToken, // Include CSRF token in the request header
    }
  });
};

// Login user
export const login = async (userData: UserCredentials) => {
  const csrfToken = getCsrfToken(); // Retrieve the CSRF token

  // Make the request with CSRF token in the headers
  const response = await axios.post(`${API_URL}/login`, userData, {
    headers: {
      'X-XSRF-TOKEN': csrfToken, // Include CSRF token in the request header
    }
  });

  // Extract token and user data, store them in localStorage
  const { token, user } = response.data;
  localStorage.setItem("token", token);
  localStorage.setItem("role", user.role); // Store the role

  return response;
};

// Get authenticated user
export const getUser = async (token: string) => {
  return axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Logout user
// Logout user
export const logout = async (token: string) => {
  const csrfToken = getCsrfToken(); // Récupérer le token CSRF

  try {
    // Faire la requête de déconnexion avec le token CSRF
    await axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-XSRF-TOKEN": csrfToken, // Inclure le token CSRF dans l'en-tête
        },
      }
    );



    // Recharger la page ou rediriger l'utilisateur vers la page de connexion
    window.location.href = "/login"; // Redirection vers la page de connexion
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
  }
};

export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    option: {
      method: "POST",
      hearders: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + "/api/user",
    option: {
      method: "GET",
      hearders: {
        Authorization: "Bearer" + token,
      },
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    option: {
      method: "POST",
      hearders: {
        Authorization: "Bearer" + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + "/api/user",
    option: {
      method: "POST",
      hearders: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

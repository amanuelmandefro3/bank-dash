import Cookies from "js-cookie";
const API_BASE_URL = "https://bank-dash-36iy.onrender.com";
const token = Cookies.get("accessToken");

// GET /bank-services/{id}
export const getBankServiceById = async (id: any) => {
  const response = await fetch(`${API_BASE_URL}/bank-services/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
// PUT /bank-services/{id}
export const updateBankServiceById = async (
  id: string,
  updateData: {
    id: string;
    updateData: any;
  }
) => {
  const response = await fetch(`${API_BASE_URL}/bank-services/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  return response.json();
};

// DELETE /bank-services/{id}
export const deleteBankServiceById = async (id: any) => {
  const response = await fetch(`${API_BASE_URL}/bank-services/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

// GET /bank-services
export const getAllBankServices = async (page: any, size: any) => {
  const response = await fetch(
    `${API_BASE_URL}/bank-services?page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
};

// POST /bank-services
export const createBankService = async (serviceData: any) => {
  const response = await fetch(`${API_BASE_URL}/bank-services`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serviceData),
  });
  return response.json();
};

// GET /bank-services/search
export const searchBankServices = async (queryParams: any) => {
  const query = new URLSearchParams(queryParams).toString();
  const response = await fetch(
    `${API_BASE_URL}/bank-services/search?${query}`,
    {
      method: "GET",
    }
  );
  return response.json();
};

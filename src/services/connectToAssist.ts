// Logic for backend to frontend interface here. 
// Import axios
import axios from "axios";

// Set up basic base url. This will change later
const BASE_ASSIST_URL = "http://localhost:5000"; 

// Set up interface for expected response structure.
interface ApiResponse {
  success: boolean;
  data: any;
  message?: string;
}

// Await function to get response from assist endpoint.
export const fetchAssistResponse = async (endpoint: string, payload: object): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${BASE_ASSIST_URL}/${endpoint}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;

// Return error if things go wrong.
  } catch (error: any) {
    console.error("Error sending request. Review logs here: ", error);
    return { success: false, data: null, message: error.message };
  }
};

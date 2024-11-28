import axios from "axios";

export const fetchDummyData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
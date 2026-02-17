import axios from "axios";

const API_URL = "http://localhost:3000";

export const updateEmoji = async (postId: string, emoji: string) => {
  const response = await axios.put(
    `${API_URL}/posts/${postId}`,
    { emoji }
  );

  return response.data;
};

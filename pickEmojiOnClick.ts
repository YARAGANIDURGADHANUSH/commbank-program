import { updateEmoji } from "./client";

export const pickEmojiOnClick = async (
  postId: string,
  emoji: string
) => {
  try {
    const updatedPost = await updateEmoji(postId, emoji);
    console.log("Emoji updated:", updatedPost);
    return updatedPost;
  } catch (error) {
    console.error("Error updating emoji", error);
    throw error;
  }
};

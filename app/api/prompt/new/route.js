import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const {  prompt, tag, userEmail  } = await request.json();

  try {
    await connectToDB();
    const userId =  await User.findOne({ email: userEmail})
    // console.log(userId)
    const newPrompt = await Prompt.create({
      creator: userId._id,
      prompt,
      tag,
    });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server")

const LoadDB = async () => {
  await ConnectDB();
}

LoadDB();

// API Endpoint to get all blogs
export async function GET(request) {
  try {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json(blog);
    }
    else {
      const blogs = await BlogModel.find({});
      return NextResponse.json({ blogs })
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// API Endpoint For Uploading Blogs
export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // For now, we'll just use the image URL directly
    const imageUrl = formData.get('image');
    
    const blogData = {
      title: formData.get('title'),
      description: formData.get('description'),
      category: formData.get('category'),
      author: formData.get('author'),
      image: imageUrl,
      authorImg: formData.get('authorImg')
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Blog Added" })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// API Endpoint to delete Blog
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({ msg: "Blog Deleted" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const referenceImage = formData.get("referenceImage") as File | null;

    // Validate required fields
    if (!title || !description || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send an email using EmailJS, SendGrid, or Nodemailer
    // 2. Store the request in a database
    // 3. Upload the image to cloud storage (S3, Cloudinary, etc.)
    
    // For now, we'll log the request and return success
    console.log("New print request received:");
    console.log({
      title,
      description,
      name,
      email,
      hasReferenceImage: !!referenceImage,
    });

    // Example: Here's where you would integrate with EmailJS
    // const emailData = {
    //   service_id: process.env.EMAILJS_SERVICE_ID,
    //   template_id: process.env.EMAILJS_TEMPLATE_ID,
    //   user_id: process.env.EMAILJS_PUBLIC_KEY,
    //   template_params: {
    //     to_email: process.env.RECIPIENT_EMAIL,
    //     from_name: name,
    //     from_email: email,
    //     title: title,
    //     description: description,
    //   },
    // };

    // Example: Here's where you would send the email
    // await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailData),
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Request submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

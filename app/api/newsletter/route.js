import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "HUSSAFA BOUTIQUE <onboarding@resend.dev>",
      to: ["umairaabdullah2018@gmail.com"],
      subject: "New HUSSAFA BOUTIQUE Newsletter Subscriber",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Newsletter Subscriber</h2>
          <p>A new visitor subscribed to the HUSSAFA BOUTIQUE newsletter.</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

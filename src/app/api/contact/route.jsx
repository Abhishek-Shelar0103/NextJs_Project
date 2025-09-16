import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const contact = await Contact.create(body);

    return new Response(JSON.stringify(contact), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

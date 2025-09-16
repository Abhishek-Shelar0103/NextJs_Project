import dbConnect from "@/lib/dbConnect";
import Event from "@/models/Event";

// POST - Create Event Booking
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const event = await Event.create(body);

    return new Response(JSON.stringify(event), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// GET - Fetch All Events
export async function GET() {
  try {
    await dbConnect();
    const events = await Event.find().sort({ createdAt: -1 });

    return new Response(JSON.stringify(events), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

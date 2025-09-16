import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newBooking = await User.create(body);

    return new Response(
      JSON.stringify({
        message: "Table Book successfully!",
        book: newBooking,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
export async function GET() {
  try {
    await connectDB();
    const tables = await User.find({}); 

    return new Response(JSON.stringify(tables), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

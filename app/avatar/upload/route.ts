import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const searchParams = new URL(request.url).searchParams;
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
  }

  const requestBody = request.body;
  if (!requestBody) {
    return NextResponse.json({ error: 'Request body is required' }, { status: 400 });
  }

  // The below code is for App Router Route Handlers only
  const blob = await put(filename, requestBody, {
    access: 'public',
  });

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // });

  return NextResponse.json(blob);
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

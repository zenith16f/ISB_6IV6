import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Hello word");
}

import { HttpStatusCode } from 'axios';
import { NextResponse } from 'next/server';
import { ErrorType } from '../types';

export function errorResponse(message: string, status: HttpStatusCode): NextResponse<ErrorType> {
  return NextResponse.json({ message }, { status });
}

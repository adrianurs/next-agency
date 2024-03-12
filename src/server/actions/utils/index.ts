import { NextResponse } from 'next/server';
import { ErrorType } from '../types';

export function errorResponse(message: string, status: number): NextResponse<ErrorType> {
  return NextResponse.json({ message }, { status });
}

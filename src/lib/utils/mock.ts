export async function mockQuery<T>(
  expectedData: T,
  options?: { delay?: number; shouldThrowError?: boolean }
): Promise<{ data: T }> {
  const delay = options?.delay || 500;
  return await new Promise((res, rej) => {
    setTimeout(() => {
      if (options?.shouldThrowError) rej(new Error('Failed!'));
      res({ data: expectedData });
    }, delay);
  });
}

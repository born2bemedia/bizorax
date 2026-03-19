const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.warn('[recaptcha] RECAPTCHA_SECRET_KEY is not set — skipping verification');
    return true;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });

    const data = (await response.json()) as { success: boolean; score?: number };
    console.log('[recaptcha] Verification result:', { success: data.success, score: data.score });

    return data.success;
  } catch (error) {
    console.error('[recaptcha] Verification error:', error);
    return false;
  }
}

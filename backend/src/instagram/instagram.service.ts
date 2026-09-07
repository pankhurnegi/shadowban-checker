import { Injectable } from '@nestjs/common';

@Injectable()
export class InstagramService {
  connect() {
    return {
      message: 'Instagram connection flow should be configured with the official Meta OAuth flow.',
      redirect: '/api/instagram/callback',
      status: 'pending_integration',
    };
  }

  checkUsername(username: string) {
    const normalized = username.trim().replace(/^@/, '').toLowerCase();
    const valid = /^[a-z0-9._]{1,30}$/.test(normalized);

    if (!valid) {
      return {
        valid: false,
        message: 'Please enter a valid Instagram username.',
      };
    }

    return {
      valid: true,
      username: normalized,
      requiresAuthorization: true,
      message: 'Username accepted. Instagram Professional account authorization is required to access insights.',
    };
  }
}

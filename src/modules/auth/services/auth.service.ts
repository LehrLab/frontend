import { httpFactoryService } from '../../../shared/services/http-factory.service';
import { HttpService } from '../../../shared/services/http.service';
import { AuthGoogleResponse, GoogleTokenType } from '../types/google.types';

import { LoginRequest, LoginResponse } from '../types/login.types';
import { LogoutRequest, LogoutResponse } from '../types/logout.types';
import { RegistrationRequest, RegistrationResponse } from '../types/registration.types';

class AuthService {
  constructor(private readonly httpService: HttpService) {
    this.httpService = httpService;
  }

  public async registrate(userData: RegistrationRequest): Promise<RegistrationResponse> {
    return this.httpService.post<RegistrationResponse, RegistrationRequest>('backend.com/api/v1/auth/registration/', userData);
  }

  public async login(userData: LoginRequest): Promise<LoginResponse> {
    return this.httpService.post<LoginResponse, LoginRequest>('backend.com/api/v1/auth/login/', userData);
  }

  public async signInViaGoogle(googleJWT: GoogleTokenType): Promise<AuthGoogleResponse> {
    if (googleJWT === undefined) {
      console.error('There is no google jwt from request to google app.');

      throw new Error('Missing Google JWT');
    }

    const data = { credential: googleJWT };
    
    return this.httpService.post<AuthGoogleResponse, { credential: string }>(`auth/google/`, data);
  }

  public async logout(data: LogoutRequest): Promise<LogoutResponse> {
    return this.httpService.post<LogoutResponse, LogoutRequest>('backend.com/api/v1/auth/logout/', data);
  }
}

export const authService = new AuthService(httpFactoryService.createHttpService());

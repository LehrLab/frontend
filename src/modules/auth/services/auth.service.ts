import { httpFactoryService } from '../../../shared/services/http-factory.service';
import { HttpService } from '../../../shared/services/http.service';
import { LoginRequest, LoginResponse } from '../types/login.types';
import { RegistrationRequest, RegistrationResponse } from '../types/registration.types';

class AuthService {
  constructor(private readonly httpService: HttpService) {
    this.httpService = httpService;
  }

  public async registrate(userData: RegistrationRequest) {
    return this.httpService.post<RegistrationResponse, RegistrationRequest>('backend.com/api/v1/auth/registration/', userData);
  }

  public async login(userData: LoginRequest) {
    return this.httpService.post<LoginResponse, LoginRequest>('backend.com/api/v1/auth/login/', userData);
  }
}

export const authService = new AuthService(httpFactoryService.createHttpService());

import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) { }

  async validateUser({ email, password }: SigninDto): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === password) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
}

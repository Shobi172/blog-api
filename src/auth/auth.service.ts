import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    @InjectModel('User') private readonly userModel: Model<any>,
  ) {}

  async handleGoogleLogin(user: any): Promise<any> {
    let existingUser = await this.userModel.findOne({
      googleId: user.googleId,
    });

    if (!existingUser) {
      existingUser = await this.userModel.create({
        email: user.email,
        name: user.name,
        googleId: user.googleId,
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
      });
    }

    return existingUser;
  }

  async generateToken(user: any): Promise<string> {
    const payload = { id: user._id, email: user.email };
    return this.jwtService.sign(payload);
  }
}

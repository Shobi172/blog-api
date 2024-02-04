import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    try {
      const user = await this.authService.handleGoogleLogin(req.user);
      const token = await this.authService.generateToken(user);
      res
        .status(200)
        .json({ success: true, message: 'Authentication successful', token });
    } catch (error) {
      res
        .status(401)
        .json({ success: false, message: 'Authentication failed' });
    }
  }
}

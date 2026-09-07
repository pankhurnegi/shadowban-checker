import { Controller, Get, Post, Body } from '@nestjs/common';
import { IsString } from 'class-validator';
import { InstagramService } from './instagram.service';

class CheckUsernameDto {
  @IsString()
  username!: string;
}

@Controller('instagram')
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Get('connect')
  connect() {
    return this.instagramService.connect();
  }

  @Post('check')
  check(@Body() body: CheckUsernameDto) {
    return this.instagramService.checkUsername(body.username);
  }
}

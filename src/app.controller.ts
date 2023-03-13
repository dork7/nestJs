import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'supertest';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {
    return this.appService.getHello();
  }
  @Get('aa*')
  somePage(@Req() request: Request): string {
    return `Unknown route`;
  }

  @Post(':id')
  postRequest(
    @Body() mBody: any,
    @Query('userId') query: number,
    @Param('id') id: string,
  ): any {
    console.log(`mBody`, mBody);
    console.log(`query`, query);
    console.log(`id`, id);
    // return this.appService.saveInfo();
    return `This action updates  cat`;
  }
}

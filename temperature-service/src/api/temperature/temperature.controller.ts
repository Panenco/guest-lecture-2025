import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '~/utils/controller.base';
import { CreateTemperatureBody } from './body/create.temperature.body';
import { CreateTemperatureHandler } from './handlers/create.temperature.handler';

@Injectable()
@Controller('temperatures')
@ApiTags('temperature')
export class TemperatureController extends BaseController {
  @Post('')
  @ApiResponse({ type: String })
  async createTemperature(@Body() body: CreateTemperatureBody) {
    return await this.with(CreateTemperatureHandler).execute(body);
  }
}

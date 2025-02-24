import { Module } from '@nestjs/common';
import { EmailService } from './services/email.service';
import { TemperatureController } from './api/temperature/temperature.controller';
import { CreateTemperatureHandler } from './api/temperature/handlers/create.temperature.handler';

const controllers = [TemperatureController];
const commandHandlers = [CreateTemperatureHandler];

@Module({
  controllers,
  providers: [EmailService, ...commandHandlers],
})
export class AppModule {}

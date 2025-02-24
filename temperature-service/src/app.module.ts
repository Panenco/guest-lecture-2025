import { Module } from '@nestjs/common';
import { TemperatureController } from './api/temperature/temperature.controller';
import { CreateTemperatureHandler } from './api/temperature/handlers/create.temperature.handler';
import { PublisherService } from './services/publiser.service';

const controllers = [TemperatureController];
const commandHandlers = [CreateTemperatureHandler];

@Module({
  controllers,
  providers: [PublisherService, ...commandHandlers],
})
export class AppModule {}

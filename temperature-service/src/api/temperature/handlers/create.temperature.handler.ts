import { Injectable } from '@nestjs/common';
import { CreateTemperatureBody } from '../body/create.temperature.body';
import config from '~/config.parser';
import { PublisherService } from '~/services/publiser.service';

@Injectable()
export class CreateTemperatureHandler {
  constructor(private readonly publisherService: PublisherService) {}

  async execute(body: CreateTemperatureBody) {
    if (body.temperature > config.temperature.threshold) {
      await this.publisherService.publishEmailEvent({ temperature: body.temperature });
      return 'Email sent';
    } else {
      console.log(`Temperature (${body.temperature}) is below threshold (${config.temperature.threshold})`);
      return 'Temperature is below threshold';
    }
  }
}

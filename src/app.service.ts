import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { microservicesOptions } from '../config/microservices.config';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(microservicesOptions);
  }

  public getHello(): string {
    return 'Hello World!';
  }

  public dispatchEvent(pattern: string, data: any): void {
    this.client.emit(pattern, data);
  }

  public sendPattern(pattern: string, data: any): Promise<any> {
    return this.client.send(pattern, data).toPromise();
  }
}
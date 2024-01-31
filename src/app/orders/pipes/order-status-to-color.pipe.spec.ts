import { OrderStatusToColorPipe } from './order-status-to-color.pipe';

describe('OrderStatusToColorPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderStatusToColorPipe();
    expect(pipe).toBeTruthy();
  });
});

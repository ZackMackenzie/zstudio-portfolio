import { DeviceFrame } from './DeviceFrame';
import { ProductScreen } from './ProductScreen';

interface PhoneMockupProps {
  width?: number;
  height?: number;
  variant?: 'dashboard' | 'landing';
}

export function PhoneMockup({ width = 280, height = 580, variant = 'landing' }: PhoneMockupProps) {
  return (
    <DeviceFrame kind="phone" width={width} height={height}>
      <ProductScreen variant={variant} />
    </DeviceFrame>
  );
}

import { DeviceFrame } from './DeviceFrame';
import { ProductScreen } from './ProductScreen';

interface BrowserMockupProps {
  width?: number;
  height?: number;
  variant?: 'dashboard' | 'landing';
}

export function BrowserMockup({ width = 900, height = 560, variant = 'dashboard' }: BrowserMockupProps) {
  return (
    <DeviceFrame kind="browser" width={width} height={height}>
      <ProductScreen variant={variant} />
    </DeviceFrame>
  );
}

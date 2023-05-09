import { ContainerLayoutProps } from '../../types/userTypes';

// HOC component 
export default function ContainerLayout({ children }: ContainerLayoutProps) {
  const [component1, component2] = children;
  return (
    <div className="grid">
      <div className="col-6">{component1}</div>
      <div className="col-6">{component2}</div>
    </div>
  );
}
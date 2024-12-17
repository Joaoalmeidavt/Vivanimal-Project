import { Button, ButtonGroup } from '@nextui-org/button';

export default function ButtonUI({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return <Button className={`${classNames}`}>{children}</Button>;
}
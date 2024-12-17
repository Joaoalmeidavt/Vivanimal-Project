import { Button, ButtonGroup } from '@nextui-org/button';

export default function ButtonUI({
  children,
  classNames,
  onClick,
}: {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
}) {
  return <Button className={`${classNames}`} onClick={onClick} >{children}</Button>;
}
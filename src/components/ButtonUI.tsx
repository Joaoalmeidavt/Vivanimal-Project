import { Button, ButtonGroup } from '@nextui-org/button';

export default function ButtonUI({
  children,
  classNames,
  onPress,
}: {
  children: React.ReactNode;
  classNames?: string;
  onPress?: () => void;
}) {
  return <Button className={`${classNames}`} onPress={onPress} >{children}</Button>;
}
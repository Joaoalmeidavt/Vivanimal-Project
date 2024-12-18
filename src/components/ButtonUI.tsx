import { Button, ButtonGroup } from '@nextui-org/button';

export default function ButtonUI({
  children,
  classNames,
  type,
  onPress,

}: {
  children: React.ReactNode;
  classNames?: string;
  type?: string;
  onPress?: () => void;
}) {
  return <Button className={`${classNames}`} onPress={onPress} >{children}</Button>;
}

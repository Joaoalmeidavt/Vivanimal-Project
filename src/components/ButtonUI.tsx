import { Button } from '@nextui-org/button';

export default function ButtonUI({
  children,
  classNames,
  type = "button", // Define o valor default como "button"
  onPress,
}: {
  children: React.ReactNode;
  classNames?: string;
  type?: "button" | "submit" | "reset"; // Corrigido para aceitar essas opções de tipo
  onPress?: () => void;
}) {
  return (
    <Button className={`${classNames}`} onPress={onPress} type={type}>
      {children}
    </Button>
  );
}

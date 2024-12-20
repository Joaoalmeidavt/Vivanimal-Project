import { Button } from '@nextui-org/button';

export default function ButtonUI({
  children,
  classNames,
  type = "button", // Define o valor default como "button"
  onPress,
  disabled
}: {
  children: React.ReactNode;
  classNames?: string;
  type?: "button" | "submit" | "reset"; // Corrigido para aceitar essas opções de tipo
  onPress?: () => void;
  disabled?: boolean;
}) {
  return (
    <Button className={`${classNames}`} onPress={onPress} type={type} disabled={disabled}>
      {children}
    </Button>
  );
}

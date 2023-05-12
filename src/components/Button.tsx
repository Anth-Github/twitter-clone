type ButtonProps = {
  small: boolean;
  gray: boolean;
  className?: string;
};

export function Button({
  small = false,
  gray = false,
  className = "",
  ...props
}: ButtonProps) {
  return <button {...props}></button>;
}

import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "px-4 py-2 rounded",
  variants: {
    color: {
      primary: "bg-white text-sea-9",
      secondary: "border border-white text-white",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = React.PropsWithChildren &
  React.ComponentProps<"button"> &
  ButtonVariants;

export const Button = (props: ButtonProps) => {
  const { children, color, ...restProps } = props;

  return (
    <button className={button({ color })} {...restProps}>
      {children}
    </button>
  );
};

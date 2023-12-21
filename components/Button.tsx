import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary";
  loading?: boolean;
  children: ReactNode | string;
  fullWidth?: boolean;
};

const Button = ({
  disabled = false,
  loading = false,
  children,
  variant = "primary",
  fullWidth,
  ...rest
}: Props) => {
  return (
    <button
      className={`${fullWidth ? "w-full" : "min-w-[96px]"} ${
        variant === "primary"
          ? `${
              loading || disabled ? "text-grey-light" : "text-white"
            } bg-gray-900 hover:bg-primary-dark`
          : `${
              loading || disabled ? "text-grey-light" : "text-primary-darker"
            } bg-primary-lighter hover:bg-primary-light`
      } text-sm md:text-base font-bold py-2 px-4 rounded-lg shadow transition ease-in ${
        loading || disabled
          ? "cursor-not-allowed bg-opacity-70"
          : "cursor-pointer"
      }`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;

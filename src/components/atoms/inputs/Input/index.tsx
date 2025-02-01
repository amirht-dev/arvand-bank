import { cn } from "@/utils/utils";
import { forwardRef } from "react";
import {
  InputElementProps,
  InputErrorContainerProps,
  InputErrorMessageProps,
  InputIconProps,
  InputProps,
  InputRootProps,
} from "./index.types";

const InputRoot = forwardRef<HTMLDivElement, InputRootProps>(
  ({ size = "md", error = false, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "input__container",
          `input--size-${size}`,
          error && "input--state-error",
          props.className,
        )}
      />
    );
  },
);
InputRoot.displayName = "InputRoot";

const InputIcon = forwardRef<HTMLSpanElement, InputIconProps>((props, ref) => {
  return (
    <span {...props} ref={ref} className={cn("input__icon", props.className)} />
  );
});
InputIcon.displayName = "InputIcon";

const InputElement = forwardRef<HTMLInputElement, InputElementProps>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={cn("input__element", props.className)}
      />
    );
  },
);
InputElement.displayName = "InputElement";

const InputErrorMessage = forwardRef<
  HTMLParagraphElement,
  InputErrorMessageProps
>((props, ref) => {
  return (
    <p
      {...props}
      ref={ref}
      className={cn("input__error-message", props.className)}
    />
  );
});
InputErrorMessage.displayName = "InputErrorMessage";

const InputErrorContainer = forwardRef<
  HTMLDivElement,
  InputErrorContainerProps
>((props, ref) => {
  return (
    <div {...props} ref={ref} className={cn("space-y-1", props.className)} />
  );
});
InputErrorContainer.displayName = "InputErrorContainer";

const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ disabled, error, onChange, icon, placeholder, size, value }, ref) => {
    const input = (
      <InputRoot ref={ref} error={!!error} size={size}>
        {!!icon && <InputIcon>{icon}</InputIcon>}
        <InputElement
          disabled={disabled}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </InputRoot>
    );

    if (typeof error === "string")
      return (
        <InputErrorContainer>
          {input}
          <InputErrorMessage>{error}</InputErrorMessage>
        </InputErrorContainer>
      );

    return input;
  },
);
Input.displayName = "Input";

export {
  InputRoot as Input,
  InputElement,
  InputErrorContainer,
  InputErrorMessage,
  InputIcon,
};

export default Input;

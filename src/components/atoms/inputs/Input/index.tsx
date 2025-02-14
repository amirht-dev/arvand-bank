import { cn } from "@/utils/utils";
import { forwardRef } from "react";
import {
  InputContainerProps,
  InputDescriptionProps,
  InputElementProps,
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

const InputDescription = forwardRef<
  HTMLParagraphElement,
  InputDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      {...props}
      ref={ref}
      className={cn("text-caption-2 text-primary-600", className)}
    />
  );
});
InputDescription.displayName = "InputDescription";

const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(
  (props, ref) => {
    return (
      <div {...props} ref={ref} className={cn("space-y-1", props.className)} />
    );
  },
);
InputContainer.displayName = "InputContainer";

const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      disabled,
      error,
      onChange,
      icon,
      description,
      placeholder,
      size,
      className,
      name,
      value,
    },
    ref,
  ) => {
    const input = (
      <InputRoot ref={ref} error={!!error} size={size} className={className}>
        {!!icon && <InputIcon>{icon}</InputIcon>}
        <InputElement
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </InputRoot>
    );

    if (typeof error === "string" || description)
      return (
        <InputContainer>
          {input}
          <InputErrorMessage>{error}</InputErrorMessage>
          {!error && description && (
            <InputDescription>{description}</InputDescription>
          )}
        </InputContainer>
      );

    return input;
  },
);
Input.displayName = "Input";

export {
  InputRoot as Input,
  InputContainer,
  InputDescription,
  InputElement,
  InputErrorMessage,
  InputIcon,
};

export default Input;

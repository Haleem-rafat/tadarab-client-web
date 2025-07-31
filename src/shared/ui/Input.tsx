import * as React from 'react';
import classNames from 'classnames';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export type InputProps = {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  [key: string]: any;
};

const Input = React.forwardRef<any, InputProps>(
  ({ className, type, leftIcon, rightIcon, onChange, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleChange = (e: React.ChangeEvent<any>) => {
      if (type === 'number') {
        // Remove any non-numeric characters
        const value = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = value;
      }
      onChange?.(e);
    };

    return (
      <div className="relative flex grow items-center">
        {/* Left Icon */}
        {leftIcon && <span className="text-input-placeholder absolute left-3">{leftIcon}</span>}

        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          className={classNames(
            'shadow-6 min-h-10 w-full rounded-xl px-3 py-2 text-sm outline-0 transition-all ease-in-out',
            'text-input-placeholder placeholder:text-input-placeholder bg-mian-button',
            'disabled:cursor-not-allowed disabled:opacity-50',
            {
              'pl-10': leftIcon,
              'pr-10': rightIcon && type !== 'password',
            },
            className
          )}
          ref={ref}
          onChange={handleChange}
          {...props}
        />

        {type === 'password' ? (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-input-placeholder absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer">
            {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
          </button>
        ) : (
          rightIcon && <span className="text-input-placeholder absolute right-3">{rightIcon}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };

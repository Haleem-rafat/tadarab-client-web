import React from 'react';
import classNames from 'classnames';
import { LuLoader } from 'react-icons/lu';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text' | 'tinted' | 'underline';
  loading?: boolean;
  disable?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading = false,
  disable = false,
  className,
  children,
  leftIcon,
  rightIcon,

  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(
        // Base styles
        'flex w-fit items-center justify-center gap-3 rounded-xl leading-6',
        'cursor-pointer whitespace-nowrap transition-colors ease-in-out select-none',
        'first-letter:capitalize',
        'disabled:cursor-default',

        // Variant styles
        {
          'bg-primary text-white': variant === 'primary',
        },
        {
          'bg-mian-button text-white': variant === 'secondary',
        },
        {
          'bg-sub-button text-white': variant === 'tinted',
        },
        {
          'text-white': variant === 'text',
        },
        {
          'text-white underline': variant === 'underline',
        },

        // Disabled & Loading styles
        {
          'pointer-events-none opacity-70': disable || loading,
          'bg-neutral-400 text-neutral-600 shadow-none': disable,
          '!text-neutral-400 shadow-none': disable && variant === 'text',
        },

        className
      )}
      {...props}>
      {/* Loading Indicator */}
      {loading && (
        <span className="animate-spin">
          <LuLoader
            size={20}
            className={classNames({
              'stroke-gray-500': variant !== 'primary' && !disable,
              'stroke-white': variant === 'primary' && !disable,
              'stroke-gray-400': disable,
            })}
          />
        </span>
      )}

      {/* Left Icon (if provided) */}
      {leftIcon && <span>{leftIcon}</span>}

      {/* Button Text */}
      {children}

      {/* Right Icon (if provided) */}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;

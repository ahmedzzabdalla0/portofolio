import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={id}
            className="font-label text-label text-secondary uppercase tracking-widest"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-surface-container-low border border-subtle rounded-md px-4 py-3',
            'font-body text-body-md text-on-surface placeholder:text-secondary/40',
            'focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container',
            'transition-all duration-250 resize-none',
            error && 'border-error focus:border-error focus:ring-error',
            className
          )}
          {...rest}
        />
        {error && (
          <span className="font-label text-label text-error">{error}</span>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
export type { TextareaProps }

import React from 'react'

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
        default: 'bg-gray-900 text-white hover:bg-gray-800',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'border border-gray-300 bg-white hover:bg-gray-100 text-gray-900',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        ghost: 'hover:bg-gray-100 text-gray-900',
        link: 'text-gray-900 underline-offset-4 hover:underline',
        success: 'bg-green-600 text-white hover:bg-green-700',
    }

    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
    }

    return (
        <button
            className={`
                inline-flex items-center justify-center rounded-md text-sm font-medium 
                ring-offset-white transition-colors focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 
                disabled:pointer-events-none disabled:opacity-50
                ${variants[variant]}
                ${sizes[size]}
                ${className}
            `}
            ref={ref}
            {...props}
        />
    )
})

Button.displayName = 'Button'

export { Button }
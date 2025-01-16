import React from 'react'

const Alert = ({ className, variant = 'default', children, ...props }) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'destructive':
                return 'bg-red-100 text-red-800 border-red-200'
            case 'warning':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200'
            case 'success':
                return 'bg-green-100 text-green-800 border-green-200'
            default:
                return 'bg-blue-100 text-blue-800 border-blue-200'
        }
    }

    return (
        <div
            className={`p-4 rounded-lg border ${getVariantClasses()} ${className}`}
            role="alert"
            {...props}
        >
            {children}
        </div>
    )
}

export { Alert }
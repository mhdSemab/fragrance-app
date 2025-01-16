import React from 'react'

const Card = ({ className, children, ...props }) => {
    return (
        <div className={`bg-white rounded-lg shadow-sm ${className}`} {...props}>
            {children}
        </div>
    )
}

const CardHeader = ({ className, children, ...props }) => {
    return (
        <div className={`p-6 ${className}`} {...props}>
            {children}
        </div>
    )
}

const CardTitle = ({ className, children, ...props }) => {
    return (
        <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
            {children}
        </h3>
    )
}

const CardContent = ({ className, children, ...props }) => {
    return (
        <div className={`p-6 pt-0 ${className}`} {...props}>
            {children}
        </div>
    )
}

export { Card, CardHeader, CardTitle, CardContent }
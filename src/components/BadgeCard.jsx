import React from 'react'

export const BadgeCard = ({children, type}) => {
    // let styleType = 'badge bg-secondary'

    // if(type === 'primary') {
    //     styleType = 'badge badge-primary'
    // } else if (type === 'secondary'){
    //     styleType = 'badge badge-secondary'
    // } else if (type === 'success'){
    //     styleType = 'badge badge-success'
    // } else if (type === 'danger') {
    //     styleType = 'badge badge-danger'
    // } else if (type === 'warning') {
    //     styleType = 'badge badge-warning'
    // } else if (type === 'info') {
    //     styleType = 'badge badge-info'
    // } else if (type === 'light') {
    //     styleType = 'badge badge-light'
    // } else if (type === 'dark') {
    //     styleType = 'badge badge-dark'
    // } else {
    //     styleType = 'badge badge-secondary'
    // }

    function typeSelector(type) {
        if(type === '') {
            return type = 'badge badge-secondary'
        } else {
            return 'badge badge-' + type
        }
    }


  return (
    <span className={typeSelector(type)}>{children}</span>
  )
}

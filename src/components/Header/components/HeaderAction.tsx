import React from 'react'
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi'
import Button from '../../Button'

const HeaderAction = () => {
  return (
    <div>
        <Button variant="icon">
            <HiOutlineShoppingCart/>
        </Button>
        <Button variant="icon">
            <HiOutlineUser/>
        </Button>
      
    </div>
  )
}

export default HeaderAction

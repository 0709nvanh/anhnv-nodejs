import React, { useState } from 'react'
import { add } from '../../api/auth'
import { UserType } from '../../types/auth'
import Signup from './Signup'

type Props = {
    user: UserType
}

const PageSignUp = (props: Props) => {
    const onHandleAddUser = async (user: UserType) => {
        const [users, setUsers] = useState<UserType[]>([]);
        const { data } = await add(user);
        setUsers([...users, data])
    }
  return (
    <div>
        <Signup onAddUser={onHandleAddUser}/>
    </div>
  )
}

export default PageSignUp
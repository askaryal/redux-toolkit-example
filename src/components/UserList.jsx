import { useEffect } from "react"
//redux
import { fetchAllUser } from '../store/slices/users'
import { useDispatch, useSelector } from 'react-redux'
export default function UserList() {

    const { list }  = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllUser())
    }, [dispatch])
    

  return (
    <div className="container">
        <div className="row">
            {
                list.map((user) => (
                    <div key={ user.id } className="col-md-3">
                        <div className="card mt-5">
                            <img src={user.avatar} alt={ user.first_name }/>
                            <div className="card-body">
                                <h5 className="card-title">{ `${user.first_name} ${user.last_name}`}</h5>
                                <p className="card-text">{ user.email }</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

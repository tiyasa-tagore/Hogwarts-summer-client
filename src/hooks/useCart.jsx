import { useQuery } from '@tanstack/react-query';
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
     queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectcls?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [cart, refetch]
}
export default useCart;
import { useParams } from "react-router-dom"

const UserDetail = () => {

	const { id } = useParams()

	useEffect(() => {
		if (!id) return

		const fetchData = async () => {
			const data = await UserService.getAll()
			setData(data);
			setIsLoading(false);
		}
		fetchData()
	}, [id]);

	return <div>User Detail {id}</div>
}

export default UserDetail
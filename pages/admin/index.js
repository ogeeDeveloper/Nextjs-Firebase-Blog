import toast from 'react-hot-toast'
const AdminPost = () => {
  return (
    <main>User Posts
        <button onClick={()=>toast.success("Hello there")}>Toast me</button>
    </main>
  )
}

export default AdminPost
import Sidebar from "../components/Sidebar"

const styles = {
  container: `h-full w-full flex bg-[#f5f5f5]`,
}

export default function Home() {
  return (
    <div className={styles.container}>      
      <Sidebar />
    </div>
  )
}

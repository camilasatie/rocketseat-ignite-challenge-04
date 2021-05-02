import { Banner } from "../components/Banner"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { TravelTypes } from "../components/TravelTypes"

export default function Home() {
  return (
    <div>
      <Head />
      <Header />
      <main>
        <Banner />
        <TravelTypes />
      </main>
    </div>
  )
}

import { Counter } from "../../components/counter/counter";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Name } from "../../components/name/name";
export const Homepage = () => {
  return (
    <div>
      <Header/>
      <Name/>
      <Counter/>
      <Footer/>
    </div>
  )
}

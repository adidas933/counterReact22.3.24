import { titleData, subTitleData } from "../../data/headerData";
export const Header = () => {
  return (
    <div>
      <h1>{titleData}</h1>
      <h2>{subTitleData}</h2>
    </div>
  )
}
import BottomLeft from "./BottomLeft";
import TopLeft from "./TopLeft";

export default function LeftSide() {
  return(
    <div className="flex flex-col" >
      <TopLeft />
      <BottomLeft />
    </div>
  )
}
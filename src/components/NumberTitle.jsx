export const NumberTitle = ({number}) => {

  return(
    <div className="text-3xl font-bold">
      <span className="text-3xl md:text-3xl font-bold text-red-700">{number}</span>
      <div className="border-b-3 border-red-700 w-9"></div>
    </div>
  )
}
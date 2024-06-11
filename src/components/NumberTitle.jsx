export const NumberTitle = ({number}) => {

  return(
    <div className="text-3xl font-bold">
      <span className="text-3xl md:text-3xl font-bold text-sky-800">{number}</span>
      <div className="border-b-3 border-sky-800 w-9"></div>
    </div>
  )
}
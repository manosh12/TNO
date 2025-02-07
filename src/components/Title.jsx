export const Title = ({title}) => {

  return(
    <div className="text-center text-3xl font-bold mx-5 my-10">
      <div className="text-center">
        <div className="flex items-center justify-center flex-col">
          <span className="px-4 text-2xl lg:text-3xl font-bold">{title}</span>
          <div className="border-b-3 border-red-700 w-20 mt-2"></div>
        </div>
      </div>
    </div>
  )
}
export const Title = ({title}) => {

  return(
    <div className="text-center text-3xl font-bold my-10 mx-5">
      <div className="text-center">
        <div className="flex items-center justify-center flex-col">
          <span className="px-4 text-xl md:text-2xl font-bold">{title}</span>
          <div className="border-b-3 border-sky-800 w-20 mt-2"></div>
        </div>
      </div>
    </div>
  )
}
import ButtonLink from '../ButtonLink'

const PriceCard = ({ price }) => {
  const { title, description, currency, link, strongpoints } = price
  const currencySymbol = currency === 'euro' ? '€' : '$'

  return (
    <div className="w-[90%] mx-auto laptop:mx-0 laptop:max-w-[400px] lg:w-[400px] overflow-hidden rounded-lg border-2 border-primary flex flex-col">
      <div className="grid place-content-center text-center bg-backgroundLight bg-footer-texture bg-repeat bg-center bg-16 py-8">
        {title && <h3 className="text-xl font-caviar">{title}</h3>}
        <h3 className="text-[5em]">
          <span className="text-[2rem]">{currencySymbol}</span>
          {price.price}
        </h3>
        <span className="text-primary">{description}</span>
      </div>
      <div className="p-8 flex flex-col justify-between flex-1">
        {strongpoints?.length && (
          <div className="text-white text-center">
            {strongpoints.map((point, key) => {
              return (
                <h4 className="py-6" key={key}>
                  {point.text}
                </h4>
              )
            })}
          </div>
        )}

        {link && (
          <div className="grid place-content-center">
            <ButtonLink link={link} />
          </div>
        )}
      </div>
    </div>
  )
}

export default PriceCard

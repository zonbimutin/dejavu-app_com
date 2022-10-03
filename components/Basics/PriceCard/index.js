const PriceCard = ({ price }) => {
  const { title, subtitle, currency, features, link } = price
  return (
    <div className="overflow-hidden rounded-lg border-2 border-primary flex flex-col">
      <div className="grid place-content-center text-center bg-backgroundLight bg-footer-texture bg-repeat bg-center bg-16 py-8">
        <h3 className="text-xl font-caviar">{title}</h3>
        <h3 className="text-[5em]">
          <span className="text-[2rem]">{currency}</span>
          {price.price}
        </h3>
        <span className="text-primary">{subtitle}</span>
      </div>
      <div className="p-8 flex flex-col justify-between flex-1">
        {features?.length && (
          <div className="text-white text-center">
            {features.map((feature, key) => {
              return (
                <h4 className="py-6" key={key}>
                  {feature}
                </h4>
              )
            })}
          </div>
        )}
        <div className="grid place-content-center">
          <a href="#" className="btn btn-prim basic">
            <span>Choose Plan</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PriceCard

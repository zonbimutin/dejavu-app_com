import UploadImage from '@components/Basics/UploadImage'
import { FaPalette } from 'react-icons/fa'

export default function Reinsurance({ data }) {
  const { features } = data
  if (!features.length) return
  const items = [
    {
      icon: <FaPalette size={'4rem'} />,
      title: 'Creative Design',
      text: 'Proactively syndicate open-source e-markets after low-risk high-yield synergy.',
    },
    {
      icon: <FaPalette size={'4rem'} />,
      title: 'Creative Design',
      text: 'Proactively syndicate open-source e-markets after low-risk high-yield synergy.',
    },
    {
      icon: <FaPalette size={'4rem'} />,
      title: 'Creative Design',
      text: 'Proactively syndicate open-source e-markets after low-risk high-yield synergy.',
    },
    {
      icon: <FaPalette size={'4rem'} />,
      title: 'Creative Design',
      text: 'Proactively syndicate open-source e-markets after low-risk high-yield synergy.',
    },
  ]

  return (
    <div className="py-16 bg-backgroundLight bg-footer-texture bg-repeat bg-center bg-16 bg-fixed">
      <div className="container px-4 mx-auto">
        <div className="grid laptop:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16">
          {features.map((feature, key) => {
            return (
              <div
                key={key}
                className="mx-12 lg:mx-0 p-4 lg:p-10 bg-gradient-to-r from-primary to-primaryLight rounded-lg"
              >
                <div className="flex flex-col gap-4 items-center text-center">
                  {feature.icon && (
                    <div className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]">
                      <UploadImage image={feature.icon} size={'4rem'} />
                    </div>
                  )}
                  {feature.title && (
                    <h3 className="text-xl text-black">{feature.title}</h3>
                  )}
                  {feature.text && <p className="text-black">{feature.text}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

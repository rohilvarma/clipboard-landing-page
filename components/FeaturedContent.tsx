import { IContent } from '@/lib/interfaces'
import { Buttons } from '.'

const FeaturedContent = ({title, description, index}: IContent) => {
  return <section className={`text-center max-w-xl mx-auto ${index !== 0 && 'mt-32'}`}>
    <h2 className={`text-dark-grayish-blue font-semibold pb-4 pt-12 ${index === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
      {title}
    </h2>
    <p className="text-grayish-blue text-base">
      {description}
    </p>
    {(index === 0 || index === 4) && <Buttons />}
  </section>
}

export default FeaturedContent;
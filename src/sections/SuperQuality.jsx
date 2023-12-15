import { shoe8 } from '../assets/images'
import { Button } from '../components/Button'

export function SuperQuality() {
  return (
    <section
      id='about-us'
      className='w-full flex justify-between items-center max-lg:flex-col max-container gap-10'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitaliz font-bold lg:max-w-lg'>
          We Provide You{' '}
          <span className='text-coral-red pr-3'>Super Quality</span>
          Shoes
        </h2>
        <p className='lg:max-w-lg mt-4 info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className='mt-10'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img
          src={shoe8}
          alt='Shoe'
          width={577}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}

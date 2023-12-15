import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import { Button } from '../components/Button'

export function SpecialOffers() {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Offer'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-coral-red font-palanquin text-4xl capitaliz font-bold lg:max-w-lg'>
          Special <span className='text-black pr-3'>Offers</span>
        </h2>
        <p className='lg:max-w-lg mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpasing the loftiest expectations. Your journey with us is
          nothing short of exeptional.
        </p>
        <div className='mt-10 flex flex-wrap gap-4'>
          <Button iconUrl={arrowRight} label='View details' />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

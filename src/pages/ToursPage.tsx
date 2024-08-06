import { GridGallery } from '../components/tours/GridGallery'
import { TourBanner } from '../components/tours/TourBanner'

export function ToursPage() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <TourBanner />
      <GridGallery />
    </section>
  )
}

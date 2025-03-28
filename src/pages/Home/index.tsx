import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnsaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnsaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home

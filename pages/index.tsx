interface HomeProps {
  count: number
}

export default function Home({ count }: HomeProps) {
  return (<h1>Contagem: {count}</h1>)
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const { count } = await response.json()

  console.log(count)

  return {
    props: {
      count
    }
  }
}

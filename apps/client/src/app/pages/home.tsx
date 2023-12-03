import { Layout } from "@polybank/pages/layout";
import { CreditCard, InputSearch } from '@polybank/ui'

export default function Home () {
  return (
    <Layout>
      <div>
        <Header />
        Home

        
      </div>
    </Layout>
  )
}

function Header () {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Polybank</h1>
        </div>
        <div>
          impl
        </div>
      </div>
      <div className="pt-3">
        <InputSearch />
      </div>
      
    </div>
  )
}
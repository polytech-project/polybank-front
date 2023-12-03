import { PropsWithChildren, useState } from "react";
import { Button, ButtonStyle, SlideUpMenu } from "@polybank/ui"
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export function Container ({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="flex-col flex h-full">
        { children }
      </div>
    </>
  )
}

function Header () {
  const [load, setLoad] = useState(false)
  return (
    <div className="bg-slate-100 h-24 flex content-end flex-col ">
      <div className="absolute top-4 left-3">
        <ArrowLeftIcon className="w-6 font-bold"  />
      </div>

      <div className=" h-full items-end flex flex-row justify-between">
        <div className="flex items-center justify-between w-full px-3 pb-3">
          <div>
            <h1 className="text-2xl font-bold">Projets</h1>
          </div>

          {/* <div>
            <Button 
              style={ButtonStyle.DARK}
              onClick={() => setLoad(!load)}
              loading={load}
            >
              Créer un projet
            </Button>
          </div> */}
        
        </div>
       
      </div>      
    </div>
  )
}
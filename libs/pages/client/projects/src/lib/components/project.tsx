import { UserIcon } from "@heroicons/react/24/outline";

export default function Project () {
  return (
    <div className="flex flex-col border border-md">
      <span>Voyage en grèce</span>

      <div className="flex items-center gap-2">
        <div>
          <UserIcon className="w-5 h-5" />
        </div>
       <span>Juliette, Martin, Luc</span>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span>Totales des dépenses</span>
          <span>1 445€</span>
        </div>
        <div className="flex flex-col">
          <span>Montant dû</span>
          <span>100€</span>
        </div>
      </div>
    </div>
  )
}
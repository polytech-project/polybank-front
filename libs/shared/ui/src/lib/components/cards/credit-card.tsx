export interface CreditCardProps {
  name: string
}

export function CreditCard({ name }: CreditCardProps) {
  return (
    <div className="card-group">
      <div className="card">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png" alt="Visa" />
        </div>
        <div className="chip">
          <img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png" alt="chip" />
        </div>

        <div className="number">1234 5678 9012 3456</div>
        <div className="name">SHOUNAK DAS</div>
        <div className="from">10/19</div>
        <div className="to">06/21</div>
        <div className="ring"></div>
      </div>
    </div>
  )
}

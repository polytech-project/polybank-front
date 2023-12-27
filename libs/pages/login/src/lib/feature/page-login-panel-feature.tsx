import { useRedirectIfLogged } from "../hooks/use-redirect-if-logged";
import LayoutLogin from "../ui/layout-login";

export function PageLoginPanelFeature () {
  useRedirectIfLogged('/home')

  return (
    <LayoutLogin>
      <div>
        Login panel
      </div>
    </LayoutLogin>
  )
}

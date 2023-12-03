import { useRedirectIfLogged } from "../hooks/use-redirect-if-logged";
import LayoutLogin from "../ui/layout-login";
import Login from "../ui/login";

export function PageLoginPanelFeature () {

  useRedirectIfLogged('/home')

  return (
    <LayoutLogin>
      <Login />
    </LayoutLogin>
  )
}
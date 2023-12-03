import { IconAwesomeEnum, IconEnum } from "@polybank/enums";
import { Button, ButtonIcon, ButtonIconStyle, Icon, Tooltip } from "@polybank/ui";
import { classNames } from "@polybank/utils";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { MenuAccountFeature } from "../feature/menu-account-feature";
import { useEffect } from "react";

export function Navigation () {
  const { pathname } = useLocation()

  const matchHomeRoute = pathname.includes('/home')
  const matchSettingsRoute = pathname.includes(`/settings`)
  const matchProjectsRoute = pathname.includes(`/projects`)

  useEffect(() => {
    console.log('pathname', pathname);
    console.log('matchHomeRoute', matchHomeRoute);
  }, [pathname, matchHomeRoute])

  return (
    <div className="w-16 h-screen dark:bg-neutral-650 bg-white flex flex-col">
      <Link
        to={"http://localhost:4200"}
        className="flex w-16 h-16 items-center justify-center border-b z-10 dark:border-neutral-500 border-neutral-200"
      >
        <Icon name={IconEnum.CONSOLE} className="w-9 p-4" />
      </Link>

      <div className="flex flex-col justify-between px-2.5 py-5 flex-grow">
        <div className="flex flex-col gap-3">
          <Tooltip content="Accueil" side="right">
            <div>
            <ButtonIcon 
              className={classNames(matchHomeRoute ? 'is-active': '')}
              icon={IconEnum.ENVIRONMENT}
              style={ButtonIconStyle.ALT}
              link={'/home'}
              iconClassName="!w-9"
            />
            </div>
            
          </Tooltip>

          <Tooltip content="Projets" side="right">
            <div>
              <ButtonIcon 
                className={classNames(matchProjectsRoute ? 'is-active': '')}
                icon={IconEnum.ENVIRONMENT}
                style={ButtonIconStyle.ALT}
                link={'/projects'}
                iconClassName="!w-9"
              />
            </div>
           
          </Tooltip>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <Tooltip content="Settings" side="right">
              <div>
                <ButtonIcon 
                  className={matchSettingsRoute ? 'is-active' : ''}
                  icon={IconAwesomeEnum.WHEEL}
                  style={ButtonIconStyle.ALT}
                  link={"/settings"}
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex w-16 h-16 mb-5 items-center justify-center border-t dark:border-neutral-500 border-neutral-200">
        <MenuAccountFeature />
      </div>
    </div>
  )
}
import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from '@polybank/state/store'
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'

import App from './app/app'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'

const container = document.getElementById('root') || document.createElement('div')
const root = createRoot(container)

const queryClient = new QueryClient()
const store = setupStore()

root.render(
  <div>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <Provider store={store}>
        <BrowserRouter>
          <TooltipProvider>
            <Fragment>
              <App />
            </Fragment>
          </TooltipProvider>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </div>
)


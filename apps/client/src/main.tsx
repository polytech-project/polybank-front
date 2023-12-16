import { StrictMode } from 'react'
import { createRoot }from 'react-dom/client'
import { setupStore } from '@polybank/state/store'

import App from './app/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {TooltipProvider} from "@radix-ui/react-tooltip";

const container = document.getElementById('root') || document.createElement('div')
const root = createRoot(container)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onSuccess(data) {
        console.log('onSuccess', data)
      },
      onError(err) {
        console.log('onError', err)
      },
    }
  }
})

const store = setupStore()

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <BrowserRouter>
          <TooltipProvider>
            <App />
          </TooltipProvider>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)

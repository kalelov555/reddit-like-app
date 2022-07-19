import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { NotificationsProvider } from "@mantine/notifications";
import Cookies from "js-cookie";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.vrmarketing.guru/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from cookies if it exists
  const token = Cookies.get("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NotificationsProvider>
        <Component {...pageProps} />
      </NotificationsProvider>
    </ApolloProvider>
  );
}

export default MyApp;

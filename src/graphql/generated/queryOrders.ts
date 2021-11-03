/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryOrders
// ====================================================

export interface queryOrders_orders_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface queryOrders_orders_games_developers {
  __typename: "Developer";
  name: string;
}

export interface queryOrders_orders_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: queryOrders_orders_games_cover | null;
  developers: queryOrders_orders_games_developers[];
  price: number;
}

export interface queryOrders_orders {
  __typename: "Order";
  id: string;
  created_at: any;
  card_brand: string | null;
  card_last4: string | null;
  games: queryOrders_orders_games[];
}

export interface queryOrders {
  orders: queryOrders_orders[];
}

export interface queryOrdersVariables {
  identifier: string;
}

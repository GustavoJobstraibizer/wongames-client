/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QuerySearchGames
// ====================================================

export interface QuerySearchGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QuerySearchGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QuerySearchGames_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QuerySearchGames_games_cover | null;
  developers: QuerySearchGames_games_developers[];
  price: number;
}

export interface QuerySearchGames {
  games: QuerySearchGames_games[];
}

export interface QuerySearchGamesVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}

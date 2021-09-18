/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcomming
// ====================================================

export interface QueryUpcomming_upcommingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcomming_upcommingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryUpcomming_upcommingGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryUpcomming_upcommingGames_cover | null;
  developers: QueryUpcomming_upcommingGames_developers[];
  price: number;
}

export interface QueryUpcomming_showcase_upcommingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcomming_showcase_upcommingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcomming_showcase_upcommingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpcomming_showcase_upcommingGames_highlight_background | null;
  floatImage: QueryUpcomming_showcase_upcommingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryUpcomming_showcase_upcommingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpcomming_showcase_upcommingGames_highlight | null;
}

export interface QueryUpcomming_showcase {
  __typename: "Home";
  upcommingGames: QueryUpcomming_showcase_upcommingGames | null;
}

export interface QueryUpcomming {
  upcommingGames: QueryUpcomming_upcommingGames[];
  showcase: QueryUpcomming_showcase | null;
}

export interface QueryUpcommingVariables {
  date: any;
}

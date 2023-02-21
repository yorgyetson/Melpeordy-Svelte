import client from "$lib/graphql/apolloClient";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions, QueryOptions, SubscriptionOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export const UserDataFragmentDoc = gql`
    fragment UserData on users {
  id
  username
  email
  active
}
    `;
export const GetGameByPkDoc = gql`
    query GetGameByPK($id: uuid!) {
  games_by_pk(id: $id) {
    name
    current_answer
    current_round
    buzzed_user_id
  }
}
    `;
export const SubscribeGameByPkDoc = gql`
    subscription SubscribeGameByPK($id: uuid!) {
  games_by_pk(id: $id) {
    name
    current_answer
    current_round
    buzzed_user_id
    categories {
      id
      name
      position
      answers {
        id
        answer
        value
        question
        type
        hasBeenPlayed
      }
    }
  }
}
    `;
export const GetUserByPkDoc = gql`
    query GetUserByPK($id: uuid!) {
  users_by_pk(id: $id) {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;
export const GetUserByEmailDoc = gql`
    query GetUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;
export const GetUserByUsernameDoc = gql`
    query GetUserByUsername($username: String!) {
  users(where: {username: {_eq: $username}}) {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;
export const GetGameByPK = (
            options: Omit<
              WatchQueryOptions<GetGameByPkQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetGameByPkQuery> & {
              query: ObservableQuery<
                GetGameByPkQuery,
                GetGameByPkQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetGameByPkDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetGameByPkQuery> & {
                query: ObservableQuery<
                  GetGameByPkQuery,
                  GetGameByPkQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncGetGameByPK = (
                options: Omit<
                  QueryOptions<GetGameByPkQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<GetGameByPkQuery>({query: GetGameByPkDoc, ...options})
              }
            
export const SubscribeGameByPK = (
            options: Omit<SubscriptionOptions<SubscribeGameByPkSubscriptionVariables>, "query">
          ) => {
            const q = client.subscribe<SubscribeGameByPkSubscription, SubscribeGameByPkSubscriptionVariables>(
              {
                query: SubscribeGameByPkDoc,
                ...options,
              }
            )
            return q;
          }
export const GetUserByPK = (
            options: Omit<
              WatchQueryOptions<GetUserByPkQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetUserByPkQuery> & {
              query: ObservableQuery<
                GetUserByPkQuery,
                GetUserByPkQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetUserByPkDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetUserByPkQuery> & {
                query: ObservableQuery<
                  GetUserByPkQuery,
                  GetUserByPkQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncGetUserByPK = (
                options: Omit<
                  QueryOptions<GetUserByPkQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<GetUserByPkQuery>({query: GetUserByPkDoc, ...options})
              }
            
export const GetUserByEmail = (
            options: Omit<
              WatchQueryOptions<GetUserByEmailQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetUserByEmailQuery> & {
              query: ObservableQuery<
                GetUserByEmailQuery,
                GetUserByEmailQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetUserByEmailDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetUserByEmailQuery> & {
                query: ObservableQuery<
                  GetUserByEmailQuery,
                  GetUserByEmailQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncGetUserByEmail = (
                options: Omit<
                  QueryOptions<GetUserByEmailQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<GetUserByEmailQuery>({query: GetUserByEmailDoc, ...options})
              }
            
export const GetUserByUsername = (
            options: Omit<
              WatchQueryOptions<GetUserByUsernameQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetUserByUsernameQuery> & {
              query: ObservableQuery<
                GetUserByUsernameQuery,
                GetUserByUsernameQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetUserByUsernameDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetUserByUsernameQuery> & {
                query: ObservableQuery<
                  GetUserByUsernameQuery,
                  GetUserByUsernameQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncGetUserByUsername = (
                options: Omit<
                  QueryOptions<GetUserByUsernameQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<GetUserByUsernameQuery>({query: GetUserByUsernameDoc, ...options})
              }
            
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "answers" */
export type Answers = {
  __typename?: 'answers';
  answer: Scalars['String'];
  /** An object relationship */
  category: Categories;
  categoryId: Scalars['uuid'];
  hasBeenPlayed: Scalars['Boolean'];
  id: Scalars['uuid'];
  question?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  value: Scalars['numeric'];
};

/** aggregated selection of "answers" */
export type Answers_Aggregate = {
  __typename?: 'answers_aggregate';
  aggregate?: Maybe<Answers_Aggregate_Fields>;
  nodes: Array<Answers>;
};

export type Answers_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Answers_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Answers_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Answers_Aggregate_Bool_Exp_Count>;
};

export type Answers_Aggregate_Bool_Exp_Bool_And = {
  arguments: Answers_Select_Column_Answers_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Answers_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Answers_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Answers_Select_Column_Answers_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Answers_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Answers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Answers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "answers" */
export type Answers_Aggregate_Fields = {
  __typename?: 'answers_aggregate_fields';
  avg?: Maybe<Answers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Answers_Max_Fields>;
  min?: Maybe<Answers_Min_Fields>;
  stddev?: Maybe<Answers_Stddev_Fields>;
  stddev_pop?: Maybe<Answers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Answers_Stddev_Samp_Fields>;
  sum?: Maybe<Answers_Sum_Fields>;
  var_pop?: Maybe<Answers_Var_Pop_Fields>;
  var_samp?: Maybe<Answers_Var_Samp_Fields>;
  variance?: Maybe<Answers_Variance_Fields>;
};


/** aggregate fields of "answers" */
export type Answers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "answers" */
export type Answers_Aggregate_Order_By = {
  avg?: InputMaybe<Answers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Answers_Max_Order_By>;
  min?: InputMaybe<Answers_Min_Order_By>;
  stddev?: InputMaybe<Answers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Answers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Answers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Answers_Sum_Order_By>;
  var_pop?: InputMaybe<Answers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Answers_Var_Samp_Order_By>;
  variance?: InputMaybe<Answers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "answers" */
export type Answers_Arr_Rel_Insert_Input = {
  data: Array<Answers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};

/** aggregate avg on columns */
export type Answers_Avg_Fields = {
  __typename?: 'answers_avg_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "answers" */
export type Answers_Avg_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "answers". All fields are combined with a logical 'AND'. */
export type Answers_Bool_Exp = {
  _and?: InputMaybe<Array<Answers_Bool_Exp>>;
  _not?: InputMaybe<Answers_Bool_Exp>;
  _or?: InputMaybe<Array<Answers_Bool_Exp>>;
  answer?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  categoryId?: InputMaybe<Uuid_Comparison_Exp>;
  hasBeenPlayed?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  question?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "answers" */
export enum Answers_Constraint {
  /** unique or primary key constraint on columns "id" */
  AnswersPkey = 'answers_pkey'
}

/** input type for incrementing numeric columns in table "answers" */
export type Answers_Inc_Input = {
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "answers" */
export type Answers_Insert_Input = {
  answer?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  categoryId?: InputMaybe<Scalars['uuid']>;
  hasBeenPlayed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Answers_Max_Fields = {
  __typename?: 'answers_max_fields';
  answer?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "answers" */
export type Answers_Max_Order_By = {
  answer?: InputMaybe<Order_By>;
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Answers_Min_Fields = {
  __typename?: 'answers_min_fields';
  answer?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "answers" */
export type Answers_Min_Order_By = {
  answer?: InputMaybe<Order_By>;
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "answers" */
export type Answers_Mutation_Response = {
  __typename?: 'answers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Answers>;
};

/** on_conflict condition type for table "answers" */
export type Answers_On_Conflict = {
  constraint: Answers_Constraint;
  update_columns?: Array<Answers_Update_Column>;
  where?: InputMaybe<Answers_Bool_Exp>;
};

/** Ordering options when selecting data from "answers". */
export type Answers_Order_By = {
  answer?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  categoryId?: InputMaybe<Order_By>;
  hasBeenPlayed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: answers */
export type Answers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "answers" */
export enum Answers_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  HasBeenPlayed = 'hasBeenPlayed',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** select "answers_aggregate_bool_exp_bool_and_arguments_columns" columns of table "answers" */
export enum Answers_Select_Column_Answers_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  HasBeenPlayed = 'hasBeenPlayed'
}

/** select "answers_aggregate_bool_exp_bool_or_arguments_columns" columns of table "answers" */
export enum Answers_Select_Column_Answers_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  HasBeenPlayed = 'hasBeenPlayed'
}

/** input type for updating data in table "answers" */
export type Answers_Set_Input = {
  answer?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['uuid']>;
  hasBeenPlayed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Answers_Stddev_Fields = {
  __typename?: 'answers_stddev_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "answers" */
export type Answers_Stddev_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Answers_Stddev_Pop_Fields = {
  __typename?: 'answers_stddev_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "answers" */
export type Answers_Stddev_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Answers_Stddev_Samp_Fields = {
  __typename?: 'answers_stddev_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "answers" */
export type Answers_Stddev_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "answers" */
export type Answers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Answers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Answers_Stream_Cursor_Value_Input = {
  answer?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['uuid']>;
  hasBeenPlayed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Answers_Sum_Fields = {
  __typename?: 'answers_sum_fields';
  value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "answers" */
export type Answers_Sum_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** update columns of table "answers" */
export enum Answers_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  HasBeenPlayed = 'hasBeenPlayed',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

export type Answers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Answers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Answers_Set_Input>;
  where: Answers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Answers_Var_Pop_Fields = {
  __typename?: 'answers_var_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "answers" */
export type Answers_Var_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Answers_Var_Samp_Fields = {
  __typename?: 'answers_var_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "answers" */
export type Answers_Var_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Answers_Variance_Fields = {
  __typename?: 'answers_variance_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "answers" */
export type Answers_Variance_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  /** An object relationship */
  game: Games;
  gameId: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  position: Scalars['numeric'];
};


/** columns and relationships of "categories" */
export type CategoriesAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

export type Categories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Categories_Aggregate_Bool_Exp_Count>;
};

export type Categories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Categories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  avg?: InputMaybe<Categories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Categories_Max_Order_By>;
  min?: InputMaybe<Categories_Min_Order_By>;
  stddev?: InputMaybe<Categories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Categories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Categories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Categories_Sum_Order_By>;
  var_pop?: InputMaybe<Categories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Categories_Var_Samp_Order_By>;
  variance?: InputMaybe<Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "categories" */
export type Categories_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  answers?: InputMaybe<Answers_Bool_Exp>;
  answers_aggregate?: InputMaybe<Answers_Aggregate_Bool_Exp>;
  game?: InputMaybe<Games_Bool_Exp>;
  gameId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  position?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  answers?: InputMaybe<Answers_Arr_Rel_Insert_Input>;
  game?: InputMaybe<Games_Obj_Rel_Insert_Input>;
  gameId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  gameId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  gameId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  answers_aggregate?: InputMaybe<Answers_Aggregate_Order_By>;
  game?: InputMaybe<Games_Order_By>;
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  gameId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "categories" */
export type Categories_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "categories" */
export type Categories_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "categories" */
export type Categories_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  gameId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  position?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "categories" */
export type Categories_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position'
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "categories" */
export type Categories_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "categories" */
export type Categories_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "categories" */
export type Categories_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "games" */
export type Games = {
  __typename?: 'games';
  buzzed_user_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  categories: Array<Categories>;
  /** An aggregate relationship */
  categories_aggregate: Categories_Aggregate;
  current_answer?: Maybe<Scalars['uuid']>;
  current_round?: Maybe<Scalars['numeric']>;
  host_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
};


/** columns and relationships of "games" */
export type GamesCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


/** columns and relationships of "games" */
export type GamesCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: 'games_aggregate';
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: 'games_aggregate_fields';
  avg?: Maybe<Games_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
  stddev?: Maybe<Games_Stddev_Fields>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Fields>;
  sum?: Maybe<Games_Sum_Fields>;
  var_pop?: Maybe<Games_Var_Pop_Fields>;
  var_samp?: Maybe<Games_Var_Samp_Fields>;
  variance?: Maybe<Games_Variance_Fields>;
};


/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Games_Avg_Fields = {
  __typename?: 'games_avg_fields';
  current_round?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: InputMaybe<Array<Games_Bool_Exp>>;
  _not?: InputMaybe<Games_Bool_Exp>;
  _or?: InputMaybe<Array<Games_Bool_Exp>>;
  buzzed_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  categories?: InputMaybe<Categories_Bool_Exp>;
  categories_aggregate?: InputMaybe<Categories_Aggregate_Bool_Exp>;
  current_answer?: InputMaybe<Uuid_Comparison_Exp>;
  current_round?: InputMaybe<Numeric_Comparison_Exp>;
  host_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "games" */
export enum Games_Constraint {
  /** unique or primary key constraint on columns "id" */
  GamesPkey = 'games_pkey'
}

/** input type for incrementing numeric columns in table "games" */
export type Games_Inc_Input = {
  current_round?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "games" */
export type Games_Insert_Input = {
  buzzed_user_id?: InputMaybe<Scalars['uuid']>;
  categories?: InputMaybe<Categories_Arr_Rel_Insert_Input>;
  current_answer?: InputMaybe<Scalars['uuid']>;
  current_round?: InputMaybe<Scalars['numeric']>;
  host_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: 'games_max_fields';
  buzzed_user_id?: Maybe<Scalars['uuid']>;
  current_answer?: Maybe<Scalars['uuid']>;
  current_round?: Maybe<Scalars['numeric']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: 'games_min_fields';
  buzzed_user_id?: Maybe<Scalars['uuid']>;
  current_answer?: Maybe<Scalars['uuid']>;
  current_round?: Maybe<Scalars['numeric']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "games" */
export type Games_Mutation_Response = {
  __typename?: 'games_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Games>;
};

/** input type for inserting object relation for remote table "games" */
export type Games_Obj_Rel_Insert_Input = {
  data: Games_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** on_conflict condition type for table "games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns?: Array<Games_Update_Column>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** Ordering options when selecting data from "games". */
export type Games_Order_By = {
  buzzed_user_id?: InputMaybe<Order_By>;
  categories_aggregate?: InputMaybe<Categories_Aggregate_Order_By>;
  current_answer?: InputMaybe<Order_By>;
  current_round?: InputMaybe<Order_By>;
  host_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games */
export type Games_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  BuzzedUserId = 'buzzed_user_id',
  /** column name */
  CurrentAnswer = 'current_answer',
  /** column name */
  CurrentRound = 'current_round',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "games" */
export type Games_Set_Input = {
  buzzed_user_id?: InputMaybe<Scalars['uuid']>;
  current_answer?: InputMaybe<Scalars['uuid']>;
  current_round?: InputMaybe<Scalars['numeric']>;
  host_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Games_Stddev_Fields = {
  __typename?: 'games_stddev_fields';
  current_round?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Games_Stddev_Pop_Fields = {
  __typename?: 'games_stddev_pop_fields';
  current_round?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Games_Stddev_Samp_Fields = {
  __typename?: 'games_stddev_samp_fields';
  current_round?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "games" */
export type Games_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Games_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Games_Stream_Cursor_Value_Input = {
  buzzed_user_id?: InputMaybe<Scalars['uuid']>;
  current_answer?: InputMaybe<Scalars['uuid']>;
  current_round?: InputMaybe<Scalars['numeric']>;
  host_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Games_Sum_Fields = {
  __typename?: 'games_sum_fields';
  current_round?: Maybe<Scalars['numeric']>;
};

/** update columns of table "games" */
export enum Games_Update_Column {
  /** column name */
  BuzzedUserId = 'buzzed_user_id',
  /** column name */
  CurrentAnswer = 'current_answer',
  /** column name */
  CurrentRound = 'current_round',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Games_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Games_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Games_Var_Pop_Fields = {
  __typename?: 'games_var_pop_fields';
  current_round?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Games_Var_Samp_Fields = {
  __typename?: 'games_var_samp_fields';
  current_round?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Games_Variance_Fields = {
  __typename?: 'games_variance_fields';
  current_round?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "answers" */
  delete_answers?: Maybe<Answers_Mutation_Response>;
  /** delete single row from the table: "answers" */
  delete_answers_by_pk?: Maybe<Answers>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "answers" */
  insert_answers?: Maybe<Answers_Mutation_Response>;
  /** insert a single row into the table: "answers" */
  insert_answers_one?: Maybe<Answers>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "answers" */
  update_answers?: Maybe<Answers_Mutation_Response>;
  /** update single row of the table: "answers" */
  update_answers_by_pk?: Maybe<Answers>;
  /** update multiples rows of table: "answers" */
  update_answers_many?: Maybe<Array<Maybe<Answers_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update multiples rows of table: "games" */
  update_games_many?: Maybe<Array<Maybe<Games_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AnswersArgs = {
  where: Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Answers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AnswersArgs = {
  objects: Array<Answers_Insert_Input>;
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Answers_OneArgs = {
  object: Answers_Insert_Input;
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AnswersArgs = {
  _inc?: InputMaybe<Answers_Inc_Input>;
  _set?: InputMaybe<Answers_Set_Input>;
  where: Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Answers_By_PkArgs = {
  _inc?: InputMaybe<Answers_Inc_Input>;
  _set?: InputMaybe<Answers_Set_Input>;
  pk_columns: Answers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Answers_ManyArgs = {
  updates: Array<Answers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Games_ManyArgs = {
  updates: Array<Games_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  /** An array relationship */
  categories: Array<Categories>;
  /** An aggregate relationship */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Query_RootAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Query_RootAnswers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  /** fetch data from the table in a streaming manner: "answers" */
  answers_stream: Array<Answers>;
  /** An array relationship */
  categories: Array<Categories>;
  /** An aggregate relationship */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table in a streaming manner: "games" */
  games_stream: Array<Games>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAnswers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAnswers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Answers_Stream_Cursor_Input>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGames_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Games_Stream_Cursor_Input>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  active: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  password?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  active?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetGameByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetGameByPkQuery = { __typename?: 'query_root', games_by_pk?: { __typename?: 'games', name: string, current_answer?: any | null, current_round?: any | null, buzzed_user_id?: any | null } | null };

export type SubscribeGameByPkSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type SubscribeGameByPkSubscription = { __typename?: 'subscription_root', games_by_pk?: { __typename?: 'games', name: string, current_answer?: any | null, current_round?: any | null, buzzed_user_id?: any | null, categories: Array<{ __typename?: 'categories', id: any, name: string, position: any, answers: Array<{ __typename?: 'answers', id: any, answer: string, value: any, question?: string | null, type: string, hasBeenPlayed: boolean }> }> } | null };

export type UserDataFragment = { __typename?: 'users', id: any, username: string, email?: string | null, active: boolean };

export type GetUserByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserByPkQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: any, username: string, email?: string | null, active: boolean } | null };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, username: string, email?: string | null, active: boolean }> };

export type GetUserByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserByUsernameQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, username: string, email?: string | null, active: boolean }> };

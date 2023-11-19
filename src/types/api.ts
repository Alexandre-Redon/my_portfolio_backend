import { IHttpMethod } from './method';
import { IProject } from './project';
import { ICreateUser, ILoadUser, IUser } from './user';

export const unknown = undefined as unknown;

export type IRoute = {
  method: IHttpMethod;
  url: string;
  body?: any;
  response: any;
};

export type NestedRoute = {
  [K: string]: NestedRoute | IRoute;
};

const IApiType = <T extends NestedRoute>(api: T) => api;
export const api = IApiType({
  user: {
    load: {
      method: 'POST',
      url: '/users/load',
      body: unknown as ILoadUser,
      response: unknown as IUser,
    },
    create: {
      method: 'POST',
      url: '/users/create',
      body: unknown as ICreateUser,
      response: unknown as void,
    },
    findAll: {
      method: 'GET',
      url: '/users',
      response: unknown as IUser[],
    },
    delete: {
      method: 'DELETE',
      url: '/users/:id',
      response: unknown as void,
    },
    update: {
      method: 'PUT',
      url: '/users/:id',
      body: unknown as ICreateUser,
      response: unknown as void,
    },
  },
  project: {
    findAll: {
      method: 'GET',
      url: '/projects',
      response: unknown as IProject[],
    },
    findById: {
      method: 'GET',
      url: '/projects/:id',
      response: unknown as IProject,
    },
    create: {
      method: 'POST',
      url: '/projects',
      body: unknown as IProject,
      response: unknown as void,
    },
    update: {
      method: 'PUT',
      url: '/projects/:id',
      body: unknown as IProject,
      response: unknown as void,
    },
    delete: {
      method: 'DELETE',
      url: '/projects/:id',
      response: unknown as void,
    },
  },
});

import { verifyGatewayRequest } from '@Emmanuel-MacAnThony/jobber-shared';
import { Application } from 'express';
import { authRoutes } from '@auth/routes/auth';
import { healthRoutes } from '@auth/routes/health';
import { currentUserRoutes } from '@auth/routes/current-user';

export function appRoutes(app: Application): void {
  const BASE_PATH = '/api/v1/auth';
  app.use('', healthRoutes());
  app.use(BASE_PATH, verifyGatewayRequest, authRoutes());
  app.use(BASE_PATH, verifyGatewayRequest, currentUserRoutes());
}
